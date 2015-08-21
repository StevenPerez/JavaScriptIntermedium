
agenda = function agenda() {

  /*----------  Private - Implementation  ----------*/
  var people = [];

  function db() {
    return people;
  }

  return {
      /*----------  Public - Interface  ----------*/
      
      db: db,

      add: function add(person) {
        // Check consistens
        person = person || {};

        if (!person.hasOwnProperty('id') ||
            !person.hasOwnProperty('name') || 
            !person.hasOwnProperty('cel'))
          { 
              throw 'Missing id or name or cel value';
          }

        people.push(person);
        
      },

      del: function del(id) {

        if (id === undefined)
          throw 'Missing id';

        var index = people.map(function(person){ return person.id; })
                          .indexOf(id);

        people.splice(index, 1);

      }
  };

};

module.exports = agenda;