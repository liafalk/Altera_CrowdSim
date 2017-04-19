/*
 * Agent.h
 * RVO2 Library
 *
 * Copyright (c) 2008-2010 University of North Carolina at Chapel Hill.
 * All rights reserved.
 *
 * Permission to use, copy, modify, and distribute this software and its
 * documentation for educational, research, and non-profit purposes, without
 * fee, and without a written agreement is hereby granted, provided that the
 * above copyright notice, this paragraph, and the following four paragraphs
 * appear in all copies.
 *
 * Permission to incorporate this software into commercial products may be
 * obtained by contacting the authors <geom@cs.unc.edu> or the Office of
 * Technology Development at the University of North Carolina at Chapel Hill
 * <otd@unc.edu>.
 *
 * This software program and documentation are copyrighted by the University of
 * North Carolina at Chapel Hill. The software program and documentation are
 * supplied "as is," without any accompanying services from the University of
 * North Carolina at Chapel Hill or the authors. The University of North
 * Carolina at Chapel Hill and the authors do not warrant that the operation of
 * the program will be uninterrupted or error-free. The end-user understands
 * that the program was developed for research purposes and is advised not to
 * rely exclusively on the program for any reason.
 *
 * IN NO EVENT SHALL THE UNIVERSITY OF NORTH CAROLINA AT CHAPEL HILL OR THE
 * AUTHORS BE LIABLE TO ANY PARTY FOR DIRECT, INDIRECT, SPECIAL, INCIDENTAL, OR
 * CONSEQUENTIAL DAMAGES, INCLUDING LOST PROFITS, ARISING OUT OF THE USE OF THIS
 * SOFTWARE AND ITS DOCUMENTATION, EVEN IF THE UNIVERSITY OF NORTH CAROLINA AT
 * CHAPEL HILL OR THE AUTHORS HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH
 * DAMAGE.
 *
 * THE UNIVERSITY OF NORTH CAROLINA AT CHAPEL HILL AND THE AUTHORS SPECIFICALLY
 * DISCLAIM ANY WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE AND ANY
 * STATUTORY WARRANTY OF NON-INFRINGEMENT. THE SOFTWARE PROVIDED HEREUNDER IS ON
 * AN "AS IS" BASIS, AND THE UNIVERSITY OF NORTH CAROLINA AT CHAPEL HILL AND THE
 * AUTHORS HAVE NO OBLIGATIONS TO PROVIDE MAINTENANCE, SUPPORT, UPDATES,
 * ENHANCEMENTS, OR MODIFICATIONS.
 *
 * Please send all bug reports to <geom@cs.unc.edu>.
 *
 * The authors may be contacted via:
 *
 * Jur van den Berg, Stephen J. Guy, Jamie Snape, Ming C. Lin, Dinesh Manocha
 * Dept. of Computer Science
 * 201 S. Columbia St.
 * Frederick P. Brooks, Jr. Computer Science Bldg.
 * Chapel Hill, N.C. 27599-3175
 * United States of America
 *
 * <http://gamma.cs.unc.edu/RVO2/>
 */

#ifndef RVO_AGENT_H_
#define RVO_AGENT_H_

/**
 * \file       Agent.h
 * \brief      Contains the Agent class.
 */

#include "Definitions.h"
#include "RVOSimulator.h"

#pragma pack(push)

namespace RVO {

    // This is current limitatino for this port to OpenCL
    const int RVO_MAX_NUM_OBSTACLE_NEIGHBORS = 16;

    /**
     * \brief      Defines an agent in the simulation.
     */

    #pragma pack(4)
    struct AgentNeighbor
    {
        cl_float first;
        const Agent * second;

        AgentNeighbor () {}

        AgentNeighbor (const std::pair<float, const Agent*>& pair) :
            first(pair.first),
            second(pair.second)
        {
        }
    };

    #pragma pack(4)
    struct ObstacleNeighbor
    {
        cl_float first;
        const Obstacle * second;

        ObstacleNeighbor () {}

        ObstacleNeighbor (const std::pair<float, const Obstacle*>& pair) :
            first(pair.first),
            second(pair.second)
        {
        }
    };

    #pragma pack(4)
    struct Agent {

    private:
        /**
         * \brief      Constructs an agent instance.
         * \param      sim             The simulator instance.
         */
        explicit Agent(RVOSimulator *sim);

