import React,{ useState} from 'react';
import TinderCard from "react-tinder-card";
import './tindercards.css';

function TinderCards() {
    const [people, setPeople] = useState([
        {
        name: "Elon Musk",
        url: "https://media.beam.usnews.com/d1/d8/8501ba714a21aed9a7327e02ade1/180515-10thingselonmusk-editorial.jpg"
        },
        {
            name: "Jeff Bezos",
            url: "https://i.guim.co.uk/img/media/6fe9280dc6cf8c95543a22f8eea16baa15f754f2/0_44_2200_1320/master/2200.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=4eee5edefef91840a6eaf441c64b613e"
        }
    ]);
    const swiped = (direction, nameToDelete) => {
        console.log("removing:" +nameToDelete);
        //setLastDirection(direction);
    };

    const outOfFrame = (name) =>  {
        console.log(name + "left the screen");
    };

    return (
        <div className="tindercards">
            <div className="tinderCards__cardContainer">
            {people.map((person)=>(
                <TinderCard className = "swipe"
                key={people.name}
                preventSwipe={["up","down"]}
                onSwipe = {(dir) => swiped(dir, people.name)}
                onCardLeftScreen={()=> outOfFrame(people.name)}
                >   
                <div style = {{backgroundImage : "url(" +person.url+")"}}
                className = "card"
                >
                    <h3>{person.name}</h3>
                </div>
                </TinderCard>
            ))}
            </div>
        </div>
    )
}

export default TinderCards
