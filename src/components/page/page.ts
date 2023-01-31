import { Component, InsertPosition } from '../component/component';

export class Page extends Component {
  constructor(public selector: string) {
    super();
    this.template = this.createTemplate();
    this.render('afterbegin');
  }

  private createTemplate() {
    return `
      <div class="app container">
    <ul class="characters-list row list-unstyled">
    </ul>
      </div>
    `;
  }

  render(place: InsertPosition) {
    super.render(place);
  }
}
