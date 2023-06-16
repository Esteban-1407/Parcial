let animales = [
    {
      nombre: 'León',
      tipo: 'Mamífero',
      clase: 'Felino',
      habitat: 'Savana',
      dieta: 'Carnívoro'
    },
    {
      nombre: 'Tigre',
      tipo: 'Mamífero',
      clase: 'Felino',
      habitat: 'Selva',
      dieta: 'Carnívoro'
    },
    {
      nombre: 'Elefante',
      tipo: 'Mamífero',
      clase: 'Mammalia',
      habitat: 'Savana',
      dieta: 'Herbívoro'
    },
    {
      nombre: 'Águila',
      tipo: 'Oviparo',
      clase: 'Ave',
      habitat: 'Montañas',
      dieta: 'Carnívoro'
    }
  ];
  let filtrado= "Savana";

  const Array = animales.forEach(x=>{
   console.log(x)
  }
  );
const Filter = animales.filter(animal => animal.habitat === filtrado);
console.log(Filter);
