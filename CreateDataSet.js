var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("College");
  var myobj = [
   {
    id: 1,
    name: "Quin",
    Surname: "Casey",
    DOB: "1987/03/08",
    Stage: 1
  },
  {
    id: 2,
    name: "Keelie",
    Surname: "Mathews",
    DOB: "1981/02/22",
    Stage: 1
  },
  {
    id: 3,
    name: "Giacomo",
    Surname: "Odom",
    DOB: "1992/02/15",
    Stage: 4
  },
  {
    id: 4,
    name: "Avye",
    Surname: "Jarvis",
    DOB: "2001/07/31",
    Stage: 2
  },
  {
    id: 5,
    name: "Hedy",
    Surname: "Pace",
    DOB: "1989/05/21",
    Stage: 1
  },
  {
    id: 6,
    name: "Genevieve",
    Surname: "Mccarty",
    DOB: "1980/06/09",
    Stage: 2
  },
  {
    id: 7,
    name: "Chaney",
    Surname: "Chapman",
    DOB: "1984/01/16",
    Stage: 1
  },
  {
    id: 8,
    name: "Price",
    Surname: "Avila",
    DOB: "1994/08/06",
    Stage: 3
  },
  {
    id: 9,
    name: "Jordan",
    Surname: "Ortega",
    DOB: "1983/05/23",
    Stage: 4
  },
  {
    id: 10,
    name: "Reese",
    Surname: "Pickett",
    DOB: "1997/10/12",
    Stage: 3
  },
  {
    id: 11,
    name: "Dana",
    Surname: "Beck",
    DOB: "1982/09/18",
    Stage: 2
  },
  {
    id: 12,
    name: "Candace",
    Surname: "Ayers",
    DOB: "1992/11/20",
    Stage: 4
  },
  {
    id: 13,
    name: "Dara",
    Surname: "Craig",
    DOB: "1982/02/16",
    Stage: 1
  },
  {
    id: 14,
    name: "Judith",
    Surname: "Hopkins",
    DOB: "1989/05/03",
    Stage: 1
  },
  {
    id: 15,
    name: "Conan",
    Surname: "Valenzuela",
    DOB: "1999/04/27",
    Stage: 1
  },
  {
    id: 16,
    name: "Keelie",
    Surname: "Nunez",
    DOB: "1986/04/29",
    Stage: 1
  },
  {
    id: 17,
    name: "Selma",
    Surname: "Vang",
    DOB: "1992/02/07",
    Stage: 2
  },
  {
    id: 18,
    name: "Matthew",
    Surname: "Rivers",
    DOB: "1985/01/27",
    Stage: 4
  },
  {
    id: 19,
    name: "Zachary",
    Surname: "Matthews",
    DOB: "1998/06/12",
    Stage: 3
  },
  {
    id: 20,
    name: "Raymond",
    Surname: "Pickett",
    DOB: "1997/12/18",
    Stage: 1
  },
  {
    id: 21,
    name: "Madeline",
    Surname: "Martin",
    DOB: "1985/05/27",
    Stage: 1
  },
  {
    id: 22,
    name: "Steven",
    Surname: "Fowler",
    DOB: "1982/12/26",
    Stage: 2
  },
  {
    id: 23,
    name: "Odette",
    Surname: "Stout",
    DOB: "1997/08/17",
    Stage: 2
  },
  {
    id: 24,
    name: "Jacqueline",
    Surname: "Webster",
    DOB: "1993/08/04",
    Stage: 4
  },
  {
    id: 25,
    name: "Britanni",
    Surname: "Mclaughlin",
    DOB: "1996/09/20",
    Stage: 1
  },
  {
    id: 26,
    name: "Cleo",
    Surname: "Turner",
    DOB: "1994/09/04",
    Stage: 2
  },
  {
    id: 27,
    name: "Abel",
    Surname: "Gould",
    DOB: "1987/05/13",
    Stage: 1
  },
  {
    id: 28,
    name: "Martena",
    Surname: "Dickson",
    DOB: "2002/01/31",
    Stage: 4
  },
  {
    id: 29,
    name: "Leandra",
    Surname: "Bauer",
    DOB: "1996/09/08",
    Stage: 3
  },
  {
    id: 30,
    name: "Jeremy",
    Surname: "Malone",
    DOB: "1985/08/07",
    Stage: 2
  },
  {
    id: 31,
    name: "Kiayada",
    Surname: "Pennington",
    DOB: "2000/01/10",
    Stage: 2
  },
  {
    id: 32,
    name: "Fallon",
    Surname: "Hinton",
    DOB: "1989/05/19",
    Stage: 3
  },
  {
    id: 33,
    name: "Maggie",
    Surname: "Bean",
    DOB: "1990/06/08",
    Stage: 1
  },
  {
    id: 34,
    name: "Hamish",
    Surname: "Tate",
    DOB: "1991/07/17",
    Stage: 4
  },
  {
    id: 35,
    name: "Meghan",
    Surname: "Owens",
    DOB: "1980/09/01",
    Stage: 3
  },
  {
    id: 36,
    name: "Kieran",
    Surname: "Carpenter",
    DOB: "1995/09/09",
    Stage: 1
  },
  {
    id: 37,
    name: "Daniel",
    Surname: "Herring",
    DOB: "1988/06/26",
    Stage: 4
  },
  {
    id: 38,
    name: "Reece",
    Surname: "Potts",
    DOB: "1985/12/11",
    Stage: 1
  },
  {
    id: 39,
    name: "Zeus",
    Surname: "Gallegos",
    DOB: "2001/01/28",
    Stage: 3
  },
  {
    id: 40,
    name: "Stephanie",
    Surname: "Hill",
    DOB: "1981/11/22",
    Stage: 4
  },
  {
    id: 41,
    name: "Kevyn",
    Surname: "Wiggins",
    DOB: "1981/12/21",
    Stage: 3
  },
  {
    id: 42,
    name: "Jamal",
    Surname: "Fry",
    DOB: "2001/12/14",
    Stage: 4
  },
  {
    id: 43,
    name: "Magee",
    Surname: "Reilly",
    DOB: "2001/11/17",
    Stage: 1
  },
  {
    id: 44,
    name: "Cullen",
    Surname: "Mosley",
    DOB: "1992/10/16",
    Stage: 3
  },
  {
    id: 45,
    name: "Micah",
    Surname: "Jacobson",
    DOB: "1995/02/17",
    Stage: 3
  },
  {
    id: 46,
    name: "Inez",
    Surname: "Sheppard",
    DOB: "1985/03/13",
    Stage: 4
  },
  {
    id: 47,
    name: "Sebastian",
    Surname: "Noble",
    DOB: "1994/10/07",
    Stage: 2
  },
  {
    id: 48,
    name: "Alec",
    Surname: "Vance",
    DOB: "1999/11/18",
    Stage: 2
  },
  {
    id: 49,
    name: "Stacey",
    Surname: "Ashley",
    DOB: "1994/12/11",
    Stage: 3
  },
  {
    id: 50,
    name: "Colorado",
    Surname: "Wise",
    DOB: "1999/12/07",
    Stage: 4
  },
  {
    id: 51,
    name: "Brenden",
    Surname: "Clements",
    DOB: "1983/02/15",
    Stage: 2
  },
  {
    id: 52,
    name: "Mira",
    Surname: "Herring",
    DOB: "1986/03/22",
    Stage: 1
  },
  {
    id: 53,
    name: "Dillon",
    Surname: "Hodge",
    DOB: "2001/09/17",
    Stage: 3
  },
  {
    id: 54,
    name: "Stuart",
    Surname: "Holland",
    DOB: "1987/07/15",
    Stage: 1
  },
  {
    id: 55,
    name: "Doris",
    Surname: "Rogers",
    DOB: "1999/05/01",
    Stage: 1
  },
  {
    id: 56,
    name: "Hop",
    Surname: "Wilkinson",
    DOB: "1982/07/14",
    Stage: 3
  },
  {
    id: 57,
    name: "Jonas",
    Surname: "Hoover",
    DOB: "1991/05/05",
    Stage: 1
  },
  {
    id: 58,
    name: "Illiana",
    Surname: "Reeves",
    DOB: "1991/09/29",
    Stage: 3
  },
  {
    id: 59,
    name: "Cara",
    Surname: "Lane",
    DOB: "1997/04/10",
    Stage: 4
  },
  {
    id: 60,
    name: "Addison",
    Surname: "Roberts",
    DOB: "1993/03/15",
    Stage: 4
  },
  {
    id: 61,
    name: "Armando",
    Surname: "Callahan",
    DOB: "1996/05/31",
    Stage: 3
  },
  {
    id: 62,
    name: "Conan",
    Surname: "Stout",
    DOB: "1992/11/15",
    Stage: 4
  },
  {
    id: 63,
    name: "Oren",
    Surname: "Leon",
    DOB: "1998/05/03",
    Stage: 2
  },
  {
    id: 64,
    name: "Nell",
    Surname: "Parker",
    DOB: "1983/12/27",
    Stage: 3
  },
  {
    id: 65,
    name: "Craig",
    Surname: "Gilliam",
    DOB: "1986/12/20",
    Stage: 1
  },
  {
    id: 66,
    name: "Adena",
    Surname: "William",
    DOB: "1980/03/11",
    Stage: 2
  },
  {
    id: 67,
    name: "Keane",
    Surname: "Lyons",
    DOB: "1985/09/04",
    Stage: 1
  },
  {
    id: 68,
    name: "Nathan",
    Surname: "Richardson",
    DOB: "1999/02/23",
    Stage: 3
  },
  {
    id: 69,
    name: "Cailin",
    Surname: "Merrill",
    DOB: "1993/05/01",
    Stage: 2
  },
  {
    id: 70,
    name: "Xandra",
    Surname: "Lowe",
    DOB: "1987/03/23",
    Stage: 2
  },
  {
    id: 71,
    name: "Morgan",
    Surname: "Whitfield",
    DOB: "1980/11/10",
    Stage: 1
  },
  {
    id: 72,
    name: "Gabriel",
    Surname: "Acevedo",
    DOB: "1992/05/16",
    Stage: 1
  },
  {
    id: 73,
    name: "Gary",
    Surname: "Ramos",
    DOB: "1995/05/22",
    Stage: 2
  },
  {
    id: 74,
    name: "Kasper",
    Surname: "Herrera",
    DOB: "1994/05/29",
    Stage: 2
  },
  {
    id: 75,
    name: "Chester",
    Surname: "Witt",
    DOB: "1994/02/27",
    Stage: 3
  },
  {
    id: 76,
    name: "Lunea",
    Surname: "Hood",
    DOB: "1987/10/16",
    Stage: 2
  },
  {
    id: 77,
    name: "Leo",
    Surname: "Cunningham",
    DOB: "1980/11/27",
    Stage: 1
  },
  {
    id: 78,
    name: "Hamilton",
    Surname: "Zamora",
    DOB: "1995/01/03",
    Stage: 3
  },
  {
    id: 79,
    name: "Flynn",
    Surname: "Nichols",
    DOB: "1981/02/03",
    Stage: 1
  },
  {
    id: 80,
    name: "Keaton",
    Surname: "Fry",
    DOB: "1988/12/08",
    Stage: 3
  },
  {
    id: 81,
    name: "Brittany",
    Surname: "Dickerson",
    DOB: "1988/08/26",
    Stage: 1
  },
  {
    id: 82,
    name: "Quon",
    Surname: "Eaton",
    DOB: "1980/11/18",
    Stage: 4
  },
  {
    id: 83,
    name: "Graiden",
    Surname: "Gates",
    DOB: "1983/10/29",
    Stage: 2
  },
  {
    id: 84,
    name: "Caryn",
    Surname: "Stone",
    DOB: "1982/11/25",
    Stage: 2
  },
  {
    id: 85,
    name: "Katell",
    Surname: "Battle",
    DOB: "1998/05/17",
    Stage: 1
  },
  {
    id: 86,
    name: "Chantale",
    Surname: "Foster",
    DOB: "1996/07/25",
    Stage: 4
  },
  {
    id: 87,
    name: "Wylie",
    Surname: "Pace",
    DOB: "1996/08/03",
    Stage: 1
  },
  {
    id: 88,
    name: "Kessie",
    Surname: "Valentine",
    DOB: "1985/01/17",
    Stage: 4
  },
  {
    id: 89,
    name: "Dahlia",
    Surname: "Rasmussen",
    DOB: "1995/06/12",
    Stage: 3
  },
  {
    id: 90,
    name: "Gage",
    Surname: "Bruce",
    DOB: "1981/11/12",
    Stage: 4
  },
  {
    id: 91,
    name: "Jocelyn",
    Surname: "Combs",
    DOB: "1998/03/14",
    Stage: 1
  },
  {
    id: 92,
    name: "Hamish",
    Surname: "Whitfield",
    DOB: "1981/03/23",
    Stage: 4
  },
  {
    id: 93,
    name: "Virginia",
    Surname: "Potts",
    DOB: "2001/03/10",
    Stage: 3
  },
  {
    id: 94,
    name: "Raya",
    Surname: "Banks",
    DOB: "2001/01/10",
    Stage: 3
  },
  {
    id: 95,
    name: "Mona",
    Surname: "Cochran",
    DOB: "1986/05/12",
    Stage: 3
  },
  {
    id: 96,
    name: "Germane",
    Surname: "Golden",
    DOB: "1986/01/14",
    Stage: 3
  },
  {
    id: 97,
    name: "Finn",
    Surname: "Baldwin",
    DOB: "1983/07/25",
    Stage: 4
  },
  {
    id: 98,
    name: "Aspen",
    Surname: "Hood",
    DOB: "1997/02/22",
    Stage: 4
  },
  {
    id: 99,
    name: "Lillith",
    Surname: "Butler",
    DOB: "1983/02/19",
    Stage: 1
  },
  {
    id: 100,
    name: "Merrill",
    Surname: "Garrett",
    DOB: "1995/07/08",
    Stage: 3
  }
  ];
  dbo.collection("Students").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });

