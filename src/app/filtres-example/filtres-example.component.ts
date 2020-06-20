import {Component, OnInit} from '@angular/core';
import {ListeService} from './listeService';

@Component({
  selector: 'app-filtres-example',
  templateUrl: './filtres-example.component.html',
  styleUrls: ['./filtres-example.component.css']
})
export class FiltresExampleComponent  implements OnInit  {

  filters = [
    { attack_type: "melee" },
    { attribute: "strength" }
  ];

  heroes = [
    {
      name: "warrior",
      primary_skill: "greater bash",
      attack_type: "melee",
      attribute: "strength"
    },
    {
      name: "ranger",
      primary_skill: "focus fire",
      attack_type: "range",
      attribute: "agility"
    },
    {
      name: "mage",
      primary_skill: "oblivion",
      attack_type: "magic",
      attribute: "intelligence"
    },
    {
      name: "soldier",
      primary_skill: "sword dance",
      attack_type: "melee",
      attribute: "strength"
    }
  ]

  list1;
  list2;
  list3 = [];
  list4 = [];
  listReq = [];
  constructor(private service: ListeService) {}

  ngOnInit() {
    this.service.getListe1().then(l1 => {
      this.list1 = l1;
      this.service.getListe2().then(l2 => {
        this.list2 = l2;

        console.log(this.list1);

        this.filterWithForNormal(this.list1, this.list2);

        this.list3 = this.list1.filter((l1) => {
          return !this.list2.find((l2) => {
              if(l1.EXISTE !== l2.EXISTE) {
                this.list4.push(l1)
              }
          });




      });


      })
    });





  }


  filterWithForNormal(list1, list2) {
    this.listReq = [];
    for (let i = 0; i < list1.length; i++) {
      if (list1[i].numLigne === list2[i].numLigne && list1[i].EXISTE != list2[i].EXISTE) {
        if (list1[i].EXISTE == '0') {
          this.listReq.push(list1[i].REQUETE_DELETE);
        } else {
          this.listReq.push(list1[i].REQUETE_INSERT);
        }
      }
    }
  }

  test() {
    console.log("dali")
    /* this.list3 = this.heroes.filter( s => //for every object in heroes
       this.filters.every( t => { //check if every filter in iteration has the same value or not
          var key = Object.keys(t)[0];
          return s[key] == t[key]
       })
   );*/
  }


  /*this.listTypCont = this.listTypCont.filter((objFromListTypCont) => {
            return !list.find((objFromDefaultvalueListTable) => {
                return objFromListTypCont.id === objFromDefaultvalueListTable.id;
            });
        });*/


  /*
              this.defaultvalueListTable = this.defaultvalueListTable.filter((el) => !this.defaultvalueListRemoved.includes(el));

  */

}
