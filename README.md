# tailwindcss_playground

# docker build -t tailwindcss_playground:latest .

# dev mode
# docker run -it -v $(pwd):/app -p 8082:8082 tailwindcss_playground:latest

# prod mode: 
# on Dockerfile change CMD npm run dev to CMD npm run build