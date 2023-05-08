import { Component} from '@angular/core';
import { map, timer, merge, scan } from 'rxjs';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.scss']
})
export class VotingComponent {
  results = { za: 0, przeciw: 0 };

  constructor() {
    // Utwórz strumienie dla każdej osoby oddającej głos
    const firstPerson = timer(2000).pipe(map(() => this.randomVote()));
    const secondPerson = timer(3000).pipe(map(() => this.randomVote()));
    const thirdPerson = timer(1000).pipe(map(() => this.randomVote()));

    // Połącz strumienie w jeden
    const allVotes = merge(firstPerson, secondPerson, thirdPerson);

    // Przeprowadź skanowanie (akumulację) wyników
    allVotes
      .pipe(
        scan(
          (acc, vote) =>
            vote === 'za'
              ? { ...acc, za: acc.za + 1 }
              : { ...acc, przeciw: acc.przeciw + 1 },
          { za: 0, przeciw: 0 }
        )
      )
      .subscribe((results) => {
        this.results = results;
        console.log(results);
      });
  }

  randomVote = () => {
    if (Math.random() > 0.5) {
      return 'za'
    } else return 'przeciw'
  }
}
