
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

var myAgenda = agenda();

console.log( typeof agenda );
console.log( typeof myAgenda );


// Add people
myAgenda.add({ id: 0, name: 'Steven', cel: '222' });
myAgenda.add({ id: 1, name: 'Carmen', cel: '333' });
myAgenda.add({ id: 2, name: 'Murfia', cel: '444' });

// Check
console.log( myAgenda.db() );

// Remove People
myAgenda.del(1);

// Check
console.log( myAgenda.db() );