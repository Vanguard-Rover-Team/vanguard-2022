### To use Docker
If you haven't used docker before, begin by following [this tutorial](https://docs.docker.com/get-started/) to get started.

### To build the rover-main application
Once you have a grasp of how to use Docker, navigate to the ```rover-main/``` directory (The location of this README file).

The following command will build the image for the rover-main application:
```bash
docker compose build
```

Now run
```bash
docker compose up
```
This will start a container from the image and give you the output.

If you make changes to the ```Dockerfile``` or the source code in ```/rover-main/src```, the image must be rebuilt with ```docker compose build``` before the changes will be reflected. ```docker compose up``` only builds if there is not an existing image.