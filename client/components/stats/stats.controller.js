'use-strict';

class StatsController {

      //controller constructor
      constructor($http, $interval) {
            this.$http = $http;
            this.$interval = $interval;
            this.stats = {};
            let initialGet = 0;
            this.statDate = new Date();
            //function to call on the twitch api summary.
            //also includes the post that will send each api call data to the back end
            let query = () => {
                  $http.get('https://api.twitch.tv/kraken/streams/summary').then(response => {
                        //making an object so I dont have the kraken link in every single object stored in the db
                        this.stats.channels = response.data.channels;
                        this.stats.viewers = response.data.viewers;
                        this.stats.date = this.statDate;
                  });
            }
            //needed a function to initially use an http.get
            //because timer will be set to ~30 mins?
            if(initialGet === 0) {
                  query();
                  initialGet += 1;
            }
            $interval(query, 1800000);
      }

}

angular.module('StreamSummaryApp')
      .controller('StatsController', StatsController);