var Grades=[
  {
    id: "1",
    Topic1: 76,
    Topic2: 50,
    Topic3: 47,
    Topic4: 32
  },
  {
    id: "2",
    Topic1: 80,
    Topic2: 70,
    Topic3: 93,
    Topic4: 93
  },
  {
    id: "3",
    Topic1: 42,
    Topic2: 37,
    Topic3: 41,
    Topic4: 81
  },
  {
    id: "4",
    Topic1: 71,
    Topic2: 63,
    Topic3: 72,
    Topic4: 100
  },
  {
    id: "5",
    Topic1: 45,
    Topic2: 33,
    Topic3: 65,
    Topic4: 69
  },
  {
    id: "6",
    Topic1: 53,
    Topic2: 40,
    Topic3: 68,
    Topic4: 98
  },
  {
    id: "7",
    Topic1: 33,
    Topic2: 71,
    Topic3: 70,
    Topic4: 84
  },
  {
    id: "8",
    Topic1: 34,
    Topic2: 36,
    Topic3: 97,
    Topic4: 49
  },
  {
    id: "9",
    Topic1: 41,
    Topic2: 36,
    Topic3: 61,
    Topic4: 80
  },
  {
    id: "10",
    Topic1: 60,
    Topic2: 85,
    Topic3: 98,
    Topic4: 56
  },
  {
    id: "11",
    Topic1: 84,
    Topic2: 48,
    Topic3: 55,
    Topic4: 60
  },
  {
    id: "12",
    Topic1: 46,
    Topic2: 50,
    Topic3: 48,
    Topic4: 45
  },
  {
    id: "13",
    Topic1: 53,
    Topic2: 36,
    Topic3: 91,
    Topic4: 83
  },
  {
    id: "14",
    Topic1: 98,
    Topic2: 39,
    Topic3: 32,
    Topic4: 46
  },
  {
    id: "15",
    Topic1: 76,
    Topic2: 34,
    Topic3: 79,
    Topic4: 64
  },
  {
    id: "16",
    Topic1: 81,
    Topic2: 68,
    Topic3: 47,
    Topic4: 60
  },
  {
    id: "17",
    Topic1: 79,
    Topic2: 90,
    Topic3: 48,
    Topic4: 39
  },
  {
    id: "18",
    Topic1: 31,
    Topic2: 77,
    Topic3: 100,
    Topic4: 76
  },
  {
    id: "19",
    Topic1: 100,
    Topic2: 33,
    Topic3: 93,
    Topic4: 40
  },
  {
    id: "20",
    Topic1: 45,
    Topic2: 32,
    Topic3: 61,
    Topic4: 82
  },
  {
    id: "21",
    Topic1: 92,
    Topic2: 73,
    Topic3: 51,
    Topic4: 89
  },
  {
    id: "22",
    Topic1: 37,
    Topic2: 98,
    Topic3: 80,
    Topic4: 98
  },
  {
    id: "23",
    Topic1: 36,
    Topic2: 90,
    Topic3: 97,
    Topic4: 81
  },
  {
    id: "24",
    Topic1: 48,
    Topic2: 83,
    Topic3: 87,
    Topic4: 65
  },
  {
    id: "25",
    Topic1: 76,
    Topic2: 57,
    Topic3: 56,
    Topic4: 70
  },
  {
    id: "26",
    Topic1: 40,
    Topic2: 45,
    Topic3: 38,
    Topic4: 63
  },
  {
    id: "27",
    Topic1: 50,
    Topic2: 61,
    Topic3: 31,
    Topic4: 55
  },
  {
    id: "28",
    Topic1: 99,
    Topic2: 46,
    Topic3: 75,
    Topic4: 62
  },
  {
    id: "29",
    Topic1: 91,
    Topic2: 60,
    Topic3: 52,
    Topic4: 33
  },
  {
    id: "30",
    Topic1: 53,
    Topic2: 72,
    Topic3: 67,
    Topic4: 69
  },
  {
    id: "31",
    Topic1: 73,
    Topic2: 64,
    Topic3: 89,
    Topic4: 96
  },
  {
    id: "32",
    Topic1: 44,
    Topic2: 60,
    Topic3: 72,
    Topic4: 97
  },
  {
    id: "33",
    Topic1: 59,
    Topic2: 50,
    Topic3: 66,
    Topic4: 45
  },
  {
    id: "34",
    Topic1: 97,
    Topic2: 80,
    Topic3: 65,
    Topic4: 36
  },
  {
    id: "35",
    Topic1: 83,
    Topic2: 82,
    Topic3: 58,
    Topic4: 64
  },
  {
    id: "36",
    Topic1: 70,
    Topic2: 76,
    Topic3: 46,
    Topic4: 96
  },
  {
    id: "37",
    Topic1: 44,
    Topic2: 38,
    Topic3: 67,
    Topic4: 65
  },
  {
    id: "38",
    Topic1: 54,
    Topic2: 85,
    Topic3: 72,
    Topic4: 90
  },
  {
    id: "39",
    Topic1: 65,
    Topic2: 71,
    Topic3: 39,
    Topic4: 41
  },
  {
    id: "40",
    Topic1: 30,
    Topic2: 63,
    Topic3: 97,
    Topic4: 99
  },
  {
    id: "41",
    Topic1: 89,
    Topic2: 76,
    Topic3: 82,
    Topic4: 53
  },
  {
    id: "42",
    Topic1: 78,
    Topic2: 73,
    Topic3: 85,
    Topic4: 82
  },
  {
    id: "43",
    Topic1: 92,
    Topic2: 87,
    Topic3: 69,
    Topic4: 63
  },
  {
    id: "44",
    Topic1: 38,
    Topic2: 84,
    Topic3: 90,
    Topic4: 63
  },
  {
    id: "45",
    Topic1: 92,
    Topic2: 63,
    Topic3: 64,
    Topic4: 52
  },
  {
    id: "46",
    Topic1: 75,
    Topic2: 93,
    Topic3: 41,
    Topic4: 45
  },
  {
    id: "47",
    Topic1: 42,
    Topic2: 73,
    Topic3: 69,
    Topic4: 55
  },
  {
    id: "48",
    Topic1: 83,
    Topic2: 55,
    Topic3: 38,
    Topic4: 52
  },
  {
    id: "49",
    Topic1: 98,
    Topic2: 75,
    Topic3: 53,
    Topic4: 94
  },
  {
    id: "50",
    Topic1: 56,
    Topic2: 39,
    Topic3: 86,
    Topic4: 88
  },
  {
    id: "51",
    Topic1: 72,
    Topic2: 37,
    Topic3: 60,
    Topic4: 63
  },
  {
    id: "52",
    Topic1: 35,
    Topic2: 46,
    Topic3: 53,
    Topic4: 70
  },
  {
    id: "53",
    Topic1: 70,
    Topic2: 32,
    Topic3: 51,
    Topic4: 99
  },
  {
    id: "54",
    Topic1: 55,
    Topic2: 31,
    Topic3: 55,
    Topic4: 88
  },
  {
    id: "55",
    Topic1: 43,
    Topic2: 39,
    Topic3: 84,
    Topic4: 61
  },
  {
    id: "56",
    Topic1: 51,
    Topic2: 66,
    Topic3: 82,
    Topic4: 92
  },
  {
    id: "57",
    Topic1: 50,
    Topic2: 95,
    Topic3: 81,
    Topic4: 97
  },
  {
    id: "58",
    Topic1: 96,
    Topic2: 78,
    Topic3: 81,
    Topic4: 54
  },
  {
    id: "59",
    Topic1: 97,
    Topic2: 44,
    Topic3: 88,
    Topic4: 71
  },
  {
    id: "60",
    Topic1: 76,
    Topic2: 92,
    Topic3: 100,
    Topic4: 81
  },
  {
    id: "61",
    Topic1: 52,
    Topic2: 36,
    Topic3: 73,
    Topic4: 69
  },
  {
    id: "62",
    Topic1: 46,
    Topic2: 60,
    Topic3: 70,
    Topic4: 79
  },
  {
    id: "63",
    Topic1: 56,
    Topic2: 92,
    Topic3: 71,
    Topic4: 37
  },
  {
    id: "64",
    Topic1: 62,
    Topic2: 71,
    Topic3: 92,
    Topic4: 36
  },
  {
    id: "65",
    Topic1: 38,
    Topic2: 90,
    Topic3: 30,
    Topic4: 67
  },
  {
    id: "66",
    Topic1: 53,
    Topic2: 64,
    Topic3: 46,
    Topic4: 82
  },
  {
    id: "67",
    Topic1: 48,
    Topic2: 97,
    Topic3: 48,
    Topic4: 83
  },
  {
    id: "68",
    Topic1: 82,
    Topic2: 54,
    Topic3: 91,
    Topic4: 33
  },
  {
    id: "69",
    Topic1: 32,
    Topic2: 95,
    Topic3: 32,
    Topic4: 66
  },
  {
    id: "70",
    Topic1: 51,
    Topic2: 36,
    Topic3: 52,
    Topic4: 89
  },
  {
    id: "71",
    Topic1: 75,
    Topic2: 64,
    Topic3: 96,
    Topic4: 87
  },
  {
    id: "72",
    Topic1: 38,
    Topic2: 84,
    Topic3: 90,
    Topic4: 50
  },
  {
    id: "73",
    Topic1: 93,
    Topic2: 58,
    Topic3: 92,
    Topic4: 59
  },
  {
    id: "74",
    Topic1: 96,
    Topic2: 55,
    Topic3: 53,
    Topic4: 99
  },
  {
    id: "75",
    Topic1: 75,
    Topic2: 88,
    Topic3: 38,
    Topic4: 56
  },
  {
    id: "76",
    Topic1: 74,
    Topic2: 41,
    Topic3: 91,
    Topic4: 73
  },
  {
    id: "77",
    Topic1: 47,
    Topic2: 87,
    Topic3: 96,
    Topic4: 70
  },
  {
    id: "78",
    Topic1: 71,
    Topic2: 78,
    Topic3: 59,
    Topic4: 46
  },
  {
    id: "79",
    Topic1: 51,
    Topic2: 47,
    Topic3: 75,
    Topic4: 38
  },
  {
    id: "80",
    Topic1: 40,
    Topic2: 85,
    Topic3: 93,
    Topic4: 64
  },
  {
    id: "81",
    Topic1: 31,
    Topic2: 77,
    Topic3: 45,
    Topic4: 77
  },
  {
    id: "82",
    Topic1: 30,
    Topic2: 60,
    Topic3: 58,
    Topic4: 34
  },
  {
    id: "83",
    Topic1: 61,
    Topic2: 35,
    Topic3: 91,
    Topic4: 61
  },
  {
    id: "84",
    Topic1: 38,
    Topic2: 66,
    Topic3: 61,
    Topic4: 56
  },
  {
    id: "85",
    Topic1: 83,
    Topic2: 78,
    Topic3: 30,
    Topic4: 62
  },
  {
    id: "86",
    Topic1: 41,
    Topic2: 70,
    Topic3: 85,
    Topic4: 35
  },
  {
    id: "87",
    Topic1: 75,
    Topic2: 77,
    Topic3: 85,
    Topic4: 87
  },
  {
    id: "88",
    Topic1: 87,
    Topic2: 82,
    Topic3: 34,
    Topic4: 43
  },
  {
    id: "89",
    Topic1: 68,
    Topic2: 56,
    Topic3: 70,
    Topic4: 43
  },
  {
    id: "90",
    Topic1: 55,
    Topic2: 87,
    Topic3: 56,
    Topic4: 36
  },
  {
    id: "91",
    Topic1: 70,
    Topic2: 100,
    Topic3: 50,
    Topic4: 100
  },
  {
    id: "92",
    Topic1: 79,
    Topic2: 92,
    Topic3: 31,
    Topic4: 63
  },
  {
    id: "93",
    Topic1: 38,
    Topic2: 75,
    Topic3: 68,
    Topic4: 44
  },
  {
    id: "94",
    Topic1: 97,
    Topic2: 32,
    Topic3: 87,
    Topic4: 65
  },
  {
    id: "95",
    Topic1: 34,
    Topic2: 59,
    Topic3: 96,
    Topic4: 86
  },
  {
    id: "96",
    Topic1: 82,
    Topic2: 62,
    Topic3: 62,
    Topic4: 44
  },
  {
    id: "97",
    Topic1: 55,
    Topic2: 30,
    Topic3: 72,
    Topic4: 73
  },
  {
    id: "98",
    Topic1: 61,
    Topic2: 69,
    Topic3: 61,
    Topic4: 43
  },
  {
    id: "99",
    Topic1: 75,
    Topic2: 65,
    Topic3: 50,
    Topic4: 54
  },
  {
    id: "100",
    Topic1: 63,
    Topic2: 46,
    Topic3: 80,
    Topic4: 58
  }
];
    dbo.collection("Grades").insertMany(Grades, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});