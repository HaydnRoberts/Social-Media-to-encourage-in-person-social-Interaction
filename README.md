# Social-Media-to-encourage-in-person-social-Interaction
This project is a Social Media based around connecting small in-person groups. It is aimed at those who struggle with social interaction and would benefit from being able to see who they might meet, and even play low stakes games with them. This will help thier confidence towards meeting the group in person.

To run the docker build:

Terminal into project folder using GitBash or another Unix terminal

```source up.sh``` 
(```. up.sh``` or ```docker compose up -d``` are also valid)

To close the docker build:

```docker compose down```

To interact with the port 27017 database:
enter the terminal for the projects database container

Enter ```mongodb://root:example@localhost:27017/```

To interact with the port 83 database:
enter the GitBash terminal and enter:
```mongodb://root:example@localhost:83/```

Or you can interact with this database using MongoDB Compass with:
```mongodb://root:*****@localhost:83/?authSource=admin```