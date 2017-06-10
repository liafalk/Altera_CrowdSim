ffmpeg -framerate 30 -i 'output/%d.png' -c:v libx264 -s 400x400 -pix_fmt yuv420p out.mp4
