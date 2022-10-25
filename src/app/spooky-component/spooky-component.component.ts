import { Component, OnInit } from '@angular/core';

interface SpookyCreature {
  title: string;
  subtitle: string;
  image_link: string;
  description: string;
}

@Component({
  selector: 'app-spooky-component',
  templateUrl: './spooky-component.component.html',
  styleUrls: ['./spooky-component.component.css']
})
export class SpookyComponentComponent implements OnInit {
  creatures: SpookyCreature[] = [
    {title: "Vampire",
      subtitle: "Blood drinkers",
      image_link: "https://i.pinimg.com/originals/b6/40/6d/b6406d0505a0f65b49ab4072babbea7f.png",
      description: "Vampires burn in the sun and only roam at night. They drink blood to survive and are repelled with garlic."},
    {title: "Skeleton",
      subtitle: "Made of bones",
      image_link: "https://upload.wikimedia.org/wikipedia/commons/5/5c/201805_human_skeleton.png",
      description: "Skeletons move like humans but without the flesh and blood getting in the way."},
  ];

  curValue: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  moveLeft() {
    if(this.curValue > 0){
      this.curValue -= 1;
    }
    else{
      this.curValue = this.creatures.length - 1
    }
  }

  moveRight() {
    if(this.curValue < this.creatures.length - 1){
      this.curValue += 1;
    }
    else{
      this.curValue = 0
    }
  }
}
