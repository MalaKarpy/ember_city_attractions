import Ember from 'ember';

var attractions = [{
  id: 1,
  name: "OMSI",
  description: "Science Museum",
  image: "http://blog.oregonlive.com/advertorial/2009/04/large_omsi_453x509.jpg"
}, {
  id: 2,
  name: "ZOO",
  description:"Watch Wild Animals",
  image: "http://www.guidetooregon.com/regions/metro/images/zoo.jpg"

}];

export default Ember.Route.extend({
  model() {
    return this.store.findAll('attractions');
    //return attractions;
  },
});
