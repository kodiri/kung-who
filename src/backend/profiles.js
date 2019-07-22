
let getProfiles = function() {
    return [
        { 
            id: 'adamsmith', 
            fullname: 'Adam Smith',
            firstname: 'Adam', 
            lastname: 'Smith', 
            address: 'Bermondsey',
            map: 'bermondsey',
            rate: '20',
            type: 'Judo',
            description: 'I am currently in my final year studying at the University of London, where I am a member of the university Judo team. I have given lessons in Judo and self-defence before to both men and women, both beginners and more experienced individuals.' 
        },
        { 
            id: 'katieberry', 
            fullname: 'Katie Berry',
            firstname: 'Katie', 
            lastname: 'Berry', 
            address: 'Canada Water', 
            map: 'canada%20water',
            rate: '40',
            type: 'Taekwondo',
            description: 'I am a female British & World Champion Martial Arts Instructor. With over 10 years experience. I teach from age 5+.',
          },
        {
            id: 'natalieprice', 
            fullname: 'Natalie Price',
            firstname: 'Natalie', 
            lastname: 'Price', 
            gender: 'Female',
            address: 'Peckham', 
            map: 'peckham',
            rate: '30',
            type: 'Boxing',
            description: 'I’m a boxer, I’ve been on my National team for two years, and I have experience with kids and beginners.' 
            },
        { 
            id: 'peterjones', 
            fullname: 'Peter Jones',
            firstname: 'Peter', 
            lastname: 'Jones', 
            gender: 'Male',
            address: 'Deptford', 
            map: 'deptford',
            rate: 30,
            type: 'karate',
            description: 'I have been teaching karate and self defence for over 8 years, still teaching in central London. I have taught students that have won competitions nationally and internationally I also teach self defense to adults.' 
            },
        {
            id: 'sarahhills', 
            fullname: 'Sarah Hills',
            firstname: 'Sarah', 
            lastname: 'Hills', 
            gender: 'Female',
            address: 'Limehouse', 
            map: 'Limehouse',
            rate: '25',
            type: 'judo',
            description: 'I have been learning Judo for over 5 years and I have been voluntarily instructing for about 2 years! I love the sport and want to make it more accessible for those unable to or simply those that are not feeling ready to walk into their first Judo club.' 
        }
    ];
}

module.exports = getProfiles;



