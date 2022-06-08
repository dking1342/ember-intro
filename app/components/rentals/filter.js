import Component from '@glimmer/component';

export default class RentalsFilterComponent extends Component {
  get results() {
    let { rentals, query } = this.args;

    if (query) {
      rentals = rentals.filter((rental) => {
        let rentalTitle = rental.title.toLowerCase();
        let queryInput = query.toLowerCase();
        return rentalTitle.includes(queryInput);
      });
    }

    return rentals;
  }
}
