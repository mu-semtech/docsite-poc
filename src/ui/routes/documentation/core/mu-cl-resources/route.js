import Route from '@ember/routing/route';
import fetch from 'fetch';

export default class DocumentationCoreMuClResourcesRoute extends Route {
  async model(){
    const response = await fetch("https://raw.githubusercontent.com/mu-semtech/mu-cl-resources/master/README.md");
    return response.text();
  }
}