        /**
         * \brief      Computes the neighbors of this agent.
         */
        void computeNeighbors();

        /**
         * \brief      Computes the new velocity of this agent.
         */
        void computeNewVelocity();

        /**
         * \brief      Inserts an agent neighbor into the set of neighbors of
         *             this agent.
         * \param      agent           A pointer to the agent to be inserted.
         * \param      rangeSq         The squared range around this agent.
         */
        void insertAgentNeighbor(const Agent *agent, float &rangeSq);

        /**
         * \brief      Inserts a static obstacle neighbor into the set of neighbors
         *             of this agent.
         * \param      obstacle        The number of the static obstacle to be
         *                             inserted.
         * \param      rangeSq         The squared range around this agent.
         */
        void insertObstacleNeighbor(const Obstacle *obstacle, float rangeSq);

        /**
         * \brief      Updates the two-dimensional position and two-dimensional
         *             velocity of this agent.
         */
        void update();

        
        /**
         * \brief      Allocates buffers for neighbors and ORCA lines in advance
         *             to be used in kernel without need of allocation by demand.
         *             This needs more memory allocated in advance but avoids
         *             dynamic allocations inside the kernel which is not an easy task
         *             even with using OpenCL 2.0.
         */
        void allocateBuffers (SVMAllocator* svmallocator);

        AgentNeighbor* agentNeighbors_;
        cl_uint numAgentNeighbors_; // number of filled elements in agentNeighbors
        cl_uint maxNeighbors_;
        cl_float maxSpeed_;
        cl_float neighborDist_;
        Vector2 newVelocity_;
        ObstacleNeighbor* obstacleNeighbors_;
        cl_uint numObstacleNeighbors_; // number of filled elements in agentNeighbors
        cl_uint maxObstacleNeighbors_;  // number of allocated positions in obstacleNeighbors, can be increased dynamically
        Line* orcaLines_;
        cl_uint numOrcaLines_;
        Line* projLines_;   // used as a scratch buffer for calling linearProgram3
        Vector2 position_;
        Vector2 prefVelocity_;
        cl_float radius_;
        RVOSimulator *sim_;
        cl_float timeHorizon_;
        cl_float timeHorizonObst_;
        Vector2 velocity_;

        cl_uint id_;

        friend class KdTree;
        friend class RVOSimulator;
    };

    /**
     * \relates    Agent
     * \brief      Solves a one-dimensional linear program on a specified line
     *             subject to linear constraints defined by lines and a circular
     *             constraint.
     * \param      lines         Lines defining the linear constraints.
     * \param      lineNo        The specified line constraint.
     * \param      radius        The radius of the circular constraint.
     * \param      optVelocity   The optimization velocity.
     * \param      directionOpt  True if the direction should be optimized.
     * \param      result        A reference to the result of the linear program.
     * \return     True if successful.
     */
    bool linearProgram1(const Line* lines, size_t lineNo,
                        float radius, const Vector2 &optVelocity,
                        bool directionOpt, Vector2 &result);

    /**
     * \relates    Agent
     * \brief      Solves a two-dimensional linear program subject to linear
     *             constraints defined by lines and a circular constraint.
     * \param      lines         Lines defining the linear constraints.
     * \param      radius        The radius of the circular constraint.
     * \param      optVelocity   The optimization velocity.
     * \param      directionOpt  True if the direction should be optimized.
     * \param      result        A reference to the result of the linear program.
     * \return     The number of the line it fails on, and the number of lines if successful.
     */
    size_t linearProgram2(const Line* lines, size_t numLines, float radius,
                          const Vector2 &optVelocity, bool directionOpt,
                          Vector2 &result);

    /**
     * \relates    Agent
     * \brief      Solves a two-dimensional linear program subject to linear
     *             constraints defined by lines and a circular constraint.
     * \param      lines         Lines defining the linear constraints.
     * \param      numObstLines  Count of obstacle lines.
     * \param      beginLine     The line on which the 2-d linear program failed.
     * \param      radius        The radius of the circular constraint.
     * \param      result        A reference to the result of the linear program.
     */
    void linearProgram3(const Line* lines, size_t numLines, size_t numObstLines, size_t beginLine,
                        float radius, Vector2 &result, Line* projLines);
}

#pragma pack(pop)

#endif /* RVO_AGENT_H_ */
