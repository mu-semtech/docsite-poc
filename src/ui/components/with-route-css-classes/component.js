import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import Component from '@ember/component';

export default class WithRouteCssClassesComponent extends Component {
  @service router

  classNameBindings = ['currentRouteClasses']

  @computed('router.currentRouteName')
  get currentRouteClasses() {
    const base = "route_";
    let prefix = base;
    let currentElements=[];
    this.router.currentRouteName.split(".").forEach( (routeSection) => {
      let newPrefix = prefix + `_${routeSection}`;
      currentElements.push( newPrefix );
      prefix = newPrefix;
    } );
    return currentElements.join(" ");
  }
}
