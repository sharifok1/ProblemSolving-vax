function compareNumbers(a, b) {
    return a.age - b.age;
  }
  
  function vaxTrail(peoples) {
    const A = [].sort();
    const B = [].sort();
    const C = [].sort();
    const D = [].sort();
  
    peoples.forEach((people) => {
      if (people.temperature >= 100) {
        D.push(people);
      } else {
        if (people.age >= 20 && people.age <= 30) {
          A.push(people);
        }
  
        if (people.age >= 31 && people.age <= 40) {
          B.push(people);
        }
  
        if (people.age >= 41 && people.age <= 50) {
          C.push(people);
        }
      }
    });
  
    return { A: A, B: B, C: C, D: D };
  }
  
  console.log(
    vaxTrail([
      { name: "sunil", age: 21, temperature: 98 },
      { name: "Biplap", age: 22, temperature: 98 },
      { name: "Biplap", age: 22, temperature: 100 },
      { name: "Biplap", age: 50, temperature: 90 },
      { name: "Biplap", age: 40, temperature: 80 },
    ])
  );
  