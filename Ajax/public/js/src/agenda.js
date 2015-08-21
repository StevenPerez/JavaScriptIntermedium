var $       = require('jquery'),
    Promise = require('es6-promise').Promise;

agenda = function agenda() {

  function db() {

    return new Promise(function(resolve, reject){
      try {

        $.get('/agenda').then(function(res){
          resolve(res._result);
        });
      } catch (err) {
        reject(err);
      }

    });

  }

  return {

    db: db,

    add: function add(person) {

      return new Promise(function(resolve, reject){
        try {

          person = person || {};

          if (!person.hasOwnProperty('name') || !person.hasOwnProperty('cel'))
            throw 'Missing name or cel';

          $.post('agenda/new', person).then(function(res){
            resolve('Added');
          });

        } catch (err) {
          reject(err);
        }
      });

    },

    del: function del(cuid) {

      return new Promise(function(resolve, reject){
        try {

          $.post('agenda/delete', { cuid: cuid}).then(function(res){
            resolve('Deleted');
          });

        } catch (err) {
          reject(err);
        }
      });

    },

    update: function update(param) {

      return new Promise(function(resolve, reject){
        try {

          $.post('agenda/update', param).then(function(res){
            resolve('Updated');
          });

        } catch (err) {
          reject(err);
        }
      });

    }

  };

};

var logAgenda = agenda();

logAgenda.add({ name: 'A', age: 10, cel: '01' });
logAgenda.add({ name: 'B', age: 15, cel: '02' });

// Read
logAgenda.db()
         .then(function(result){

            console.log( JSON.parse( JSON.stringify(result)) );

            // Update
            result[1].name = 'Yolo';
            logAgenda.update({ cuid: result[1].cuid,
                              item: JSON.stringify(result[1]) })
                      .then(function(res){
                        console.log(res);
                      });

            // Delete
            logAgenda.del(result[2].cuid)
                     .then(function(res){
                      console.log(res);
                     });
         })
         .then(function(){

          // Check DB
          logAgenda.db()
                   .then(function(db){
                    console.log(db);
                   });

         });