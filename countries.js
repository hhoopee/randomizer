const countries = {
    'Austria': { 'en': {
            'sex': {
                'male': {
                    'first': [
                        "Lukas", "Maximilian", "Elias", "David", "Jakob", "Paul", "Leon", "Felix", "Luca", "Moritz",
                        "Jonas", "Fabian", "Simon", "Julian", "Niklas", "Alexander", "Jonathan", "Tobias", "Benjamin", "Dominik",
                        "Philipp", "Christian", "Sebastian", "Adrian", "Markus", "Anton", "Nico", "Michael", "Valentin", "Florian",
                        "Daniel", "Fabio", "Vincent", "Emil", "Gabriel", "Nikolai", "Emanuel", "Raphael", "Oliver", "Hannes",
                        "Klaus", "Wolfgang", "Andreas", "Johann", "Richard", "Gerald", "Heinz", "Werner", "Alfred", "Armin",
                        "Benedikt", "Bernd", "Christoph", "David", "Edwin", "Franz", "Gerhard", "Gunter", "Helmut", "Ingo", "Jan",
                        "Karl", "Kurt", "Leopold", "Matthias", "Norbert", "Oskar", "Pascal", "Quirin", "Roland", "Stefan", "Theo",
                        "Uwe", "Viktor", "Wilhelm", "Xaver", "Yannick", "Zacharias"
                      ],
                    'second': [
                        "Schmidt", "Mueller", "Wagner", "Schneider", "Fischer", "Weber", "Meyer", "Huber", "Hofer", "Gruber",
                        "Leitner", "Steiner", "Schmid", "Maier", "Eder", "Bauer", "Winkler", "Auer", "Pichler", "Berger",
                        "Fuchs", "Wallner", "Mayr", "Lang", "Schwarz", "Fischer", "Wimmer", "Hofmann", "Lechner", "Moser",
                        "Eder", "Neumann", "Haas", "Hofmann", "Winkler", "Koller", "Wolf", "Leitner", "Wagner", "Gruen",
                        "Herrmann", "Binder", "Aigner", "Schuster", "Richter", "Herzog", "Schwarz", "Fiala", "Scholz",
                        "Froehlich", "Hermann", "Haas", "Hess", "Lederer", "Lang", "Zimmermann", "Schubert", "Brunner",
                        "Resch", "Reiter", "Fritz", "Gruber", "Brunner", "Schmidt", "Brandtner", "Moser", "Leitner",
                        "Gross", "Egger", "Wieser", "Reiter", "Bach", "Kramer", "Pfeiffer", "Stadler", "Weiss", "Sailer",
                        "Bauer", "Schreiber", "Lechner", "Scholz", "Froehlich", "Wimmer", "Eder", "Reiter", "Koch", "Roth",
                        "Leitner", "Sauer"
                      ]
                },
                'female': {
                    'first': [
                        "Sophie", "Lena", "Anna", "Emma", "Laura", "Lea", "Lara", "Hannah", "Julia", "Sarah",
                        "Isabella", "Ella", "Mia", "Emilia", "Alina", "Melanie", "Vanessa", "Marie", "Lina", "Clara",
                        "Katharina", "Nina", "Victoria", "Amelie", "Lisa", "Jana", "Eva", "Paula", "Magdalena", "Celine",
                        "Zoe", "Olivia", "Maria", "Sophia", "Jasmin", "Rosa", "Ava", "Carina", "Elisa", "Mila",
                        "Eleonora", "Selina", "Miriam", "Antonia", "Leonie", "Valerie", "Anastasia", "Greta", "Charlotte",
                        "Fiona", "Livia", "Nora", "Sara", "Elena", "Vivian", "Amy", "Evelyn", "Gloria", "Irina",
                        "Melina", "Ina", "Elvira", "Helena", "Raphaela", "Sabrina", "Alicia", "Emely", "Eliana", "Linda",
                        "Marlene", "Stella", "Theresa", "Beatrice", "Helene", "Ines", "Veronika", "Frida", "Maja", "Aurora",
                        "Lisbeth", "Lorena", "Amelia", "Diana", "Isa", "Rosalie", "Ruth", "Yara", "Alma", "Mira"
                      ],
                    'second': [
                        "Schmidt", "Mueller", "Wagner", "Schneider", "Fischer", "Weber", "Meyer", "Huber", "Hofer", "Gruber",
                        "Leitner", "Steiner", "Schmid", "Maier", "Eder", "Bauer", "Winkler", "Auer", "Pichler", "Berger",
                        "Fuchs", "Wallner", "Mayr", "Lang", "Schwarz", "Fischer", "Wimmer", "Hofmann", "Lechner", "Moser",
                        "Eder", "Neumann", "Haas", "Hofmann", "Winkler", "Koller", "Wolf", "Leitner", "Wagner", "Gruen",
                        "Herrmann", "Binder", "Aigner", "Schuster", "Richter", "Herzog", "Schwarz", "Fiala", "Scholz",
                        "Froehlich", "Hermann", "Haas", "Hess", "Lederer", "Lang", "Zimmermann", "Schubert", "Brunner",
                        "Resch", "Reiter", "Fritz", "Gruber", "Brunner", "Schmidt", "Brandtner", "Moser", "Leitner",
                        "Gross", "Egger", "Wieser", "Reiter", "Bach", "Kramer", "Pfeiffer", "Stadler", "Weiss", "Sailer",
                        "Bauer", "Schreiber", "Lechner", "Scholz", "Froehlich", "Wimmer", "Eder", "Reiter", "Koch", "Roth",
                        "Leitner", "Sauer"
                      ],
                }
            }
        }, 'native': {
            'sex': {
                'male': {
                    'first': ["Maximilian", "Alexander", "Paul", "Leon", "Lukas", "Felix", "Elias", "Finn", "Noah",
                      "Jonas", "Luis", "Julian", "Moritz", "David", "Niklas", "Simon", "Jan", "Luca", "Philipp", "Tim", "Fabian",
                      "Johannes", "Florian", "Tom", "Matthias", "Benedikt", "Samuel", "Tobias", "Dominik", "Sebastian", "Erik",
                      "Daniel", "Adrian", "Jannik", "Markus", "Benjamin", "Kevin", "Christian", "Stefan", "Kai", "Michael", "Rafael",
                      "Patrick", "Marvin", "Hannes", "Oliver", "Nico", "Anton", "Julius", "Konstantin"],
                    'second': [
                      "Gruber", "Huber", "Bauer", "Wagner", "Müller", "Pichler", "Steiner", "Moser", "Mayer", "Hofer",
                      "Leitner", "Berger", "Fuchs", "Eder", "Fischer", "Binder", "Weber", "Schmidt", "Schneider", "Reiter",
                      "Meier", "Wolf", "Egger", "Schmid", "Winkler", "Maier", "Schwarz", "Koch", "Kurz", "Ebner",
                      "Auer", "Lang", "Brunner", "Friedl", "Lechner", "Baumann", "Holzer", "Gasser", "Hoegl", "Heinrich",
                      "Pfeifer", "Wieser", "Mayr", "Otto", "Koller", "Haas", "Brandl", "Schuster", "Winter", "Mayerhofer"
                    ]
                },
                'female': {
                    'first': ["Anna", "Sophie", "Lena", "Leonie", "Laura", "Emilia", "Hannah", "Marie", "Mia",
                      "Luisa", "Johanna", "Elena", "Lina", "Lara", "Clara", "Sarah", "Julia", "Emma", "Sophia", "Magdalena", "Lea",
                      "Nina", "Amelie", "Valentina", "Mila", "Eva", "Lisa", "Paula", "Elisa", "Katharina", "Isabella", "Carina", "Nora",
                      "Maria", "Charlotte", "Helena", "Stella", "Jana", "Greta", "Tabea", "Melina", "Marlene", "Theresa", "Victoria",
                      "Annika", "Caroline", "Ella", "Franziska", "Martina", "Simone"],
                    'second': [
                      "Gruber", "Huber", "Bauer", "Wagner", "Müller", "Pichler", "Steiner", "Moser", "Mayer", "Hofer",
                      "Leitner", "Berger", "Fuchs", "Eder", "Fischer", "Binder", "Weber", "Schmidt", "Schneider", "Reiter",
                      "Meier", "Wolf", "Egger", "Schmid", "Winkler", "Maier", "Schwarz", "Koch", "Kurz", "Ebner",
                      "Auer", "Lang", "Brunner", "Friedl", "Lechner", "Baumann", "Holzer", "Gasser", "Hoegl", "Heinrich",
                      "Pfeifer", "Wieser", "Mayr", "Otto", "Koller", "Haas", "Brandl", "Schuster", "Winter", "Mayerhofer"
                    ]
                }
            }
        }},
    'Azerbaijan': { 
      'en': {
            'sex': {
                'male': {
                    'first': [
                        "Ali", "Nizami", "Vagif", "Javid", "Samir", "Elchin", "Farid", "Rauf", "Fikret", "Murad",
                        "Rasim", "Orkhan", "Turan", "Ramil", "Elnur", "Nadir", "Kamran", "Sadiq", "Emin", "Vusal",
                        "Rashad", "Huseyn", "Fuad", "Aydin", "Zaur", "Nijat", "Eldar", "Kanan", "Vidadi", "Ramin",
                        "Namig", "Elmir", "Elnur", "Farrukh", "Jahangir", "Azer", "Togrul", "Arif", "Rovshan", "Teymur",
                        "Ilham", "Anar", "Elman", "Vahid", "Araz", "Shahin", "Alikhan", "Jamal", "Aras", "Sabir",
                        "Suleyman", "Rustam", "Emil", "Seymur", "Gadir", "Vidadi", "Nasir", "Kamil", "Tofiq", "Zakir",
                        "Tahir", "Hikmet", "Jalal", "Rizvan", "Anvar", "Elvin", "Mubariz", "Khalid", "Sabuhi", "Afgan",
                        "Toghrul", "Agil", "Valeh", "Rustam", "Majid", "Bahram", "Arslan", "Efsane", "Rashid", "Safar",
                        "Mammad", "Gurban", "Ferid", "Arman", "Teyyub", "Yashar", "Zakariya", "Fayaz", "Rahman", "Turkhan"
                      ],
                    'second': [
                        'Aliyev',     'Mammadov',  'Huseynov',
                        'Ismayilov',  'Rahimov',   'Guliyev',
                        'Mustafayev', 'Jafarov',   'Ahmadov',
                        'Safarov',    'Abbasov',   'Nasirov',
                        'Hasanov',    'Hajiyev',   'Mirzayev',
                        'Gurbanov',   'Orujov',    'Agayev',
                        'Makhmudov', 'Mammadzade', 'Aslanov',
                        'Mikayilov', 'Abdullayev', 'Rustamov',
                        'Suleymanov', 'Huseynli',   'Javadov',
                        'Gasimov', 'Eminov',     'Bayramov',
                        'Huseynzade'
                      ]
                },
                'female': {
                    'first': [
                        "Aysel", "Gulnar", "Leyla", "Nigar", "Sabina", "Nargiz", "Ayla", "Sevinj", "Laman", "Samira",
                        "Gunay", "Leyli", "Fidan", "Feride", "Narmin", "Aytac", "Vusala", "Vafa", "Ruhangiz", "Sema",
                        "Turkan", "Firuza", "Zuleyha", "Gunel", "Sevda", "Tale", "Aysun", "Laman", "Aygun", "Aynur",
                        "Nisa", "Aydan", "Rabia", "Nazrin", "Zarina", "Narmin", "Araz", "Nazila", "Yegane", "Laman",
                        "Vildan", "Feruze", "Zara", "Kamala", "Banu", "Ulviyya", "Nayla", "Parvana", "Lale", "Vafa",
                        "Lamiya", "Gunesh", "Gulnaz", "Yasmin", "Raziya", "Gulbeniz", "Roya", "Mina", "Nuray", "Sabirin",
                        "Elnare", "Gunesh", "Nurane", "Hafiza", "Zeynab", "Nazaket", "Gulnar", "Fidan", "Nuray", "Gulyar",
                        "Yegane", "Laman", "Nahida", "Fargana", "Ulduz", "Afaq", "Ruhangiz", "Laman", "Zehra", "Malak",
                        "Nermin", "Sima", "Ayten", "Munavvar", "Parvana", "Nuray", "Arzu", "Gulnara", "Lala", "Turkan"
                      ],
                    'second': [
                        "Aliyeva", "Mammadova", "Huseynova", "Ismayilova", "Rahimova", "Guliyeva", "Mustafayeva", "Jafarova", "Ahmadova", "Safarova",
                        "Abbasova", "Nasirova", "Hasanova", "Hajiyeva", "Mirzayeva", "Gurbanova", "Orujova", "Quliyeva", "Agayeva", "Quliyeva",
                        "Makhmudova", "Mammadzade", "Aslanova", "Mikayilova", "Guliyeva", "Mahmudova", "Ismayilova", "Hasanova", "Jafarova", "Abdullayeva",
                        "Rustamova", "Gurbanova", "Suleymanova", "Rahimova", "Huseynli", "Mammadova", "Aliyeva", "Abbasova", "Quliyeva", "Ahmadova", "Hajiyeva",
                        "Javadova", "Gasimova", "Eminova", "Bayramova", "Safarova", "Nasirova", "Aliyeva", "Ismayilova", "Mirzayeva", "Gurbanova", "Rahimova",
                        "Mustafayeva", "Hajiyeva", "Huseynova", "Jafarova", "Safarova", "Abbasova", "Guliyeva", "Nasirova", "Rustamova", "Quliyeva", "Mammadzade",
                        "Huseynzade", "Javadova", "Aslanova", "Mikayilova", "Aliyeva", "Abdullayeva", "Rahimova", "Gurbanova", "Safarova", "Bayramova", "Hajiyeva",
                        "Eminova", "Suleymanova", "Nasirova", "Mammadova", "Guliyeva", "Mustafayeva", "Jafarova", "Ismayilova", "Abbasova", "Rustamova", "Aliyeva",
                        "Safarova", "Huseynova", "Quliyeva", "Rahimova", "Nasirova", "Mirzayeva", "Mustafayeva", "Abbasova", "Jafarova", "Suleymanova", "Mammadzade"
                      ],
                }
            }
        }, 'native': {
            'sex': {
                'male': {
                    'first': [
                        "Əli", "Nizami", "Vağif", "Cavid", "Səmirqulu", "Elçin", "Fərid", "Rauf", "Fikrət", "Murad",
                        "Rəsim", "Orxan", "Turan", "Ramil", "Elnur", "Nadir", "Kamran", "Sadiq", "Əmin", "Vüsal",
                        "Rəşad", "Hüseyn", "Fuad", "Aydın", "Zaur", "Nicat", "Eldar", "Kanan", "Vidadi", "Rəmin",
                        "Namiq", "Elmir", "Əlnur", "Fərux", "CəngiƏr", "Azer", "Toğrul", "Ərif", "Rövşən", "Teymur",
                        "İlham", "Anar", "Elman", "Vahid", "Araz", "Şahin", "Alixan", "Cəmal", "Əras", "Sabir",
                        "Süleyman", "Rüstəm", "Əmil", "Seymur", "Qədir", "Vidadi", "Nasir", "Kamil", "Tofiq", "Zakir",
                        "Tahir", "Hikmət", "Cəlal", "Rizvan", "Anvar", "Elvin", "Mübariz", "Xalid", "Sabuhi", "Afqan",
                        "Toğrul", "Əqil", "Valeh", "Rüstəm", "Mecid", "Bəhram", "Arslan", "Əfsanə", "Rəşid", "Səfər",
                        "Məmməd", "Qurban", "Fərid", "Ərman", "Teyyub", "Yəşar", "Zakariya", "Fayaz", "Rəhman", "Türxan"
                      ],
                    'second':  [
                        'Əliyev',     'Məmmədov',   'Hüseynov',
                        'İsmayılov',  'Rəhimov',    'Quliyev',
                        'Mustafayev', 'Cəfərov',    'Əhmədov',
                        'Səfərov',    'Abbasov',    'Nəsirov',
                        'Həsənov',    'Hacıyev',    'Mirzəyev',
                        'Qurbanov',   'Orucov',     'Əğayev',
                        'Məhmudov',   'Məmmədzadə', 'Aslanov',
                        'Mikayılov',  'Abdullayev', 'Rüstəmov',
                        'Süleymanov', 'Hüseynli',   'Cavadov',
                        'Qasımov',    'Əminov',     'Bayramov',
                        'Hüseynzadə'
                      ]
                },
                'female': {
                    'first': [
                        "Aysel", "Gülnar", "Leyla", "Nigar", "Sabina", "Nərgiz", "Ayla", "Sevinc", "Laman", "Samira",
                        "Günay", "Leyli", "Fidan", "Fəridə", "Nərmin", "Aytac", "Vüsala", "Vəfa", "Ruhangi̇z", "Səma",
                        "Turkan", "Firuzə", "Züleyxa", "Günəl", "Sevda", "Talə", "Aysun", "Laman", "Aygun", "Aynur",
                        "Nisa", "Aydan", "Rəbiyə", "Nazrin", "Zərinə", "Nərmin", "Araz", "Nazila", "Yegane", "Laman",
                        "Vildan", "Fərüzə", "Zara", "Kamala", "Banu", "Ülviyyə", "Nayla", "Parvana", "Lala", "Vəfa",
                        "Lamiya", "Günəş", "Gülnaz", "Yasmin", "Raziya", "Gülbəniz", "Röya", "Mina", "Nuray", "Sabirin",
                        "Elnarə", "Günəş", "Nurənə", "Hafiza", "Zeynab", "Nazakət", "Gülnar", "Fidan", "Nuray", "Gülyar",
                        "Yegane", "Laman", "Nahida", "Fərqanə", "Ulduz", "Afaq", "Ruhangi̇z", "Laman", "Zehra", "Malak",
                        "Nərmin", "Sima", "Ayten", "Munavvar", "Parvana", "Nuray", "Arzu", "Gülnara", "Lala", "Turkan"
                      ],
                    'second': [
                        "Əliyeva", "Məmmədova", "Hüseynova", "İsmayılova", "Rəhimova", "Quliyeva", "Mustafayeva", "Cəfərova", "Əhmədova", "Səfərova",
                        "Abbasova", "Nəsirova", "Həsənova", "Hacıyeva", "Mirzəyeva", "Qurbanova", "Orucova", "Quliyeva", "Əğayeva", "Quliyeva",
                        "Məxmudova", "Məmmədzadə", "Aslanova", "Mikayılova", "Quliyeva", "Məxmudova", "İsmayılova", "Həsənova", "Cəfərova", "Abdullayeva",
                        "Rüstəmova", "Qurbanova", "Süleymanova", "Rəhimova", "Hüseynli", "Məmmədova", "Əliyeva", "Abbasova", "Quliyeva", "Əhmədova", "Hacıyeva",
                        "Cavadova", "Qasırova", "Əminova", "Bayramova", "Səfərova", "Nəsirova", "Əliyeva", "İsmayılova", "Mirzəyeva", "Qurbanova", "Rəhimova",
                        "Mustafayeva", "Hacıyeva", "Hüseynova", "Cəfərova", "Səfərova", "Abbasova", "Quliyeva", "Nəsirova", "Rüstəmova", "Quliyeva", "Məmmədzadə",
                        "Hüseynzadə", "Cavadova", "Aslanova", "Mikayılova", "Əliyeva", "Abdullayeva", "Rəhimova", "Qurbanova", "Səfərova", "Bayramova", "Hacıyeva",
                        "Əminova", "Süleymanova", "Nəsirova", "Məmmədova", "Quliyeva", "Mustafayeva", "Cəfərova", "İsmayılova", "Abbasova", "Rüstəmova", "Əliyeva",
                        "Səfərova", "Hüseynova", "Quliyeva", "Rəhimova", "Nəsirova", "Mirzəyeva", "Mustafayeva", "Abbasova", "Cəfərova", "Süleymanova", "Məmmədzadə"
                      ],
                }
            }
        }},
    'Albania': { 
      'en': {
            'sex': {
                'male': {
                    'first': [
                        "Adrian", "Besnik", "Dritan", "Elton", "Fatmir", "Genc", "Hasan", "Ilir", "Jon", "Kreshnik",
                        "Liridon", "Maks", "Nertil", "Oltion", "Petrit", "Qemal", "Renato", "Skender", "Taulant", "Urim",
                        "Vasil", "Xhavit", "Ylli", "Zef", "Agron", "Blerim", "Dashamir", "Erjon", "Flamur", "Gentian",
                        "Hektor", "Ismet", "Jurgen", "Kliton", "Luan", "Mikel", "Naim", "Olsi", "Përparim", "Qamil",
                        "Ramadan", "Saimir", "Taulant", "Urim", "Viktor", "Xhevahir", "Ylber", "Zaim", "Arben", "Bujar",
                        "Dorian", "Endrit", "Fatos", "Gjergj", "Ilaz", "Jozef", "Kastriot", "Lum", "Marjan", "Nik",
                        "Oltion", "Pajtim", "Qëndrim", "Redi", "Shpëtim", "Tedi", "Urim", "Valon", "Xhulio", "Yll",
                        "Zoti", "Artan", "Bardhyl", "Dardan", "Edon", "Flori", "Gazi", "Ilion", "Jonuz", "Kozma",
                        "Lek", "Milazim", "Nevruz", "Ornel", "Pëllumb", "Qëndrore", "Ramush", "Shemsi", "Tahir", "Uendi",
                        "Vigan", "Xhorxh", "Yllmir", "Zaim", "Ardit", "Bujen", "Dren", "Elham", "Fation", "Gjini"
                      ],
                    'second': [
                        "Krasniqi", "Qorri", "Rama", "Gashi", "Gjonaj", "Xhaka", "Krasniqi", "Thaçi", "Lleshi", "Maloku",
                        "Vllasaliu", "Hoxha", "Kuka", "Elezi", "Krasniqi", "Lala", "Ibrahimi", "Kryeziu", "Selimi", "Krasniqi",
                        "Zeneli", "Mustafa", "Kukaj", "Shala", "Rexhepi", "Veliu", "Gecaj", "Mehmeti", "Hyseni", "Shoshi",
                        "Lushi", "Kelmendi", "Tahiri", "Gjokaj", "Hasani", "Xhema", "Gega", "Pula", "Krasniqi", "Zeneli",
                        "Ahmeti", "Rrahmani", "Islami", "Zogaj", "Krasniqi", "Bytyqi", "Thaçi", "Krasniqi", "Imeri", "Xhaferi",
                        "Kukaj", "Lleshi", "Shala", "Lala", "Rexhepi", "Ibrahimi", "Hoxha", "Gashi", "Krasniqi", "Kelmendi",
                        "Mustafa", "Tahiri", "Zeneli", "Rama", "Gjokaj", "Veliu", "Hyseni", "Lushi", "Elezi", "Xhaka",
                        "Gecaj", "Vllasaliu", "Xhema", "Shoshi", "Gjonaj", "Shala", "Hoxha", "Veliu", "Zogaj", "Krasniqi",
                        "Islami", "Imeri", "Xhaferi", "Gjega", "Pula", "Gashi", "Krasniqi", "Bytyqi", "Thaçi", "Gega",
                        "Lala", "Zeneli", "Mustafa", "Imeri", "Hyseni", "Shala", "Krasniqi", "Lushi", "Gjokaj", "Elezi"
                      ]
                },
                'female': {
                    'first': [
                        "Adelina", "Besa", "Dafina", "Elira", "Flaka", "Genta", "Hana", "Ilira", "Jona", "Klea",
                        "Lira", "Marsela", "Nita", "Ornela", "Petronela", "Qendresa", "Rina", "Suela", "Tea", "Uarda",
                        "Valbona", "Xhoana", "Yllka", "Zeta", "Antigona", "Bukurije", "Diana", "Ermira", "Fjolla", "Gresa",
                        "Hera", "Inesa", "Jehona", "Krenare", "Luljeta", "Megi", "Njomza", "Oneda", "Pranvera", "Qëndore",
                        "Rovena", "Shpresa", "Teuta", "Uarda", "Valza", "Xhilda", "Yllka", "Zana", "Arbëresha", "Blerta",
                        "Drita", "Endrina", "Fjolla", "Gresa", "Hava", "Ilira", "Jehona", "Klea", "Lindi", "Marsida",
                        "Njomza", "Oriana", "Pranvera", "Qëndesa", "Rina", "Shpresa", "Tea", "Uendi", "Valbona", "Xhilda",
                        "Yllka", "Zeta", "Anjeza", "Bukuroshe", "Dafina", "Era", "Flutura", "Gresa", "Helena", "Inesa",
                        "Jona", "Klevisa", "Lara", "Megi", "Nora", "Orinda", "Pjeterdina", "Qamile", "Rea", "Shpresa",
                        "Tereza", "Uarda", "Valbona", "Xhensila", "Yllka", "Zara"
                      ],
                    'second': [
                        "Krasniqi", "Qorri", "Rama", "Gashi", "Gjonaj", "Xhaka", "Krasniqi", "Thaçi", "Lleshi", "Maloku",
                        "Vllasaliu", "Hoxha", "Kuka", "Elezi", "Krasniqi", "Lala", "Ibrahimi", "Kryeziu", "Selimi", "Krasniqi",
                        "Zeneli", "Mustafa", "Kukaj", "Shala", "Rexhepi", "Veliu", "Gecaj", "Mehmeti", "Hyseni", "Shoshi",
                        "Lushi", "Kelmendi", "Tahiri", "Gjokaj", "Hasani", "Xhema", "Gega", "Pula", "Krasniqi", "Zeneli",
                        "Ahmeti", "Rrahmani", "Islami", "Zogaj", "Krasniqi", "Bytyqi", "Thaçi", "Krasniqi", "Imeri", "Xhaferi",
                        "Kukaj", "Lleshi", "Shala", "Lala", "Rexhepi", "Ibrahimi", "Hoxha", "Gashi", "Krasniqi", "Kelmendi",
                        "Mustafa", "Tahiri", "Zeneli", "Rama", "Gjokaj", "Veliu", "Hyseni", "Lushi", "Elezi", "Xhaka",
                        "Gecaj", "Vllasaliu", "Xhema", "Shoshi", "Gjonaj", "Shala", "Hoxha", "Veliu", "Zogaj", "Krasniqi",
                        "Islami", "Imeri", "Xhaferi", "Gjega", "Pula", "Gashi", "Krasniqi", "Bytyqi", "Thaçi", "Gega",
                        "Lala", "Zeneli", "Mustafa", "Imeri", "Hyseni", "Shala", "Krasniqi", "Lushi", "Gjokaj", "Elezi"
                      ],
                }
            }
        }, 'native': {
            'sex': {
                'male': {
                    'first': [
                      "Arben", "Bujar", "Dritan", "Edison", "Elion", "Fatos", "Flamur", "Genti", "Granit", "Ilir",
                      "Ismail", "Jetmir", "Kastriot", "Luan", "Mentor", "Nderim", "Orion", "Pëllumb", "Rinor", "Shkëlzen",
                      "Sokol", "Valon", "Visar", "Ylli", "Alban", "Besnik", "Dorian", "Erion", "Genc", "Gentian",
                      "Ardit", "Agron", "Alket", "Arian", "Arjan", "Astrit", "Besart", "Dardan", "Dritëro", "Enis",
                      "Fatmir", "Fisnik", "Kreshnik", "Lirim", "Lindon", "Liridon", "Shpend", "Skënder", "Valmir", "Xhevdet"
                  ],
                    'second': [
                        "Krasniqi", "Qorri", "Rama", "Gashi", "Gjonaj", "Xhaka", "Krasniqi", "Thaçi", "Lleshi", "Maloku",
                        "Vllasaliu", "Hoxha", "Kuka", "Elezi", "Krasniqi", "Lala", "Ibrahimi", "Kryeziu", "Selimi", "Krasniqi",
                        "Zeneli", "Mustafa", "Kukaj", "Shala", "Rexhepi", "Veliu", "Gecaj", "Mehmeti", "Hyseni", "Shoshi",
                        "Lushi", "Kelmendi", "Tahiri", "Gjokaj", "Hasani", "Xhema", "Gega", "Pula", "Krasniqi", "Zeneli",
                        "Ahmeti", "Rrahmani", "Islami", "Zogaj", "Krasniqi", "Bytyqi", "Thaçi", "Krasniqi", "Imeri", "Xhaferi",
                        "Kukaj", "Lleshi", "Shala", "Lala", "Rexhepi", "Ibrahimi", "Hoxha", "Gashi", "Krasniqi", "Kelmendi",
                        "Mustafa", "Tahiri", "Zeneli", "Rama", "Gjokaj", "Veliu", "Hyseni", "Lushi", "Elezi", "Xhaka",
                        "Gecaj", "Vllasaliu", "Xhema", "Shoshi", "Gjonaj", "Shala", "Hoxha", "Veliu", "Zogaj", "Krasniqi",
                        "Islami", "Imeri", "Xhaferi", "Gjega", "Pula", "Gashi", "Krasniqi", "Bytyqi", "Thaçi", "Gega",
                        "Lala", "Zeneli", "Mustafa", "Imeri", "Hyseni", "Shala", "Krasniqi", "Lushi", "Gjokaj", "Elezi"
                      ]
                },
                'female': {
                    'first': [
                      "Arta", "Besa", "Drita", "Elda", "Elira", "Flora", "Gentiana", "Ilirjana", "Ismira", "Jeta",
                      "Kaltrina", "Lira", "Mira", "Nora", "Orjana", "Pranvera", "Rina", "Shpresa", "Valbona", "Yllka",
                      "Zana", "Adelina", "Aferdita", "Albana", "Alketa", "Ana", "Arjeta", "Arlinda", "Aurela", "Blerina",
                      "Brikena", "Diellza", "Eglantina", "Emira", "Eranda", "Eriona", "Fatmira", "Fjolla", "Lindita", "Loreta",
                      "Lumturi", "Miranda", "Nertilja", "Shqipe", "Teuta", "Vjollca", "Xhoana", "Zamira", "Zhuljeta", "Dafina"
                  ],
                    'second': [
                        "Krasniqi", "Qorri", "Rama", "Gashi", "Gjonaj", "Xhaka", "Krasniqi", "Thaçi", "Lleshi", "Maloku",
                        "Vllasaliu", "Hoxha", "Kuka", "Elezi", "Krasniqi", "Lala", "Ibrahimi", "Kryeziu", "Selimi", "Krasniqi",
                        "Zeneli", "Mustafa", "Kukaj", "Shala", "Rexhepi", "Veliu", "Gecaj", "Mehmeti", "Hyseni", "Shoshi",
                        "Lushi", "Kelmendi", "Tahiri", "Gjokaj", "Hasani", "Xhema", "Gega", "Pula", "Krasniqi", "Zeneli",
                        "Ahmeti", "Rrahmani", "Islami", "Zogaj", "Krasniqi", "Bytyqi", "Thaçi", "Krasniqi", "Imeri", "Xhaferi",
                        "Kukaj", "Lleshi", "Shala", "Lala", "Rexhepi", "Ibrahimi", "Hoxha", "Gashi", "Krasniqi", "Kelmendi",
                        "Mustafa", "Tahiri", "Zeneli", "Rama", "Gjokaj", "Veliu", "Hyseni", "Lushi", "Elezi", "Xhaka",
                        "Gecaj", "Vllasaliu", "Xhema", "Shoshi", "Gjonaj", "Shala", "Hoxha", "Veliu", "Zogaj", "Krasniqi",
                        "Islami", "Imeri", "Xhaferi", "Gjega", "Pula", "Gashi", "Krasniqi", "Bytyqi", "Thaçi", "Gega",
                        "Lala", "Zeneli", "Mustafa", "Imeri", "Hyseni", "Shala", "Krasniqi", "Lushi", "Gjokaj", "Elezi"
                      ],
                }
            }
        }},
    'Andorra': { 
      'en': {
            'sex': {
                'male': {
                    'first': [
                        "Marc", "Jordi", "Enric", "Antoni", "Gerard", "Carles", "Xavier", "Josep", "Pere", "Lluis",
                        "Ramon", "Albert", "Francesc", "Jaume", "David", "Eduard", "Mateu", "Oriol", "Ricard", "Santi",
                        "Miquel", "Joaquim", "Salvador", "Manel", "Alex", "Esteve", "Narcis", "Quim", "Guillem", "Javi",
                        "Victor", "Daniel", "Arnau", "Pol", "Jose", "Oscar", "Felix", "Martin", "Raul", "Gines",
                        "Xavier", "Emili", "Agusti", "Mariano", "Julio", "Isidre", "Fabio", "Pau", "Teo", "Angel",
                        "Agusti", "Ismael", "Tono", "Ivan", "Dani", "Marc", "Aitor", "Iker", "Sergio", "Ruben",
                        "Jon", "Abel", "Miguel", "Adrian", "Roberto", "Jorge", "Alvaro", "Gabriel", "Hugo", "Alfonso",
                        "Jesus", "Javier", "Diego", "Victor", "Alberto", "Carlos", "Juan", "Enrique", "Pedro", "Manuel",
                        "Miguel", "David", "Jose", "Francisco", "Antonio", "Alejandro", "Javier", "Jose Antonio", "Francisco Javier", "Jose Luis",
                        "Juan Carlos", "Jesus", "Miguel Angel", "Francisco Jose", "Angel", "Juan Jose", "Joaquin", "Jose Manuel", "Rafael", "Fernando"
                      ],
                    'second': [
                        "Martí", "Serra", "Valls", "Riba", "Pujol", "Martínez", "Vila", "Baró", "Aranda", "Riu",
                        "Miquel", "Costa", "Ricart", "Torres", "Ferrer", "Balaguer", "Nadal", "Bosch", "Palau", "Miró",
                        "Coma", "Xandrí", "Castelló", "Canut", "Font", "Salvador", "Torrent", "Borda", "Albó", "Reixach",
                        "Guàrdia", "Ribes", "Colom", "Mateu", "Aixas", "Forné", "Miró", "Arnal", "Santacana", "Borràs",
                        "Farré", "Massot", "Moreno", "Compte", "Enric", "Torner", "Busquets", "Anglada", "Isern", "Pérez",
                        "Ricci", "Guasch", "Fornols", "Sabaté", "Baró", "Beltran", "Jané", "Brossa", "Cros", "Xicolà",
                        "Grau", "Rafart", "Sanz", "Perera", "Giralt", "Rubió", "Martorell", "Xicolà", "Piera", "Fernández",
                        "Casals", "Cabot", "Comellas", "Molines", "Oliver", "Duran", "Pineda", "Rialp", "Rubiralta", "Sallent",
                        "Fernàndez", "Sureda", "Terradell", "Vinyals", "Estruch", "Casado", "Urgell", "Rigau", "Sala", "Flaquer",
                        "Viladomat", "Torró", "Vicente", "Cavaller", "Coll", "Calvet", "Cot", "Gili", "Barceló", "Grau"
                      ]
                },
                'female': {
                    'first': [
                        "Anna", "Laia", "Maria", "Elena", "Montserrat", "Laura", "Judith", "Nuria", "Marta", "Silvia",
                        "Sandra", "Roser", "Esther", "Pilar", "Cristina", "Ester", "Judit", "Adriana", "Mireia", "Lourdes",
                        "Carla", "Ariadna", "Natalia", "Eva", "Aina", "Alba", "Nerea", "Claudia", "Ainhoa", "Raquel",
                        "Carme", "Gemma", "Irene", "Aurora", "Lidia", "Clara", "Mercedes", "Dolores", "Isabel", "Elisabeth",
                        "Olga", "Beatriz", "Aurora", "Concepcion", "Nieves", "Natalia", "Inmaculada", "Teresa", "Angela",
                        "Monica", "Sofia", "Almudena", "Julia", "Ana Maria", "Virginia", "Rosa", "Consuelo", "Juana",
                        "Josefa", "Rocio", "Yolanda", "Alicia", "Victoria", "Catalina", "Luz", "Margarita", "Encarnacion",
                        "Amparo", "Daniela", "Emilia", "Esperanza", "Manuela", "Francisca", "Guadalupe", "Asuncion", "Milagros",
                        "Rafaela", "Antonia", "Concha", "Lola", "Diana", "Susana", "Noelia", "Sonia", "Vanessa", "Elena",
                        "Miriam", "Carmen", "Maria Jose", "Beatriz", "Patricia", "Nerea", "Ana", "Paz", "Lidia", "Rosa"
                      ],
                    'second': [
                        "Martí", "Serra", "Valls", "Riba", "Pujol", "Martínez", "Vila", "Baró", "Aranda", "Riu",
                        "Miquel", "Costa", "Ricart", "Torres", "Ferrer", "Balaguer", "Nadal", "Bosch", "Palau", "Miró",
                        "Coma", "Xandrí", "Castelló", "Canut", "Font", "Salvador", "Torrent", "Borda", "Albó", "Reixach",
                        "Guàrdia", "Ribes", "Colom", "Mateu", "Aixas", "Forné", "Miró", "Arnal", "Santacana", "Borràs",
                        "Farré", "Massot", "Moreno", "Compte", "Enric", "Torner", "Busquets", "Anglada", "Isern", "Pérez",
                        "Ricci", "Guasch", "Fornols", "Sabaté", "Baró", "Beltran", "Jané", "Brossa", "Cros", "Xicolà",
                        "Grau", "Rafart", "Sanz", "Perera", "Giralt", "Rubió", "Martorell", "Xicolà", "Piera", "Fernández",
                        "Casals", "Cabot", "Comellas", "Molines", "Oliver", "Duran", "Pineda", "Rialp", "Rubiralta", "Sallent",
                        "Fernàndez", "Sureda", "Terradell", "Vinyals", "Estruch", "Casado", "Urgell", "Rigau", "Sala", "Flaquer",
                        "Viladomat", "Torró", "Vicente", "Cavaller", "Coll", "Calvet", "Cot", "Gili", "Barceló", "Grau"
                      ],
                }
            }
        }, 'native': {
            'sex': {
                'male': {
                    'first': [
                      "Joan", "Josep", "Marc", "Jordi", "Pere", "Antoni", "Francesc", "Miquel", "Manel", "Ramon",
                      "Carles", "David", "Xavier", "Albert", "Sergi", "Oriol", "Martí", "Rafael", "Jaume", "Pau",
                      "Daniel", "Nicolau", "Toni", "Aleix", "Lluís", "Ricard", "Enric", "Gerard", "Roger", "Andreu",
                      "Adrià", "Àlex", "Arnau", "Bernat", "Bruno", "Ferran", "Guillem", "Hèctor", "Izan", "Ivan",
                      "Jan", "Joan Pau", "Joel", "Nil", "Pol", "Raül", "Sebastià", "Tomàs", "Víctor", "Arnau"
                  ],
                    'second': [
                        "Martí", "Serra", "Valls", "Riba", "Pujol", "Martínez", "Vila", "Baró", "Aranda", "Riu",
                        "Miquel", "Costa", "Ricart", "Torres", "Ferrer", "Balaguer", "Nadal", "Bosch", "Palau", "Miró",
                        "Coma", "Xandrí", "Castelló", "Canut", "Font", "Salvador", "Torrent", "Borda", "Albó", "Reixach",
                        "Guàrdia", "Ribes", "Colom", "Mateu", "Aixas", "Forné", "Miró", "Arnal", "Santacana", "Borràs",
                        "Farré", "Massot", "Moreno", "Compte", "Enric", "Torner", "Busquets", "Anglada", "Isern", "Pérez",
                        "Ricci", "Guasch", "Fornols", "Sabaté", "Baró", "Beltran", "Jané", "Brossa", "Cros", "Xicolà",
                        "Grau", "Rafart", "Sanz", "Perera", "Giralt", "Rubió", "Martorell", "Xicolà", "Piera", "Fernández",
                        "Casals", "Cabot", "Comellas", "Molines", "Oliver", "Duran", "Pineda", "Rialp", "Rubiralta", "Sallent",
                        "Fernàndez", "Sureda", "Terradell", "Vinyals", "Estruch", "Casado", "Urgell", "Rigau", "Sala", "Flaquer",
                        "Viladomat", "Torró", "Vicente", "Cavaller", "Coll", "Calvet", "Cot", "Gili", "Barceló", "Grau"
                      ]
                },
                'female': {
                    'first': [
                      "Laia", "Marta", "Anna", "Laura", "Julia", "Emma", "Sara", "Maria", "Paula", "Andrea",
                      "Clàudia", "Aina", "Elena", "Núria", "Carla", "Judith", "Ariadna", "Meritxell", "Cristina", "Montserrat",
                      "Silvia", "Nadia", "Alba", "Júlia", "Carme", "Irene", "Lídia", "Mireia", "Raquel", "Lola",
                      "Berta", "Sònia", "Gemma", "Ariadna", "Noa", "Marina", "Diana", "Ester", "Pilar", "Eva",
                      "Tània", "Núria", "Cecília", "Miriam", "Xènia", "Montserrat", "Adriana", "Mar", "Roser", "Aina"
                  ],
                    'second': [
                        "Martí", "Serra", "Valls", "Riba", "Pujol", "Martínez", "Vila", "Baró", "Aranda", "Riu",
                        "Miquel", "Costa", "Ricart", "Torres", "Ferrer", "Balaguer", "Nadal", "Bosch", "Palau", "Miró",
                        "Coma", "Xandrí", "Castelló", "Canut", "Font", "Salvador", "Torrent", "Borda", "Albó", "Reixach",
                        "Guàrdia", "Ribes", "Colom", "Mateu", "Aixas", "Forné", "Miró", "Arnal", "Santacana", "Borràs",
                        "Farré", "Massot", "Moreno", "Compte", "Enric", "Torner", "Busquets", "Anglada", "Isern", "Pérez",
                        "Ricci", "Guasch", "Fornols", "Sabaté", "Baró", "Beltran", "Jané", "Brossa", "Cros", "Xicolà",
                        "Grau", "Rafart", "Sanz", "Perera", "Giralt", "Rubió", "Martorell", "Xicolà", "Piera", "Fernández",
                        "Casals", "Cabot", "Comellas", "Molines", "Oliver", "Duran", "Pineda", "Rialp", "Rubiralta", "Sallent",
                        "Fernàndez", "Sureda", "Terradell", "Vinyals", "Estruch", "Casado", "Urgell", "Rigau", "Sala", "Flaquer",
                        "Viladomat", "Torró", "Vicente", "Cavaller", "Coll", "Calvet", "Cot", "Gili", "Barceló", "Grau"
                      ],
                }
            }
        }},
    'Armenia': { 
      'en': {
            'sex': {
                'male': {
                    'first': [
                        "Arman", "Artur", "Davit", "Ashot", "Hayk", "Tigran", "Gevorg", "Karen", "Vardan", "Ruben",
                        "Suren", "Hakob", "Gagik", "Levon", "Aram", "Samvel", "Robert", "Sarkis", "Mher", "Narek",
                        "Edgar", "Rafael", "Gor", "Andranik", "Tigran", "Hovhannes", "Arsen", "Garegin", "Vahan", "Areg",
                        "Gurgen", "Hrant", "Areg", "Edik", "Vahe", "Areg", "Aramayis", "Zaven", "Zhirayr", "Hamlet",
                        "Vrezh", "Razmik", "Sevak", "Antranik", "Norayr", "Areg", "Hovsep", "Khachik", "Hovig", "Artashes",
                        "Gegham", "Hamo", "Raffi", "Varazdat", "Khoren", "Haykaz", "Nairi", "Aren", "Alik", "Artak",
                        "Vigen", "Artyom", "Hmayak", "Daron", "Davit", "Haygazun", "Koryun", "Taron", "Zohrab", "Grigor",
                        "Ardashes", "Arshak", "Ardavast", "Aregak", "Gevork", "Khachatur", "Khajag", "Misak", "Movses", "Nareg",
                        "Poghos", "Sahak", "Saribek", "Sarkis", "Stepan", "Tadevos", "Toros", "Touman", "Tsaghik", "Vartan",
                        "Viken", "Voskan", "Yeghishe", "Zarmayr", "Zoravar", "Zorik", "Zorikto", "Zorikto", "Zorian", "Zorikto"
                      ],
                    'second': [
                        "Aleksanyan", "Mirzoyan", "Karapetyan", "Sargsyan", "Tatulyan", "Hayrapetyan", "Gasparyan", "Aleysyan", "Nazaryan", "Khachatryan",
                        "Davydyan", "Khachikyan", "Halabyan", "Vardanyan", "Grigoryan", "Abelyan", "Movsisyan", "Adamyan", "Bagratyan", "Martirosyan",
                        "Manukyan", "Arakelyan", "Bagdasaryan", "Galustyan", "Nikolayan", "Arzumanyan", "Adalyan", "Harutyunyan", "Gustaghyan", "Danyelyan",
                        "Mukhadyan", "Araratyan", "Dukhayan", "Malakhyanyan", "Khachatrian", "Muradyan", "Nazaryan", "Asatryan", "Kamalyan", "Armenian",
                        "Sevakyan", "Hovsepyan", "Sogomonyan", "Gulparanyan", "Darbinyan", "Minasyan", "Arshakyan", "Nasranyan", "Dumanyan", "Armanyan",
                        "Khachatryan", "Azgamikyan", "Margaryan", "Bagdasaryan", "Hakobyan", "Avagyan", "Hakobyan", "Gabrielyan", "Yeghiazaryan", "Aghajanyan",
                        "Asoyan", "Gevorgyan", "Israelyan", "Ispiryan", "Kazaryan", "Kazanjian", "Karagulyan", "Khachadourian", "Kharazyan", "Khatchadourian",
                        "Khojayan", "Kirakosyan", "Kocharyan", "Kurkjian", "Kurumlian", "Manaseryan", "Manoukian", "Margaryan", "Matevosyan", "Mazmanyan",
                        "Mkhitaryan", "Movsesian", "Nadjarian", "Nalbandian", "Nazarian", "Nersesian", "Ohanian", "Ouzounian", "Papazian", "Parsanian",
                        "Partamian", "Petrosyan", "Saghatelyan", "Sahagian", "Sarkisian", "Saroyan", "Sedrakyan", "Sepanian", "Soghomonyan", "Sukiasian",
                        "Tatoulian", "Terzian", "Topalian", "Torosian", "Tumasyan", "Vartanian", "Vartazarian", "Vartkesian", "Yacoubian", "Yeghiazarian"
                      ]
                },
                'female': {
                    'first': [
                        "Anahit", "Mariam", "Tatev", "Lusine", "Narine", "Arevik", "Anna", "Arpine", "Hasmik", "Liana",
                        "Siranush", "Gayane", "Ruzanna", "Satenik", "Lucine", "Armine", "Marine", "Nona", "Ani", "Silva",
                        "Varduhi", "Hranush", "Lilit", "Aida", "Lara", "Lusaber", "Irina", "Lara", "Shushan", "Shoghik",
                        "Hripsime", "Hasmik", "Liana", "Anahit", "Siranush", "Elena", "Anush", "Ivet", "Astghik", "Anushik",
                        "Arpi", "Naira", "Diana", "Gohar", "Zara", "Hermine", "Irina", "Karina", "Natalie", "Nune",
                        "Vardanush", "Rima", "Lusine", "Liana", "Lusine", "Siranush", "Marine", "Lilit", "Arpi", "Nune",
                        "Ruzanna", "Satik", "Shushan", "Svetlana", "Tigranuhi", "Tatevik", "Tsovinar", "Varditer", "Veronika", "Violeta",
                        "Yulia", "Zara", "Armine", "Ani", "Marine", "Aida", "Zara", "Hripsime", "Silva", "Anushik",
                        "Diana", "Shoghik", "Ani", "Narine", "Satik", "Ruzanna", "Anahit", "Arpi", "Lusine", "Siranush",
                        "Varduhi", "Armine", "Hermine", "Rima", "Nona", "Lara", "Nune", "Ivet", "Hasmik", "Lilit"
                      ],
                    'second': [
                        "Aleksanyan", "Mirzoyan", "Karapetyan", "Sargsyan", "Tatulyan", "Hayrapetyan", "Gasparyan", "Aleysyan", "Nazaryan", "Khachatryan",
                        "Davydyan", "Khachikyan", "Halabyan", "Vardanyan", "Grigoryan", "Abelyan", "Movsisyan", "Adamyan", "Bagratyan", "Martirosyan",
                        "Manukyan", "Arakelyan", "Bagdasaryan", "Galustyan", "Nikolayan", "Arzumanyan", "Adalyan", "Harutyunyan", "Gustaghyan", "Danyelyan",
                        "Mukhadyan", "Araratyan", "Dukhayan", "Malakhyanyan", "Khachatrian", "Muradyan", "Nazaryan", "Asatryan", "Kamalyan", "Armenian",
                        "Sevakyan", "Hovsepyan", "Sogomonyan", "Gulparanyan", "Darbinyan", "Minasyan", "Arshakyan", "Nasranyan", "Dumanyan", "Armanyan",
                        "Khachatryan", "Azgamikyan", "Margaryan", "Bagdasaryan", "Hakobyan", "Avagyan", "Hakobyan", "Gabrielyan", "Yeghiazaryan", "Aghajanyan",
                        "Asoyan", "Gevorgyan", "Israelyan", "Ispiryan", "Kazaryan", "Kazanjian", "Karagulyan", "Khachadourian", "Kharazyan", "Khatchadourian",
                        "Khojayan", "Kirakosyan", "Kocharyan", "Kurkjian", "Kurumlian", "Manaseryan", "Manoukian", "Margaryan", "Matevosyan", "Mazmanyan",
                        "Mkhitaryan", "Movsesian", "Nadjarian", "Nalbandian", "Nazarian", "Nersesian", "Ohanian", "Ouzounian", "Papazian", "Parsanian",
                        "Partamian", "Petrosyan", "Saghatelyan", "Sahagian", "Sarkisian", "Saroyan", "Sedrakyan", "Sepanian", "Soghomonyan", "Sukiasian",
                        "Tatoulian", "Terzian", "Topalian", "Torosian", "Tumasyan", "Vartanian", "Vartazarian", "Vartkesian", "Yacoubian", "Yeghiazarian"
                      ],
                }
            }
        }, 'native': {
            'sex': {
                'male': {
                    'first': [
                      "Արամ", "Հայկ", "Սուրեն", "Գոր", "Լեւոն", "Հովհաննես", "Արսեն", "Սերգեյ", "Դավիթ", "Արման",
                      "Վահագն", "Արտյոմ", "Սիմոն", "Անդրանիկ", "Արշակ", "Ռուբեն", "Տիգրան", "Նարինե", "Հրաչան", "Արմին",
                      "Համլետ", "Սպարտակ", "Բենիամին", "Կարեն", "Թորոս", "Գագիկ", "Սուս", "Վահան", "Անդրան", "Կոստանդին",
                      "Հրակ", "Արմիկ", "Ստեփան", "Մանվել", "Արմանդ", "Գեորգ", "Մարտիրոս", "Ստեփանոս", "Տիրան", "Արտաշես",
                      "Հրաչյա", "Հայկո", "Սմբատ", "Համազա", "Սիլվա", "Արաքս", "Լեոն", "Տիրամ", "Միհրան", "Հրանտ"
                  ],
                    'second': [
                      "Բաղդասարյան", "Գասպարյան", "Հարությունյան", "Գրիգորյան", "Գարիբյան", "Հովսեփյան", "Միրզոյան", "Աբգարյան", "Հակոբյան", "Տիգրանյան",
                      "Անդրեասյան", "Մկրտչյան", "Աբրահամյան", "Բաղդասարյան", "Դանիելյան", "Գարեգինյան", "Արշակյան", "Սահակյան", "Մայսյան", "Ավագյան",
                      "Գեղամյան", "Անանյան", "Մուրադյան", "Ավետիսյան", "Հովհաննիսյան", "Վանատյան", "Գալստյան", "Գրիգորյան", "Գուրգենյան", "Եղիազարյան",
                      "Սարոյան", "Վահագնյան", "Ալեքսանյան", "Կարապետյան", "Արամեան", "Ավետիսյան", "Սարգսյան", "Ամիրյան", "Անուշյան", "Պետրոսյան",
                      "Գագիկյան", "Մկրտչյան", "Գալստյան", "Տեր-Պետրոսյան", "Ալեքսանյան", "Դարբինյան", "Վարդանյան", "Ալեքսանդրյան", "Դավթյան", "Սարգսյան",
                      "Պարոնյան", "Արշակյան", "Հովհաննիսյան"
                  ]
                },
                'female': {
                    'first': [
                      "Անի", "Նազելի", "Սոնա", "Նելլի", "Անահիտ", "Լիլիթ", "Գոհար", "Սոնիա", "Սոնա", "Մելիսսա",
                      "Նարինե", "Վանեսա", "Արտինե", "Տաթեւիկ", "Սոֆիա", "Լիլիթ", "Մարիամ", "Մասիս", "Լիանա", "Հայասի",
                      "Սոֆիա", "Անի", "Բելլա", "Սարինե", "Հարինե", "Նունե", "Նարինե", "Սամվելա", "Լիա", "Սարինե",
                      "Հարան", "Անահիտ", "Բելլա", "Լիլիթ", "Լիլիա", "Մանե", "Սասուն", "Սոֆիա", "Արա", "Բելլա",
                      "Անգելա", "Նազելի", "Նարինե", "Մելիսսա", "Սոնա", "Սոֆիա", "Իսաբելլա", "Մանելլա", "Նարինե"
                  ],
                    'second': [
                      "Բաղդասարյան", "Հարությունյան", "Գարեգինյան", "Անդրեասյան", "Մուրադյան", "Հովհաննիսյան", "Մկրտչյան", "Մուրատյան", "Գրիգորյան", "Գուրգենյան",
                      "Դանիելյան", "Գալստյան", "Եղիազարյան", "Սարոյան", "Վահագնյան", "Մալյան", "Ալեքսանյան", "Կարապետյան", "Արամեան", "Ավետիսյան",
                      "Սարգսյան", "Ամիրյան", "Անուշյան", "Պետրոսյան", "Գագիկյան", "Մկրտչյան", "Գալստյան", "Տեր-Պետրոսյան", "Ալեքսանյան", "Դարբինյան",
                      "Վարդանյան", "Ալեքսանդրյան", "Դավթյան", "Սարգսյան", "Պարոնյան", "Արշակյան", "Հովհաննիսյան", "Մկրտչյան", "Դարբինյան",
                      "Սարգսյան", "Սարգսյան", "Գալստյան", "Գուրգենյան", "Եղիազարյան", "Գրիգորյան"
                  ],
                }
            }
        }},
    'Belgium': { 
      'en': {
            'sex': {
                'male': {
                    'first': [
                        "Lucas", "Liam", "Noah", "Ethan", "Adam", "Finn", "Victor", "Leo", "Arthur", "Gabriel",
                        "Maxime", "Louis", "Jules", "Oscar", "Mathis", "Théo", "Tom", "Milo", "Hugo", "Axel",
                        "Felix", "Matteo", "Emile", "Nathan", "Alexander", "Arthur", "Antoine", "Samuel", "Isaac", "Olivier",
                        "Benjamin", "Elias", "Simon", "Xander", "Mathias", "Baptiste", "David", "Daniel", "Michael", "Raphael",
                        "Tristan", "Cédric", "Vincent", "Julien", "Nicolas", "Christian", "Pierre", "Adrien", "André", "Georges",
                        "Luc", "Philippe", "Jacques", "Jean", "René", "Paul", "Henri", "Alain", "Marc", "Albert",
                        "Charles", "Denis", "Claude", "François", "Guy", "Pierre", "Roger", "Robert", "Thierry", "Yves",
                        "Patrick", "Eric", "David", "Serge", "Michel", "Jean-Paul", "Franck", "Alexandre", "Sylvain", "Grégoire",
                        "Jonathan", "Thierry", "Christophe", "Pascal", "Laurent", "Bruno", "Gilles", "Dominique", "Christophe", "Didier",
                        "Xavier", "Antoine", "Geoffrey", "Sébastien", "Emmanuel", "Fabrice", "Olivier", "Vincent", "Jerome", "Cyril"
                      ],
                    'second': [
                        "Dubois", "Janssens", "Willems", "Jacobs", "Mertens", "Martens", "Pauwels", "Lambert", "Hermans", "De Smet",
                        "Desmet", "Delvaux", "Lefevre", "Dewitte", "Lambrecht", "Goossens", "De Wilde", "Van den Berg", "Michiels", "Lefever",
                        "Vandenbergh", "Maes", "Vandenberghe", "Lacroix", "Baert", "Lemaire", "Dupont", "Dumont", "Dupuis", "Leroy",
                        "Simon", "Noel", "Dumont", "Fontaine", "Leclercq", "Lemaire", "Durant", "Van Hove", "Bakker", "Smeets",
                        "Vanderveken", "Wouters", "Peeters", "Janssen", "Vandenberg", "Vanderheyden", "Thijs", "De Cock", "Van Damme", "Dekker",
                        "Devos", "Declercq", "Vermeulen", "Vermeire", "Van Dyck", "De Backer", "Van de Velde", "Govaert", "Van Dijk", "De Boeck",
                        "Wouters", "Van Dyck", "Schmitz", "Vermeersch", "Vandewalle", "Vandecasteele", "Verheyen", "Vermeulen", "Van Dam", "Verhaeghe",
                        "De Groote", "Van Hout", "De Vries", "Wouters", "Van Den Bossche", "Van De Velde", "Willems", "Van Den Bosch", "Smet",
                        "Van Den Broeck", "Martens", "Pauwels", "Lemmens", "Bosmans", "Claes", "Van der Linden", "Van Der Heyden", "Vandenbossche", "Vanderlinden",
                        "Vandeweghe", "Verhaegen", "Verhulst", "Vermassen", "Vermeir", "Vandepitte", "Vanderpoel", "Vanderstraeten", "Vanderveeke", "Vanhercke"
                      ]
                },
                'female': {
                    'first': [
                        "Emma", "Olivia", "Ava", "Mila", "Ella", "Amelia", "Alice", "Charlotte", "Lina", "Zoe",
                        "Juliette", "Louise", "Léa", "Camille", "Lily", "Anna", "Lucie", "Nora", "Eva", "Lena",
                        "Sarah", "Elise", "Clara", "Noor", "Eva", "Manon", "Nina", "Julia", "Fleur", "Liv",
                        "Eline", "Lara", "Marie", "Lola", "Hannah", "Sophie", "Laura", "Elisa", "Amélie", "Alicia",
                        "Julia", "Emilie", "Mathilde", "Lore", "Céline", "Jade", "Elsa", "Marthe", "Victoria", "Jasmine",
                        "Leonie", "Pauline", "Maud", "Valentine", "Fanny", "Stéphanie", "Caroline", "Isabelle", "Christine", "Anne",
                        "Martine", "Catherine", "Brigitte", "Danielle", "Nathalie", "Sylvie", "Monique", "Marie-France", "Marie-Paule", "Patricia",
                        "Josiane", "Colette", "Liliane", "Annick", "Chantal", "Nicole", "Sophie", "Aurore", "Nathalie", "Marie-Noëlle",
                        "Sandrine", "Véronique", "Isabelle", "Anne-Sophie", "Stéphanie", "Emilie", "Delphine", "Laurence", "Mélanie", "Sabine",
                        "Cécile", "Virginie", "Amandine", "Fanny", "Jennifer", "Valérie", "Céline", "Christelle", "Nancy", "Florence"
                      ],
                    'second': [
                        "Dubois", "Janssens", "Willems", "Jacobs", "Mertens", "Martens", "Pauwels", "Lambert", "Hermans", "De Smet",
                        "Desmet", "Delvaux", "Lefevre", "Dewitte", "Lambrecht", "Goossens", "De Wilde", "Van den Berg", "Michiels", "Lefever",
                        "Vandenbergh", "Maes", "Vandenberghe", "Lacroix", "Baert", "Lemaire", "Dupont", "Dumont", "Dupuis", "Leroy",
                        "Simon", "Noel", "Dumont", "Fontaine", "Leclercq", "Lemaire", "Durant", "Van Hove", "Bakker", "Smeets",
                        "Vanderveken", "Wouters", "Peeters", "Janssen", "Vandenberg", "Vanderheyden", "Thijs", "De Cock", "Van Damme", "Dekker",
                        "Devos", "Declercq", "Vermeulen", "Vermeire", "Van Dyck", "De Backer", "Van de Velde", "Govaert", "Van Dijk", "De Boeck",
                        "Wouters", "Van Dyck", "Schmitz", "Vermeersch", "Vandewalle", "Vandecasteele", "Verheyen", "Vermeulen", "Van Dam", "Verhaeghe",
                        "De Groote", "Van Hout", "De Vries", "Wouters", "Van Den Bossche", "Van De Velde", "Willems", "Van Den Bosch", "Smet",
                        "Van Den Broeck", "Martens", "Pauwels", "Lemmens", "Bosmans", "Claes", "Van der Linden", "Van Der Heyden", "Vandenbossche", "Vanderlinden",
                        "Vandeweghe", "Verhaegen", "Verhulst", "Vermassen", "Vermeir", "Vandepitte", "Vanderpoel", "Vanderstraeten", "Vanderveeke", "Vanhercke"
                      ],
                }
            }
        }, 'native': {
            'sex': {
                'male': {
                    'first': [
                      "Jean", "Pierre", "Luc", "Philippe", "Michel", "Marc", "Patrick", "Alain", "Thierry", "Didier",
                      "Eric", "Vincent", "Yves", "Sébastien", "Christophe", "Olivier", "François", "David", "Nicolas", "Gilles",
                      "Bruno", "Denis", "Laurent", "Fabrice", "Stéphane", "Sylvain", "Maxime", "Jonathan", "Claude", "Georges",
                      "Alexandre", "Paul", "Romain", "Anthony", "Jérôme", "Mathieu", "Christophe", "Jacques", "Damien", "Benoît",
                      "Julien", "Patrick", "Raphaël", "Antoine", "Gérard", "Benjamin", "Lucas", "Emmanuel", "Martin", "René"
                  ],
                    'second': [
                      "Dupont", "Dubois", "Lambert", "Martens", "Simon", "Laurent", "Lefevre", "De Smet", "Jacobs", "Hendrickx",
                      "Pierre", "Lemaire", "Desmet", "Claes", "Goffin", "Dumont", "Martin", "Van Damme", "Dumont", "Lefebvre",
                      "Leclercq", "Willems", "Legrand", "Sauvage", "Roosens", "Pauwels", "Mertens", "Vermeulen", "Carlier", "Van den Berg",
                      "Bertrand", "Janssens", "Dubois", "Mathieu", "Cornelis", "Leroy", "Michiels", "Leclercq", "Lefevre", "De Sutter",
                      "Wouters", "Lambert", "François", "Benoît", "Leroy", "Stevens", "Mathieu", "Lejeune", "Carlier", "Vandenberghe"
                  ]
                },
                'female': {
                    'first': [
                      "Sophie", "Isabelle", "Caroline", "Nathalie", "Christine", "Catherine", "Valérie", "Martine", "Sylvie", "Marie",
                      "Véronique", "Sandrine", "Sabine", "Nadine", "Anne", "Françoise", "Brigitte", "Laurence", "Julie", "Pascale",
                      "Aurélie", "Evelyne", "Claire", "Elodie", "Céline", "Virginie", "Jessica", "Sophie", "Vanessa", "Audrey",
                      "Elise", "Pauline", "Aurore", "Marion", "Charlotte", "Laura", "Manon", "Emilie", "Florence", "Angélique",
                      "Camille", "Hélène", "Mathilde", "Chantal", "Léa", "Olivia", "Valentine", "Christelle", "Eva", "Alice"
                  ],
                    'second': [
                      "Dubois", "Lambert", "Martens", "Simon", "Laurent", "Lefevre", "De Smet", "Jacobs", "Hendrickx", "Pierre",
                      "Lemaire", "Desmet", "Claes", "Goffin", "Dumont", "Martin", "Van Damme", "Dumont", "Lefebvre", "Leclercq",
                      "Willems", "Legrand", "Sauvage", "Roosens", "Pauwels", "Mertens", "Vermeulen", "Carlier", "Van den Berg", "Bertrand",
                      "Janssens", "Dubois", "Mathieu", "Cornelis", "Leroy", "Michiels", "Leclercq", "Lefevre", "De Sutter", "Wouters",
                      "Lambert", "François", "Benoît", "Leroy", "Stevens", "Mathieu", "Lejeune", "Carlier", "Vandenberghe"
                  ],
                }
            }
        }},
    'Benin': { 
      'en': {
            'sex': {
                'male': {
                    'first': [
                        "Adeoti", "Adjovi", "Akpakpa", "Akpata", "Akpovo", "Akpoyibo", "Akrofi", "Akudinobi", "Alika", "Amadi",
                        "Amankwa", "Anyanwu", "Apaloo", "Arhin", "Asamoah", "Ashanti", "Atieno", "Ayodele", "Babatunde", "Bamgbala",
                        "Bankole", "Bashiru", "Bello", "Chijioke", "Chinedu", "Chukwudi", "Danjuma", "Ekow", "Ekundayo", "Enitan",
                        "Ezenwa", "Folayan", "Folorunsho", "Fotso", "Gbadamosi", "Gbenro", "Ghana", "Idowu", "Ifeanyi", "Igwe",
                        "Imoh", "Irukwu", "Isong", "Jabari", "Kalu", "Kamara", "Kazeem", "Kenzo", "Kofi", "Kwame",
                        "Ladipo", "Lamine", "Mandela", "Mandume", "Mensah", "Minani", "Nkrumah", "Nnaji", "Nwachukwu", "Obanla",
                        "Okafor", "Okeke", "Okonkwo", "Olamide", "Olasunkanmi", "Olawale", "Oluwaseun", "Omondi", "Oni", "Osagie",
                        "Osayande", "Oyelowo", "Ozuluonye", "Quansah", "Rasheed", "Sadiq", "Sowande", "Tahiru", "Tanaka", "Uche",
                        "Udeagha", "Udofia", "Ugwu", "Umeh", "Usman", "Uzoigwe", "Vincent", "Wamalwa", "Wanjiru", "Yao",
                        "Yoruba", "Zuberu"
                      ],
                    'second': [
                        "Agbaje", "Akpabio", "Amoussou", "Anagbogu", "Azikiwe", "Balogun", "Dossou", "Eze", "Gnassingbé", "Ibrahim",
                        "Igboanugo", "Imasuen", "Iroegbu", "Kalu", "Kone", "Lawal", "Mensah", "Nkosi", "Nwabueze", "Obi",
                        "Ogunbanjo", "Okonkwo", "Oladipo", "Olawale", "Olowu", "Oni", "Osayande", "Oyewole", "Oyinlola", "Soglo",
                        "Tchomogo", "Ude", "Uzoma", "Wogu", "Zinsou", "Zogbo", "Abiodun", "Adeniran", "Afolayan", "Ajayi",
                        "Akinjide", "Akinola", "Akinsanya", "Akintola", "Alabi", "Amaechi", "Anyiam", "Asobie", "Atiku", "Awolowo",
                        "Babangida", "Babatunde", "Bakare", "Balogun", "Bankole", "Chukwuemeka", "Danjuma", "Dauda", "Eke", "Ekwensi",
                        "Fagbenle", "Fashola", "Fayemi", "Gbaja-Biamila", "Idris", "Igwe", "Iroegbu", "Isiaka", "Jaja", "Kalu",
                        "Kanu", "Kokori", "Ladoja", "Makinde", "Mohammed", "Nnamani", "Obasanjo", "Ogunbanjo", "Ogunlana", "Okeke",
                        "Olowookere", "Oni", "Oyedepo", "Oyinlola", "Saraki", "Shagaya", "Sofola", "Soludo", "Uzodinma", "Yakubu",
                        "Yaradua", "Yuguda", "Zaku"
                      ]
                },
                'female': {
                    'first': [
                        "Adenike", "Akunna", "Akwete", "Ayodele", "Ayomide", "Azuka", "Bolanle", "Chiamaka", "Chidimma", "Chinyere",
                        "Damisi", "Eniola", "Eshe", "Folake", "Funmilayo", "Halima", "Ifeoma", "Imani", "Jumoke", "Kadiatou",
                        "Kafui", "Kanika", "Kehinde", "Kemi", "Kubura", "Latifah", "Makeda", "Mojisola", "Ngozi", "Nia",
                        "Nkechi", "Nneka", "Ngozi", "Ogechi", "Olabisi", "Oluchi", "Omowunmi", "Oni", "Ramatoulaye", "Rukayat",
                        "Safiya", "Sekai", "Sefu", "Shanika", "Simisola", "Siyanda", "Subira", "Tanisha", "Tariro", "Temitope",
                        "Titi", "Tope", "Tsitsi", "Ufuoma", "Ugochi", "Uzoma", "Wuraola", "Yaa", "Yejide", "Yewande",
                        "Zainab", "Zalika", "Zanele", "Zawadi", "Zola", "Zuwena", "Zuri", "Adjoa", "Aissa", "Akua",
                        "Anika", "Asha", "Aziza", "Binta", "Dalia", "Fatou", "Jamila", "Kamaria", "Kaya", "Leila",
                        "Malika", "Muna", "Naima", "Nia", "Nuru", "Rahima", "Samira", "Tahira", "Zahara", "Zalika"
                      ],
                    'second': [
                        "Agbaje", "Akpabio", "Amoussou", "Anagbogu", "Azikiwe", "Balogun", "Dossou", "Eze", "Gnassingbé", "Ibrahim",
                        "Igboanugo", "Imasuen", "Iroegbu", "Kalu", "Kone", "Lawal", "Mensah", "Nkosi", "Nwabueze", "Obi",
                        "Ogunbanjo", "Okonkwo", "Oladipo", "Olawale", "Olowu", "Oni", "Osayande", "Oyewole", "Oyinlola", "Soglo",
                        "Tchomogo", "Ude", "Uzoma", "Wogu", "Zinsou", "Zogbo", "Abiodun", "Adeniran", "Afolayan", "Ajayi",
                        "Akinjide", "Akinola", "Akinsanya", "Akintola", "Alabi", "Amaechi", "Anyiam", "Asobie", "Atiku", "Awolowo",
                        "Babangida", "Babatunde", "Bakare", "Balogun", "Bankole", "Chukwuemeka", "Danjuma", "Dauda", "Eke", "Ekwensi",
                        "Fagbenle", "Fashola", "Fayemi", "Gbaja-Biamila", "Idris", "Igwe", "Iroegbu", "Isiaka", "Jaja", "Kalu",
                        "Kanu", "Kokori", "Ladoja", "Makinde", "Mohammed", "Nnamani", "Obasanjo", "Ogunbanjo", "Ogunlana", "Okeke",
                        "Olowookere", "Oni", "Oyedepo", "Oyinlola", "Saraki", "Shagaya", "Sofola", "Soludo", "Uzodinma", "Yakubu",
                        "Yaradua", "Yuguda", "Zaku"
                      ],
                }
            }
        }, 'native': {
            'sex': {
                'male': {
                    'first': [
                      "Akpabio", "Adeola", "Ayoola", "Babatunde", "Chinedu", "Chukwudi", "Damilola", "Emeka", "Folarin", "Gbolahan",
                      "Ifeanyichukwu", "Jelili", "Kehinde", "Kunle", "Lanre", "Nnamdi", "Obinna", "Olamide", "Olufemi", "Olumide",
                      "Oluwaseun", "Oluwafemi", "Oluwasegun", "Oluwaseyi", "Oluwatobi", "Oluwatoyin", "Olumuyiwa", "Rotimi", "Segun", "Taiwo",
                      "Temitope", "Tunde", "Uche", "Wale", "Yakubu", "Yomi", "Yoruba", "Yusuf", "Zubairu", "Amosu",
                      "Azikiwe", "Babangida", "Bello", "Danjuma", "Gowon", "Jaja", "Obasanjo", "Ogundipe", "Okonkwo", "Onwubiko"
                  ],
                    'second': [
                      "Adjovi", "Akpovi", "Dangbé", "Gbédji", "Hounkpatin", "Idohou", "Kokou", "Lawani", "Migan", "Orou",
                      "Tchalla", "Yayi", "Zinsou", "Agossou", "Aïssi", "Akakpo", "Avognan", "Djogbénou", "Gbèha", "Gbadamassi",
                      "Kotchikpa", "Lokossou", "Montcho", "Noudégbessi", "Oko", "Osséni", "Togbé", "Togoudo", "Toguè", "Tokpè",
                      "Yèhouénou", "Zomahoun", "Akpata", "Allagbé", "Atchadé", "Dénakpo", "Gbèdé", "Hounkanrin", "Koutché", "Lawani",
                      "Lokossou", "Migan", "Orou", "Sossou", "Tchalla", "Vigninou", "Yayi", "Zinsou", "Kodjoh"
                  ]
                },
                'female': {
                    'first': [
                      "Abimbola", "Adesuwa", "Adebimpe", "Ayomide", "Bisola", "Chiamaka", "Chioma", "Damilola", "Ebere", "Folake",
                      "Ifeyinwa", "Ijeoma", "Imoleayo", "Jumoke", "Kemi", "Kikelomo", "Mojisola", "Ngozi", "Nike", "Nneka",
                      "Ngozi", "Omolara", "Omotola", "Ronke", "Sade", "Sola", "Temitope", "Titilayo", "Tolulope", "Tosin",
                      "Yemisi", "Yetunde", "Zainab", "Adewunmi", "Aina", "Ajayi", "Akindele", "Balogun", "Ekwueme", "Falana",
                      "Fashanu", "Fawehinmi", "Iroko", "Ojo", "Okon", "Okojie", "Olaniyan", "Olawoyin", "Olukoya", "Oni"
                  ],
                    'second': [
                      "Adjovi", "Akpovi", "Dangbé", "Gbédji", "Hounkpatin", "Idohou", "Kokou", "Lawani", "Migan", "Orou",
                      "Tchalla", "Yayi", "Zinsou", "Agossou", "Aïssi", "Akakpo", "Avognan", "Djogbénou", "Gbèha", "Gbadamassi",
                      "Kotchikpa", "Lokossou", "Montcho", "Noudégbessi", "Oko", "Osséni", "Togbé", "Togoudo", "Toguè", "Tokpè",
                      "Yèhouénou", "Zomahoun", "Akpata", "Allagbé", "Atchadé", "Dénakpo", "Gbèdé", "Hounkanrin", "Koutché", "Lawani",
                      "Lokossou", "Migan", "Orou", "Sossou", "Tchalla", "Vigninou", "Yayi", "Zinsou", "Kodjoh"
                  ],
                }
            }
        }},
    'Bulgaria': { 
      'en': {
            'sex': {
                'male': {
                    'first': [
                        "Ivan", "Georgi", "Dimitar", "Nikolay", "Petar", "Stoyan", "Dragan", "Krasimir", "Rumen", "Ivo",
                        "Yordan", "Hristo", "Boyan", "Valentin", "Vladimir", "Borislav", "Lyubomir", "Svetoslav", "Yanko", "Veselin",
                        "Kiril", "Asen", "Atanas", "Todor", "Kamen", "Ilian", "Kaloyan", "Yavor", "Danko", "Slavi",
                        "Dobromir", "Blagoi", "Zdravko", "Radoslav", "Deyan", "Emil", "Stefan", "Evgeni", "Mitko", "Vasil",
                        "Plamen", "Nedyalko", "Bogdan", "Zhivko", "Krum", "Milen", "Nikola", "Bozhidar", "Zlatko", "Veliko",
                        "Branimir", "Yasen", "Anton", "Valeri", "Dicho", "Grigor", "Hristofor", "Yanko", "Zahari", "Ismet",
                        "Lachezar", "Marian", "Nikifor", "Ognian", "Pencho", "Rostislav", "Spas", "Teodosi", "Ustinya", "Venko",
                        "Yanislav", "Zlatan", "Bozhidar", "Lyuben", "Milcho", "Nedko", "Orlin", "Ruslan", "Simeon", "Trifon",
                        "Hristofor", "Valentin", "Yavor", "Zhivko", "Zlatko", "Bozhidar", "Kamen", "Ilian", "Kaloyan", "Yordan",
                        "Todor", "Stefan", "Evgeni", "Lyubomir", "Svetoslav", "Asen", "Atanas", "Ivan", "Georgi", "Dimitar"
                      ],
                    'second': [
                        "Ivanov", "Georgiev", "Dimitrov", "Petrov", "Nikolov", "Vasilev", "Stoyanov", "Todorov", "Kostov", "Angelov",
                        "Hristov", "Iliev", "Kolev", "Yankov", "Pavlov", "Mihaylov", "Grigorov", "Dinev", "Zlatev", "Yordanov",
                        "Bogdanov", "Stefanov", "Kirov", "Dimitrov", "Tanev", "Vladimirov", "Krasov"
                      ]
                },
                'female': {
                    'first': [
                        "Maria", "Iva", "Nina", "Elena", "Kristina", "Viktoria", "Anastasia", "Sofia", "Stefaniya", "Katerina",
                        "Margarita", "Raya", "Vesela", "Ivelina", "Mihaela", "Lilia", "Rositsa", "Nadezhda", "Denitsa", "Ekaterina",
                        "Teodora", "Elitsa", "Gergana", "Kalina", "Antoaneta", "Silviya", "Radostina", "Emiliya", "Vanya", "Bilyana",
                        "Diana", "Ralitsa", "Adelina", "Lyubov", "Zornitsa", "Zlatina", "Yoana", "Valentina", "Desislava", "Simona",
                        "Dimitrina", "Nikoleta", "Petia", "Rumyana", "Veronika", "Dara", "Veronica", "Svetlana", "Neli", "Stela",
                        "Aneliya", "Boriana", "Darina", "Elica", "Yuliana", "Ivona", "Rada", "Ivelin", "Vasilena", "Yosifina",
                        "Tatiana", "Rozalina", "Zvetelina", "Stoyanka", "Lyuba", "Tanya", "Evgeniya", "Reneta", "Ani", "Irina",
                        "Ginka", "Ralitsa", "Reneta", "Krasimira", "Iskra", "Ivanka", "Yana", "Lora", "Marta", "Natalia",
                        "Olya", "Sonya", "Tsvetana", "Tanya", "Valeriya", "Yordanka", "Zarina", "Desislava", "Elena", "Kalina",
                        "Ivanka", "Lyudmila", "Mariya", "Nadezhda", "Ralitsa", "Silviya", "Yordanka", "Zoya", "Galya", "Iva"
                      ],
                    'second': [
                        "Ivanova", "Georgieva", "Dimitrova", "Petrova", "Nikolova", "Vasileva", "Stoyanova", "Todorova", "Kostova", "Angelova",
                        "Hristova", "Ilieva", "Koleva", "Yankova", "Pavlova", "Mihaylova", "Grigorova", "Dineva", "Zlateva", "Yordanova",
                        "Bogdanova", "Stefanova", "Kirova", "Mladenova", "Taneva", "Vladimirova", "Krasava"
                      ],
                }
            }
        }, 'native': {
            'sex': {
                'male': {
                    'first': [
                      "Иван", "Петър", "Георги", "Николай", "Стефан", "Димитър", "Андрей", "Александър", "Михаил", "Емил",
                      "Илиян", "Кирил", "Борис", "Тодор", "Васил", "Антон", "Павел", "Даниел", "Христо", "Симеон",
                      "Владимир", "Красимир", "Янко", "Евгени", "Георгий", "Радослав", "Валентин", "Деян", "Калин", "Йордан",
                      "Лъчезар", "Божидар", "Здравко", "Мирослав", "Неделчо", "Ивайло", "Пламен", "Славчо", "Ясен", "Камен",
                      "Йосиф", "Румен", "Християн", "Теодор", "Венцислав", "Благой", "Драгомир", "Марин", "Милко", "Станимир"
                  ],
                    'second': [
                      "Иванов", "Петров", "Георгиев", "Николов", "Станев", "Димитров", "Андреев", "Александров", "Михайлов", "Емилов",
                      "Илиев", "Кирилов", "Борисов", "Тодоров", "Василев", "Антонов", "Павлов", "Даниелов", "Христов", "Симеонов",
                      "Владимиров", "Красимиров", "Янев", "Евгениев", "Георгиев", "Радославов", "Валентинов", "Деянов", "Калинов", "Йорданов",
                      "Лъчезаров", "Божидаров", "Здравков", "Мирославов", "Неделчев", "Ивайлов", "Пламенов", "Славчев", "Ясенов", "Каменов",
                      "Йосифов", "Руменов", "Християнов", "Теодоров", "Венциславов", "Благоев", "Драгомиров", "Маринов", "Милков", "Станимиров"
                  ]
                },
                'female': {
                    'first': [
                      "Мария", "Иванка", "Елена", "Анна", "Светла", "Надя", "Наталия", "Даниела", "Емилия", "Весела",
                      "Румяна", "Виолета", "Магдалена", "Десислава", "Рада", "Ирена", "Таня", "Снежана", "Петя", "Галя",
                      "Вера", "Биляна", "Христина", "Дарина", "Милена", "Нели", "Стефка", "Росица", "Албена", "Стефани",
                      "Ралица", "Теодора", "Валентина", "Лилия", "Славка", "Цвета", "Йорданка", "Живка", "Павлина", "Яна",
                      "Силвия", "Валерия", "Бисерка", "Катя", "Симона", "Мариана", "Мариета", "Гергана", "Маргарита", "Тамара"
                  ],
                    'second': [
                      "Иванова", "Петрова", "Георгиева", "Николова", "Станева", "Димитрова", "Андреева", "Александрова", "Михайлова", "Емилова",
                      "Илиева", "Кирилова", "Борисова", "Тодорова", "Василева", "Антонова", "Павлова", "Даниелова", "Христова", "Симеонова",
                      "Владимирова", "Красимирова", "Янева", "Евгениева", "Георгиева", "Радославова", "Валентинова", "Деянова", "Калинова", "Йорданова",
                      "Лъчезарова", "Божидарова", "Здравкова", "Мирославова", "Неделчева", "Ивайлова", "Пламенова", "Славчева", "Ясенова", "Каменова",
                      "Йосифова", "Руменова", "Християнова", "Теодорова", "Венциславова", "Благоева", "Драгомирова", "Маринова", "Милкова", "Станимирова"
                  ],
                }
            }
        }},
    'Bosnia and Herzegovina': { 
      'en': {
            'sex': {
                'male': {
                    'first': [
                        "Adnan", "Mirza", "Emir", "Dino", "Haris", "Emin", "Armin", "Elvir", "Faruk", "Amar",
                        "Alem", "Safet", "Tarik", "Sanel", "Aldin", "Damir", "Edin", "Enis", "Nermin", "Mirsad",
                        "Almir", "Selmir", "Denis", "Edis", "Aid", "Semir", "Elvis", "Senad", "Elvedin", "Eldin",
                        "Arnes", "Ermin", "Nino", "Adis", "Mirnes", "Emir", "Haris", "Ervin", "Alen", "Anel",
                        "Muhamed", "Ajdin", "Azur", "Davor", "Said", "Suljo", "Zijad", "Sead", "Rijad", "Kenan",
                        "Benjamin", "Fahrudin", "Admir", "Tarik", "Adel", "Ahmed", "Husein", "Ismar", "Riad", "Samed",
                        "Alen", "Din", "Asim", "Hamza", "Emrah", "Vedad", "Elvir", "Fikret", "Ernad", "Esad",
                        "Harun", "Indir", "Mensur", "Nihad", "Salko", "Sandro", "Semih", "Slobodan", "Vedran", "Vlado",
                        "Zoran", "Zlatan", "Almir", "Din", "Eldar", "Emin", "Esmir", "Fahrudin", "Faris", "Fikret",
                        "Goran", "Husnija", "Ibrahim", "Igor", "Jasmin", "Jasenko", "Jovan", "Luka", "Marko", "Mehmed"
                      ],
                    'second': [
                        "Hodzic", "Hadzic", "Osmanagic", "Suljic", "Kovacevic", "Ibrahimovic", "Karic", "Mehic", "Osmic", "Delic",
                        "Kurtic", "Smajic", "Brkic", "Mandic", "Salkic", "Mujagic", "Ahmetovic", "Alagic", "Makic", "Aljic",
                        "Huskic", "Muharemovic", "Dautovic", "Mujic", "Dervisevic", "Besic", "Mesic", "Hrnjic", "Sarajlic", "Secerovic",
                        "Cosic", "Kadric", "Agic", "Mujkic", "Husic", "Krehic", "Ramic", "Jusic", "Lukic", "Halilovic",
                        "Ibrulj", "Zukic", "Dizdarevic", "Pandza", "Ihtijarevic", "Omeragic", "Sijercic", "Ljevakovic", "Mahmic", "Kamberovic",
                        "Lemes", "Geko", "Kolic", "Selimovic", "Corovic", "Merdanovic", "Hasecic", "Izetbegovic", "Zahiragic", "Jugo",
                        "Herceg", "Zaimovic", "Dugonjic", "Grbic", "Peco", "Dolic", "Karamehmedovic", "Lisica", "Feric", "Jusufbegovic",
                        "Osmanovic", "Sabic", "Husic", "Music", "Dautbegovic", "Palic", "Ahmic", "Selmanovic", "Serdarevic", "Dudic",
                        "Semic", "Suljagic", "Matoruga", "Polic", "Mustafic", "Sisic", "Zelenika", "Isakovic", "Bajramovic", "Tiro"
                      ]
                },
                'female': {
                    'first': [
                        "Amina", "Lejla", "Amila", "Emina", "Maida", "Aida", "Ajla", "Selma", "Dženita", "Merima",
                        "Naida", "Ajsa", "Adna", "Belma", "Dina", "Ela", "Elma", "Emira", "Ena", "Erna",
                        "Lamija", "Lana", "Larisa", "Lejla", "Maja", "Medina", "Melisa", "Mia", "Milena", "Minela",
                        "Nedžla", "Nela", "Nejla", "Selena", "Selma", "Sumeja", "Tea", "Tijana", "Una", "Vildana",
                        "Zara", "Zerina", "Zlata", "Šejla", "Šima", "Emina", "Ajša", "Amina", "Amra", "Belkisa",
                        "Dara", "Dijana", "Dina", "Edina", "Ejla", "Elma", "Ena", "Erna", "Fatima", "Ferida",
                        "Gordana", "Hana", "Harisa", "Hasiba", "Ina", "Jasmina", "Katrina", "Kerima", "Lamija", "Lejla",
                        "Lela", "Ljiljana", "Maida", "Maja", "Medina", "Melisa", "Mia", "Naida", "Nejla", "Nela",
                        "Sanela", "Sejla", "Selma", "Sumeja", "Šejla", "Tara", "Tea", "Una", "Vildana", "Zara",
                        "Zerina", "Zlata"
                      ],
                    'second': [
                        "Hodzic", "Hadzic", "Osmanagic", "Suljic", "Kovacevic", "Ibrahimovic", "Karic", "Mehic", "Osmic", "Delic",
                        "Kurtic", "Smajic", "Brkic", "Mandic", "Salkic", "Mujagic", "Ahmetovic", "Alagic", "Makic", "Aljic",
                        "Huskic", "Muharemovic", "Dautovic", "Mujic", "Dervisevic", "Besic", "Mesic", "Hrnjic", "Sarajlic", "Secerovic",
                        "Cosic", "Kadric", "Agic", "Mujkic", "Husic", "Krehic", "Ramic", "Jusic", "Lukic", "Halilovic",
                        "Ibrulj", "Zukic", "Dizdarevic", "Pandza", "Ihtijarevic", "Omeragic", "Sijercic", "Ljevakovic", "Mahmic", "Kamberovic",
                        "Lemes", "Geko", "Kolic", "Selimovic", "Corovic", "Merdanovic", "Hasecic", "Izetbegovic", "Zahiragic", "Jugo",
                        "Herceg", "Zaimovic", "Dugonjic", "Grbic", "Peco", "Dolic", "Karamehmedovic", "Lisica", "Feric", "Jusufbegovic",
                        "Osmanovic", "Sabic", "Husic", "Music", "Dautbegovic", "Palic", "Ahmic", "Selmanovic", "Serdarevic", "Dudic",
                        "Semic", "Suljagic", "Matoruga", "Polic", "Mustafic", "Sisic", "Zelenika", "Isakovic", "Bajramovic", "Tiro"
                      ],
                }
            }
        }, 'native': {
            'sex': {
                'male': {
                    'first': [
                      "Adnan", "Amar", "Armin", "Azur", "Benjamin", "Davor", "Dino", "Edin", "Elvir", "Emir",
                      "Enes", "Faruk", "Haris", "Ibrahim", "Igor", "Jasmin", "Kenan", "Mirza", "Nedim", "Nermin",
                      "Rijad", "Safet", "Semir", "Serdar", "Senad", "Slobodan", "Tarik", "Vedran", "Vedad", "Vladimir",
                      "Zlatan", "Zoran", "Aldin", "Dalibor", "Damir", "Denis", "Dragan", "Emir", "Goran", "Husein",
                      "Ismar", "Jovan", "Mehmed", "Mirsad", "Nemanja", "Osman", "Sasa", "Sead", "Senad", "Slavko"
                  ],
                    'second': [
                      "Ahmetović", "Alić", "Begić", "Delibašić", "Delić", "Dizdarević", "Džeko", "Hodžić", "Hrustić", "Ibričić",
                      "Jusufbegović", "Kovačević", "Kurtić", "Mujkić", "Muminović", "Muslić", "Nikolić", "Omeragić", "Osmanagić", "Petrović",
                      "Redžić", "Salihović", "Smajić", "Suljić", "Terzić", "Tomić", "Velić", "Vidaković", "Zahirović", "Zukić",
                      "Aganović", "Alagić", "Bajramović", "Brkić", "Čengić", "Dedić", "Dervišević", "Hadžić", "Halilović", "Hrnjić",
                      "Ivanović", "Kadrić", "Kapetanović", "Karačić", "Kazić", "Mahmutović", "Mehić", "Memić", "Mujčinović", "Pašić"
                  ]
                },
                'female': {
                    'first': [
                      "Adrijana", "Aida", "Alma", "Amra", "Azra", "Belma", "Dajana", "Dina", "Edina", "Elma",
                      "Emina", "Ermina", "Fatima", "Indira", "Jasmina", "Lamija", "Lejla", "Maja", "Medina", "Melisa",
                      "Merima", "Mersiha", "Mirna", "Naida", "Nermina", "Sanja", "Sara", "Sanela", "Sara", "Selma",
                      "Senija", "Slađana", "Snježana", "Tanja", "Tea", "Vildana", "Zehra", "Zerina", "Amina", "Amira",
                      "Azra", "Dijana", "Dženita", "Emina", "Esma", "Jasna", "Lejla", "Maida", "Merjema", "Nerma"
                  ],
                    'second': [
                      "Ahmetović", "Alić", "Begić", "Delibašić", "Delić", "Dizdarević", "Džeko", "Hodžić", "Hrustić", "Ibričić",
                      "Jusufbegović", "Kovačević", "Kurtić", "Mujkić", "Muminović", "Muslić", "Nikolić", "Omeragić", "Osmanagić", "Petrović",
                      "Redžić", "Salihović", "Smajić", "Suljić", "Terzić", "Tomić", "Velić", "Vidaković", "Zahirović", "Zukić",
                      "Aganović", "Alagić", "Bajramović", "Brkić", "Čengić", "Dedić", "Dervišević", "Hadžić", "Halilović", "Hrnjić",
                      "Ivanović", "Kadrić", "Kapetanović", "Karačić", "Kazić", "Mahmutović", "Mehić", "Memić", "Mujčinović", "Pašić"
                  ],
                }
            }
        }},
    'Great Britain': { 'en': {
            'sex': {
                'male': {
                    'first': [
                        "William", "Jack", "Oliver", "Harry", "George", "Charlie", "Henry", "Thomas", "Oscar", "Alfie",
                        "Archie", "Max", "Leo", "Joshua", "Freddie", "Ethan", "James", "Alexander", "Logan", "Joseph",
                        "Mason", "Daniel", "Lucas", "Isaac", "Samuel", "Benjamin", "Finley", "Jacob", "Edward", "Harrison",
                        "Matthew", "Arthur", "Sebastian", "Theodore", "Dylan", "Elliot", "Ollie", "Riley", "Elijah", "David",
                        "Toby", "Jaxon", "Hugo", "Luca", "Jenson", "Stanley", "Michael", "Jude", "Albert", "Frankie",
                        "Harvey", "Ezra", "Teddy", "Reuben", "Reggie", "Tommy", "Finn", "Caleb", "Louie", "Gabriel",
                        "Jesse", "Jasper", "Harley", "Frank", "Ronnie", "Bobby", "Rory", "Louis", "Albert", "Stanley",
                        "Joe", "Billy", "Felix", "Bertie", "Chester", "Herbert", "Lenny", "Sidney", "Rex", "Monty",
                        "Albie", "Arlo", "Rufus", "Wilfred", "Walter", "Sid", "Ernie", "Gus", "Vinnie", "Rocco"
                      ],
                    'second': [
                        "Smith", "Jones", "Williams", "Brown", "Taylor", "Davies", "Evans", "Patel", "Wilson", "Johnson",
                        "Singh", "Wright", "Patel", "Shah", "Thomas", "Roberts", "Khan", "Lewis", "Jackson", "Clarke",
                        "James", "Phillips", "Lee", "Ali", "Harrison", "Walker", "Allen", "Hall", "Green", "Young",
                        "King", "Baker", "Turner", "Hill", "Cooper", "Bennett", "Cox", "Ellis", "Dixon", "Ward",
                        "Moore", "Harvey", "Reid", "Wood", "Murphy", "Hunt", "Palmer", "Mills", "Fox", "Rogers",
                        "Gray", "Scott", "Adams", "Patel", "Lloyd", "Bryant", "Gordon", "Murray", "Owen", "Harper",
                        "Russell", "Perry", "Mason", "Lambert", "Andrews", "Scott", "Fletcher", "Lawrence", "Stone", "Watson",
                        "Andrews", "Day", "Knight", "Burns", "Walters", "Pearson", "Bishop", "Richards", "Rose", "Ross",
                        "Morrison", "Jacobs", "Elliot", "Warren", "Fisher", "Gibson", "Marshall", "Kennedy", "Crawford", "Cook"
                      ]
                },
                'female': {
                    'first': [
                        "Olivia", "Amelia", "Isla", "Ava", "Grace", "Mia", "Ella", "Sophia", "Lily", "Freya",
                        "Ivy", "Evie", "Emily", "Elsie", "Scarlett", "Poppy", "Charlotte", "Daisy", "Alice", "Isabella",
                        "Ruby", "Harper", "Matilda", "Willow", "Esme", "Sienna", "Millie", "Chloe", "Florence", "Eva",
                        "Eleanor", "Sofia", "Maisie", "Luna", "Lucy", "Rosie", "Emma", "Ellie", "Zara", "Penelope",
                        "Aria", "Holly", "Hannah", "Lola", "Abigail", "Layla", "Maya", "Aurora", "Amelie", "Bella",
                        "Georgia", "Gracie", "Zoe", "Jessica", "Lottie", "Molly", "Harriet", "Ayla", "Emilia", "Erin",
                        "Phoebe", "Darcie", "Nancy", "Imogen", "Mila", "Thea", "Clara", "Arabella", "Violet", "Aisha",
                        "Summer", "Amber", "Edith", "Nina", "Eliza", "Maddison", "Esmae", "Beatrice", "Martha", "Lara",
                        "Athena", "Faye", "Evelyn", "Anna", "Stella", "Ava", "Layla", "Eva", "Mia", "Isabella"
                      ],
                    'second': [
                        "Smith", "Jones", "Williams", "Brown", "Taylor", "Davies", "Evans", "Patel", "Wilson", "Johnson",
                        "Singh", "Wright", "Patel", "Shah", "Thomas", "Roberts", "Khan", "Lewis", "Jackson", "Clarke",
                        "James", "Phillips", "Lee", "Ali", "Harrison", "Walker", "Allen", "Hall", "Green", "Young",
                        "King", "Baker", "Turner", "Hill", "Cooper", "Bennett", "Cox", "Ellis", "Dixon", "Ward",
                        "Moore", "Harvey", "Reid", "Wood", "Murphy", "Hunt", "Palmer", "Mills", "Fox", "Rogers",
                        "Gray", "Scott", "Adams", "Patel", "Lloyd", "Bryant", "Gordon", "Murray", "Owen", "Harper",
                        "Russell", "Perry", "Mason", "Lambert", "Andrews", "Scott", "Fletcher", "Lawrence", "Stone", "Watson",
                        "Andrews", "Day", "Knight", "Burns", "Walters", "Pearson", "Bishop", "Richards", "Rose", "Ross",
                        "Morrison", "Jacobs", "Elliot", "Warren", "Fisher", "Gibson", "Marshall", "Kennedy", "Crawford", "Cook"
                      ],
                }
            }
        }, 'native': {
            'sex': {
                'male': {
                    'first': [
                        "William", "Jack", "Oliver", "Harry", "George", "Charlie", "Henry", "Thomas", "Oscar", "Alfie",
                        "Archie", "Max", "Leo", "Joshua", "Freddie", "Ethan", "James", "Alexander", "Logan", "Joseph",
                        "Mason", "Daniel", "Lucas", "Isaac", "Samuel", "Benjamin", "Finley", "Jacob", "Edward", "Harrison",
                        "Matthew", "Arthur", "Sebastian", "Theodore", "Dylan", "Elliot", "Ollie", "Riley", "Elijah", "David",
                        "Toby", "Jaxon", "Hugo", "Luca", "Jenson", "Stanley", "Michael", "Jude", "Albert", "Frankie",
                        "Harvey", "Ezra", "Teddy", "Reuben", "Reggie", "Tommy", "Finn", "Caleb", "Louie", "Gabriel",
                        "Jesse", "Jasper", "Harley", "Frank", "Ronnie", "Bobby", "Rory", "Louis", "Albert", "Stanley",
                        "Joe", "Billy", "Felix", "Bertie", "Chester", "Herbert", "Lenny", "Sidney", "Rex", "Monty",
                        "Albie", "Arlo", "Rufus", "Wilfred", "Walter", "Sid", "Ernie", "Gus", "Vinnie", "Rocco"
                      ],
                    'second': [
                        "Smith", "Jones", "Williams", "Brown", "Taylor", "Davies", "Evans", "Patel", "Wilson", "Johnson",
                        "Singh", "Wright", "Patel", "Shah", "Thomas", "Roberts", "Khan", "Lewis", "Jackson", "Clarke",
                        "James", "Phillips", "Lee", "Ali", "Harrison", "Walker", "Allen", "Hall", "Green", "Young",
                        "King", "Baker", "Turner", "Hill", "Cooper", "Bennett", "Cox", "Ellis", "Dixon", "Ward",
                        "Moore", "Harvey", "Reid", "Wood", "Murphy", "Hunt", "Palmer", "Mills", "Fox", "Rogers",
                        "Gray", "Scott", "Adams", "Patel", "Lloyd", "Bryant", "Gordon", "Murray", "Owen", "Harper",
                        "Russell", "Perry", "Mason", "Lambert", "Andrews", "Scott", "Fletcher", "Lawrence", "Stone", "Watson",
                        "Andrews", "Day", "Knight", "Burns", "Walters", "Pearson", "Bishop", "Richards", "Rose", "Ross",
                        "Morrison", "Jacobs", "Elliot", "Warren", "Fisher", "Gibson", "Marshall", "Kennedy", "Crawford", "Cook"
                      ]
                },
                'female': {
                    'first': [
                        "Olivia", "Amelia", "Isla", "Ava", "Grace", "Mia", "Ella", "Sophia", "Lily", "Freya",
                        "Ivy", "Evie", "Emily", "Elsie", "Scarlett", "Poppy", "Charlotte", "Daisy", "Alice", "Isabella",
                        "Ruby", "Harper", "Matilda", "Willow", "Esme", "Sienna", "Millie", "Chloe", "Florence", "Eva",
                        "Eleanor", "Sofia", "Maisie", "Luna", "Lucy", "Rosie", "Emma", "Ellie", "Zara", "Penelope",
                        "Aria", "Holly", "Hannah", "Lola", "Abigail", "Layla", "Maya", "Aurora", "Amelie", "Bella",
                        "Georgia", "Gracie", "Zoe", "Jessica", "Lottie", "Molly", "Harriet", "Ayla", "Emilia", "Erin",
                        "Phoebe", "Darcie", "Nancy", "Imogen", "Mila", "Thea", "Clara", "Arabella", "Violet", "Aisha",
                        "Summer", "Amber", "Edith", "Nina", "Eliza", "Maddison", "Esmae", "Beatrice", "Martha", "Lara",
                        "Athena", "Faye", "Evelyn", "Anna", "Stella", "Ava", "Layla", "Eva", "Mia", "Isabella"
                      ],
                    'second': [
                        "Smith", "Jones", "Williams", "Brown", "Taylor", "Davies", "Evans", "Patel", "Wilson", "Johnson",
                        "Singh", "Wright", "Patel", "Shah", "Thomas", "Roberts", "Khan", "Lewis", "Jackson", "Clarke",
                        "James", "Phillips", "Lee", "Ali", "Harrison", "Walker", "Allen", "Hall", "Green", "Young",
                        "King", "Baker", "Turner", "Hill", "Cooper", "Bennett", "Cox", "Ellis", "Dixon", "Ward",
                        "Moore", "Harvey", "Reid", "Wood", "Murphy", "Hunt", "Palmer", "Mills", "Fox", "Rogers",
                        "Gray", "Scott", "Adams", "Patel", "Lloyd", "Bryant", "Gordon", "Murray", "Owen", "Harper",
                        "Russell", "Perry", "Mason", "Lambert", "Andrews", "Scott", "Fletcher", "Lawrence", "Stone", "Watson",
                        "Andrews", "Day", "Knight", "Burns", "Walters", "Pearson", "Bishop", "Richards", "Rose", "Ross",
                        "Morrison", "Jacobs", "Elliot", "Warren", "Fisher", "Gibson", "Marshall", "Kennedy", "Crawford", "Cook"
                      ],
                }
            }
        }},
    'Hungary': { 
      'en': {
            'sex': {
                'male': {
                    'first': [
                        "Gabor", "Istvan", "Janos", "Laszlo", "Peter", "Zoltan", "Attila", "Tamas", "Ferenc", "Istvan",
                        "Andras", "Jozsef", "Imre", "Sandor", "Zsolt", "Bela", "Gyorgy", "Mihaly", "Norbert", "Karoly",
                        "Robert", "Gyula", "Csaba", "Krisztian", "Ferenc", "Mate", "Laszlo", "Szabolcs", "Viktor", "Balazs",
                        "David", "Jozsef", "Karoly", "Andras", "Miklos", "Levente", "Janos", "Zoltan", "Gabor", "Peter",
                        "Laszlo", "Ferenc", "Istvan", "Tamas", "Imre", "Sandor", "Norbert", "Zsolt", "Gyorgy", "Mihaly",
                        "Robert", "Gyula", "Csaba", "Krisztian", "Mate", "Laszlo", "Szabolcs", "Viktor", "Balazs", "David",
                        "Jozsef", "Karoly", "Andras", "Miklos", "Levente", "Janos", "Zoltan", "Gabor", "Peter", "Laszlo",
                        "Ferenc", "Istvan", "Tamas", "Imre", "Sandor", "Norbert", "Zsolt", "Gyorgy", "Mihaly", "Robert",
                        "Gyula", "Csaba", "Krisztian", "Ferenc", "Mate", "Laszlo", "Szabolcs", "Viktor", "Balazs", "David"
                      ],
                    'second': [
                        "Nagy", "Kovacs", "Toth", "Szabo", "Horvath", "Varga", "Kiss", "Molnar", "Nemeth", "Farkas",
                        "Papp", "Balazs", "Takacs", "Juhasz", "Simon", "Kalman", "Biro", "Feher", "Lakatos", "Pasztor",
                        "Pataki", "Torok", "Kis", "Magyar", "Sandor", "Feher", "Lukacs", "Szőke", "Racz", "Katona",
                        "Fekete", "Bakos", "Virag", "Janos", "Bakos", "Balogh", "Barta", "Biro", "Feher", "Gaspar",
                        "Balint", "Barna", "Beke", "Benedek", "Berces", "Bodnar", "Bogdan", "Boros", "Budai", "Csaba",
                        "Csonka", "Csorba", "Danko", "David", "Demeter", "Dobos", "Domotor", "Durko", "Edes", "Ersek",
                        "Farkas", "Fabian", "Feher", "Fekete", "Ferenc", "Fodor", "Foldi", "Fuzesi", "Gabor", "Gal",
                        "Gergely", "Gorbe", "Gulyas", "Gyarmati", "Gyongyosi", "Gyore", "Gyori", "Gyozo", "Hajdu", "Hegedus",
                        "Horvath", "Illes", "Istvan", "Juhasz", "Jonas", "Kantor", "Katona", "Kerekes", "Kiss", "Kocsis"
                      ]
                },
                'female': {
                    'first': [
                        "Szilvia", "Katalin", "Zsofia", "Maria", "Eva", "Ildiko", "Anita", "Edit", "Andrea", "Ibolya",
                        "Zsuzsanna", "Erzsebet", "Judit", "Ilona", "Krisztina", "Viktoria", "Lilla", "Hajnalka", "Nora", "Dora",
                        "Eniko", "Hanna", "Boglarka", "Reka", "Petra", "Bianka", "Emese", "Virag", "Orsolya", "Dalma",
                        "Szofia", "Anett", "Fanni", "Renata", "Noemi", "Eszter", "Nikolett", "Jazmin", "Kinga", "Lili",
                        "Luca", "Evelin", "Borbala", "Diana", "Flora", "Laura", "Lena", "Rozsa", "Sara", "Timea",
                        "Vanessa", "Zita", "Zsanett", "Livia", "Mariann", "Vivien", "Alexandra", "Barbara", "Cintia", "Ema",
                        "Fruzsina", "Greta", "Helga", "Iren", "Julia", "Kitti", "Leila", "Melinda", "Nelli", "Oliver",
                        "Panna", "Rita", "Szabina", "Tunde", "Veronika", "Viktoria", "Xenia", "Yvette", "Zselyke", "Zsanett",
                        "Zsuzsa", "Zoe", "Nora", "Liliana", "Maja", "Anna", "Bianka", "Dora", "Emma", "Fanni"
                      ],
                    'second': [
                        "Nagy", "Kovacs", "Toth", "Szabo", "Horvath", "Varga", "Kiss", "Molnar", "Nemeth", "Farkas",
                        "Papp", "Balazs", "Takacs", "Juhasz", "Simon", "Kalman", "Biro", "Feher", "Lakatos", "Pasztor",
                        "Pataki", "Torok", "Kis", "Magyar", "Sandor", "Feher", "Lukacs", "Szőke", "Racz", "Katona",
                        "Fekete", "Bakos", "Virag", "Janos", "Bakos", "Balogh", "Barta", "Biro", "Feher", "Gaspar",
                        "Balint", "Barna", "Beke", "Benedek", "Berces", "Bodnar", "Bogdan", "Boros", "Budai", "Csaba",
                        "Csonka", "Csorba", "Danko", "David", "Demeter", "Dobos", "Domotor", "Durko", "Edes", "Ersek",
                        "Farkas", "Fabian", "Feher", "Fekete", "Ferenc", "Fodor", "Foldi", "Fuzesi", "Gabor", "Gal",
                        "Gergely", "Gorbe", "Gulyas", "Gyarmati", "Gyongyosi", "Gyore", "Gyori", "Gyozo", "Hajdu", "Hegedus",
                        "Horvath", "Illes", "Istvan", "Juhasz", "Jonas", "Kantor", "Katona", "Kerekes", "Kiss", "Kocsis"
                      ],
                }
            }
        }, 'native': {
            'sex': {
                'male': {
                    'first': [
                      "Gábor", "István", "János", "László", "Péter", "Zoltán", "Ferenc", "Attila", "Tibor", "Tamás",
                      "György", "Béla", "Mihály", "Gergely", "Norbert", "Zsolt", "Dávid", "András", "Ádám", "Károly",
                      "Lajos", "Márton", "Sándor", "József", "Endre", "Bence", "Viktor", "Gergő", "Dániel", "Balázs",
                      "Árpád", "Kristóf", "Zsigmond", "Csaba", "Róbert", "Rudolf", "Szabolcs", "Zolt", "Vilmos", "Henrik",
                      "Levente", "Antal", "Ferencz", "Ákos", "Ernő", "Imre", "József", "Krisztián", "Milán", "Roland"
                  ],
                    'second': [
                      "Nagy", "Kovács", "Tóth", "Szabó", "Horváth", "Varga", "Kiss", "Molnár", "Németh", "Farkas",
                      "Balázs", "Balogh", "Papp", "Takács", "Juhász", "Szilágyi", "Mészáros", "Simon", "Fekete", "Pintér",
                      "Katona", "Szűcs", "Kerekes", "Bíró", "Orbán", "Sándor", "Szalai", "Lukács", "Kocsis", "Gál",
                      "Borbély", "Vincze", "Dénes", "Antal", "Hegedüs", "Fehér", "Fodor", "Bán", "Barta", "Török",
                      "Virág", "Pál", "Magyar", "Somogyi", "Hajdu", "László", "Vörös", "Tamás", "Máté", "Nagy"
                  ]
                },
                'female': {
                    'first': [
                      "Anikó", "Ágnes", "Beáta", "Cecília", "Dorottya", "Éva", "Fanni", "Gizella", "Hanna", "Ilona",
                      "Judit", "Katalin", "Lilla", "Mária", "Nóra", "Orsolya", "Petra", "Réka", "Szilvia", "Tímea",
                      "Veronika", "Zsófia", "Zsuzsanna", "Adrienn", "Dóra", "Flóra", "Henrietta", "Irén", "Klára", "Luca",
                      "Melinda", "Nikolett", "Olga", "Piroska", "Rózsa", "Sára", "Tünde", "Valéria", "Viktória", "Xénia",
                      "Zsanett", "Edit", "Fruzsina", "Gyöngyi", "Helga", "Ildikó", "Julianna", "Kitti", "Lili", "Margit"
                  ],
                    'second': [
                      "Nagy", "Kovács", "Tóth", "Szabó", "Horváth", "Varga", "Kiss", "Molnár", "Németh", "Farkas",
                      "Balázs", "Balogh", "Papp", "Takács", "Juhász", "Szilágyi", "Mészáros", "Simon", "Fekete", "Pintér",
                      "Katona", "Szűcs", "Kerekes", "Bíró", "Orbán", "Sándor", "Szalai", "Lukács", "Kocsis", "Gál",
                      "Borbély", "Vincze", "Dénes", "Antal", "Hegedüs", "Fehér", "Fodor", "Bán", "Barta", "Török",
                      "Virág", "Pál", "Magyar", "Somogyi", "Hajdu", "László", "Vörös", "Tamás", "Máté", "Nagy"
                  ],
                }
            }
        }},
    'Germany': { 'en': {
            'sex': {
                'male': {
                    'first': [
                        "Alexander", "Benjamin", "Christian", "Daniel", "Erik", "Felix", "Gregor", "Hannes", "Isaac", "Johannes",
                        "Klaus", "Lukas", "Maximilian", "Niklas", "Oliver", "Paul", "Quentin", "Raphael", "Sebastian", "Tobias",
                        "Udo", "Valentin", "Werner", "Xaver", "Yannick", "Zacharias", "Adam", "Benedikt", "Carl", "David",
                        "Emil", "Finn", "Gustav", "Heinrich", "Ivan", "Jakob", "Karl", "Leon", "Matthias", "Nils",
                        "Oskar", "Peter", "Quirin", "Rupert", "Simon", "Theo", "Ulrich", "Valentin", "Wolfgang", "Xander",
                        "Yves", "Zoltan", "Anton", "Boris", "Clemens", "Dieter", "Eduard", "Friedrich", "Günther", "Heinz",
                        "Ignaz", "Josef", "Klemens", "Ludwig", "Manfred", "Norbert", "Otto", "Pius", "Quintus", "Rainer",
                        "Siegfried", "Theodor", "Ulrich", "Valentin", "Werner", "Xaver", "Yannick", "Zacharias"
                      ],
                    'second': [
                        "Müller", "Schmidt", "Schneider", "Fischer", "Weber", "Schulz", "Wagner", "Becker", "Hoffmann", "Schäfer",
                        "Koch", "Bauer", "Richter", "Klein", "Wolf", "Schröder", "Neumann", "Schwarz", "Zimmermann", "Braun",
                        "Krüger", "Hofmann", "Hartmann", "Lange", "Schmitt", "Werner", "Schmitz", "Krause", "Meier", "Lehmann",
                        "Schmid", "Schulze", "Maier", "Köhler", "Herrmann", "König", "Walter", "Mayer", "Huber", "Kaiser",
                        "Fuchs", "Peters", "Lang", "Scholz", "Möller", "Weiß", "Jung", "Hahn", "Schubert", "Vogel",
                        "Friedrich", "Keller", "Günther", "Frank", "Berger", "Winkler", "Roth", "Beck", "Lorenz", "Baumann",
                        "Franke", "Albrecht", "Schuster", "Simon", "Ludwig", "Böhm", "Winter", "Kraus", "Martin", "Schumacher",
                        "Vogt", "Stein", "Jäger", "Otto", "Sommer", "Seidel", "Heinrich", "Brandt", "Haas", "Schreiber",
                        "Graf", "Schulte", "Dietrich", "Kühn", "Engel", "Horn", "Böhringer", "Brockmann", "Wimmer", "Brand",
                        "Wolff", "Schindler", "Ziegler", "Götz", "Kraemer", "Herzog", "Philipp", "Beyer", "Brunner", "Buchholz"
                      ]
                },
                'female': {
                    'first': [
                        "Anna", "Bianca", "Caroline", "Daniela", "Elena", "Frieda", "Gabriela", "Hannah", "Isabel", "Julia",
                        "Katharina", "Lea", "Marie", "Nina", "Olivia", "Paula", "Quirina", "Rebecca", "Sophia", "Theresa",
                        "Ulrike", "Veronica", "Wanda", "Xenia", "Yvonne", "Zara", "Amelie", "Beatrix", "Clara", "Diana",
                        "Emma", "Fiona", "Greta", "Helena", "Ingrid", "Johanna", "Klara", "Lena", "Mia", "Natalia",
                        "Ophelia", "Penelope", "Quinta", "Rosa", "Selina", "Tina", "Ursula", "Valentina", "Wilma", "Xandra",
                        "Yvette", "Zelda", "Anja", "Bettina", "Carmen", "Dorothea", "Emilia", "Frida", "Gisela", "Heidi",
                        "Irene", "Jutta", "Karla", "Liselotte", "Magdalena", "Nadine", "Oda", "Petra", "Quintana", "Regina",
                        "Sylvia", "Thea", "Ulla", "Vanessa", "Wilhelmina", "Xaveria", "Yvonne", "Zita", "Annika", "Britta",
                        "Cäcilie", "Dagmar", "Eleonore", "Fanny", "Gilda", "Hildegard", "Ida", "Josefine", "Katarina", "Lara"
                      ],
                    'second': [
                        "Müller", "Schmidt", "Schneider", "Fischer", "Weber", "Schulz", "Wagner", "Becker", "Hoffmann", "Schäfer",
                        "Koch", "Bauer", "Richter", "Klein", "Wolf", "Schröder", "Neumann", "Schwarz", "Zimmermann", "Braun",
                        "Krüger", "Hofmann", "Hartmann", "Lange", "Schmitt", "Werner", "Schmitz", "Krause", "Meier", "Lehmann",
                        "Schmid", "Schulze", "Maier", "Köhler", "Herrmann", "König", "Walter", "Mayer", "Huber", "Kaiser",
                        "Fuchs", "Peters", "Lang", "Scholz", "Möller", "Weiß", "Jung", "Hahn", "Schubert", "Vogel",
                        "Friedrich", "Keller", "Günther", "Frank", "Berger", "Winkler", "Roth", "Beck", "Lorenz", "Baumann",
                        "Franke", "Albrecht", "Schuster", "Simon", "Ludwig", "Böhm", "Winter", "Kraus", "Martin", "Schumacher",
                        "Vogt", "Stein", "Jäger", "Otto", "Sommer", "Seidel", "Heinrich", "Brandt", "Haas", "Schreiber",
                        "Graf", "Schulte", "Dietrich", "Kühn", "Engel", "Horn", "Böhringer", "Brockmann", "Wimmer", "Brand",
                        "Wolff", "Schindler", "Ziegler", "Götz", "Kraemer", "Herzog", "Philipp", "Beyer", "Brunner", "Buchholz"
                      ],
                }
            }
        }, 'native': {
            'sex': {
                'male': {
                    'first': [
                        "Alexander", "Benjamin", "Christian", "Daniel", "Erik", "Felix", "Gregor", "Hannes", "Isaac", "Johannes",
                        "Klaus", "Lukas", "Maximilian", "Niklas", "Oliver", "Paul", "Quentin", "Raphael", "Sebastian", "Tobias",
                        "Udo", "Valentin", "Werner", "Xaver", "Yannick", "Zacharias", "Adam", "Benedikt", "Carl", "David",
                        "Emil", "Finn", "Gustav", "Heinrich", "Ivan", "Jakob", "Karl", "Leon", "Matthias", "Nils",
                        "Oskar", "Peter", "Quirin", "Rupert", "Simon", "Theo", "Ulrich", "Valentin", "Wolfgang", "Xander",
                        "Yves", "Zoltan", "Anton", "Boris", "Clemens", "Dieter", "Eduard", "Friedrich", "Günther", "Heinz",
                        "Ignaz", "Josef", "Klemens", "Ludwig", "Manfred", "Norbert", "Otto", "Pius", "Quintus", "Rainer",
                        "Siegfried", "Theodor", "Ulrich", "Valentin", "Werner", "Xaver", "Yannick", "Zacharias"
                      ],
                    'second': [
                        "Müller", "Schmidt", "Schneider", "Fischer", "Weber", "Schulz", "Wagner", "Becker", "Hoffmann", "Schäfer",
                        "Koch", "Bauer", "Richter", "Klein", "Wolf", "Schröder", "Neumann", "Schwarz", "Zimmermann", "Braun",
                        "Krüger", "Hofmann", "Hartmann", "Lange", "Schmitt", "Werner", "Schmitz", "Krause", "Meier", "Lehmann",
                        "Schmid", "Schulze", "Maier", "Köhler", "Herrmann", "König", "Walter", "Mayer", "Huber", "Kaiser",
                        "Fuchs", "Peters", "Lang", "Scholz", "Möller", "Weiß", "Jung", "Hahn", "Schubert", "Vogel",
                        "Friedrich", "Keller", "Günther", "Frank", "Berger", "Winkler", "Roth", "Beck", "Lorenz", "Baumann",
                        "Franke", "Albrecht", "Schuster", "Simon", "Ludwig", "Böhm", "Winter", "Kraus", "Martin", "Schumacher",
                        "Vogt", "Stein", "Jäger", "Otto", "Sommer", "Seidel", "Heinrich", "Brandt", "Haas", "Schreiber",
                        "Graf", "Schulte", "Dietrich", "Kühn", "Engel", "Horn", "Böhringer", "Brockmann", "Wimmer", "Brand",
                        "Wolff", "Schindler", "Ziegler", "Götz", "Kraemer", "Herzog", "Philipp", "Beyer", "Brunner", "Buchholz"
                      ]
                },
                'female': {
                    'first': [
                        "Anna", "Bianca", "Caroline", "Daniela", "Elena", "Frieda", "Gabriela", "Hannah", "Isabel", "Julia",
                        "Katharina", "Lea", "Marie", "Nina", "Olivia", "Paula", "Quirina", "Rebecca", "Sophia", "Theresa",
                        "Ulrike", "Veronica", "Wanda", "Xenia", "Yvonne", "Zara", "Amelie", "Beatrix", "Clara", "Diana",
                        "Emma", "Fiona", "Greta", "Helena", "Ingrid", "Johanna", "Klara", "Lena", "Mia", "Natalia",
                        "Ophelia", "Penelope", "Quinta", "Rosa", "Selina", "Tina", "Ursula", "Valentina", "Wilma", "Xandra",
                        "Yvette", "Zelda", "Anja", "Bettina", "Carmen", "Dorothea", "Emilia", "Frida", "Gisela", "Heidi",
                        "Irene", "Jutta", "Karla", "Liselotte", "Magdalena", "Nadine", "Oda", "Petra", "Quintana", "Regina",
                        "Sylvia", "Thea", "Ulla", "Vanessa", "Wilhelmina", "Xaveria", "Yvonne", "Zita", "Annika", "Britta",
                        "Cäcilie", "Dagmar", "Eleonore", "Fanny", "Gilda", "Hildegard", "Ida", "Josefine", "Katarina", "Lara"
                      ],
                    'second': [
                        "Müller", "Schmidt", "Schneider", "Fischer", "Weber", "Schulz", "Wagner", "Becker", "Hoffmann", "Schäfer",
                        "Koch", "Bauer", "Richter", "Klein", "Wolf", "Schröder", "Neumann", "Schwarz", "Zimmermann", "Braun",
                        "Krüger", "Hofmann", "Hartmann", "Lange", "Schmitt", "Werner", "Schmitz", "Krause", "Meier", "Lehmann",
                        "Schmid", "Schulze", "Maier", "Köhler", "Herrmann", "König", "Walter", "Mayer", "Huber", "Kaiser",
                        "Fuchs", "Peters", "Lang", "Scholz", "Möller", "Weiß", "Jung", "Hahn", "Schubert", "Vogel",
                        "Friedrich", "Keller", "Günther", "Frank", "Berger", "Winkler", "Roth", "Beck", "Lorenz", "Baumann",
                        "Franke", "Albrecht", "Schuster", "Simon", "Ludwig", "Böhm", "Winter", "Kraus", "Martin", "Schumacher",
                        "Vogt", "Stein", "Jäger", "Otto", "Sommer", "Seidel", "Heinrich", "Brandt", "Haas", "Schreiber",
                        "Graf", "Schulte", "Dietrich", "Kühn", "Engel", "Horn", "Böhringer", "Brockmann", "Wimmer", "Brand",
                        "Wolff", "Schindler", "Ziegler", "Götz", "Kraemer", "Herzog", "Philipp", "Beyer", "Brunner", "Buchholz"
                      ],
                }
            }
        }},
    'Hong Kong': { 
      'en': {
            'sex': {
                'male': {
                    'first': ['Chi', 'Tong', 'Shu', 'Tao', 'Peng', 'Long', 'Neo', 'Liang', 'Yong', 'Hai', 'Tian', 'Qiang', 'Cong', 'Andrew', 'Shuai',
                    'Heng', 'Mao', 'William', 'Xiaoming', 'Pengfei', 'Thomas', 'Simon', 'Paul', 'Shuo', 'Xiaodong', 'Takeshi', 'Chris',
                    'Junjie', 'Zhenyu', 'Zhigang', 'Zhan', 'Steven', 'James', 'Yijun', 'Jiawei', 'Gary', 'Jason', 'Kenneth', 'Sam',
                    'Yifeng', 'Joe', 'Haoran', 'Quan', 'Junyi', 'Sen', 'Zhijun', 'Ricky', 'Yiming', 'Yuming', 'Anthony', 'Ivan', 'Zhiqiang',
                    'Xiaolong', 'Jacky', 'Mark', 'Victor', 'Lang', 'Haifeng', 'Weimin', 'Wenhao', 'Zhiyuan', 'Dian', 'Wilson', 'Biao', 
                    'Bebe', 'Xiaobo', 'Zhiming', 'Kian', 'Hongwei', 'Charles', 'Jack', 'Teo', 'Mingming', 'Zhimin', 'Wenbin', 'Pengcheng',
                    'Binbin', 'Kai', 'Hao', 'Song', 'Chao', 'Di', 'Can', 'Xing', 'Michael', 'Chuan', 'David', 'Gang', 'Sy', 'Eric', 'Peter',
                    'John', 'Guo', 'Alex', 'Guang', 'Raymond', 'Patrick', 'Yifei', 'Tony', 'Alan', 'Kevin', 'Stephen', 'Ken', 'Vincent',
                    'Zhiwei', 'Henry', 'Daniel', 'Benjamin', 'Cai', 'Kelvin', 'Weiming', 'Wenjun', 'Luan', 'Aiden', 'Sunday', 'Edward',
                    'Om', 'Zhiyong', 'Richard', 'Joseph', 'Wenbo', 'Dongdong', 'Yuxuan', 'Chuang', 'Yulin', 'Xiaopeng', 'Philip', 'Matthew',
                    'Brian', 'Stanley', 'Eddie', 'Liming', 'Ge', 'Xiong', 'Keith', 'Samuel', 'Albert', 'Kenny', 'Jimmy', 'Johnny', 'Martin',
                    'Yimin', 'Xiaoguang', 'Ou', 'Lixin', 'Guodong', 'Jiajun', 'Da', 'Weifeng'],
                    'second': ['Chan', 'Cheung',   'Leung', 'Lau', 'Li', 'Cheng', 'Lai', 'Yeung', 'Tang', 'Chow', 'Fung', 'Tsang', 'Kwok', 'Yu', 
                    'Chu', 'Tse', 'Yip', 'Law', 'Liu', 'Wong', 'Hui', 'Mak', 'Yuen', 'Wu', 'Chiu', 'Choi', 'So', 'Au', 'Poon', 'Kwan',
                    'Ma', 'Chen', 'Wang', 'Wan', 'Lui', 'Tong', 'Siu', 'Man', 'Ip', 'Tsui', 'Pang', 'Zhang', 'Mok', 'Kong', 'Lam', 'Ko',
                    'Kwong', 'Luk', 'Ng', 'Yiu', 'Chong', 'Lin', 'Ho', 'Yung', 'Yan', 'Chui', 'Fan', 'Yang', 'Chang', 'Choy', 'Huang',
                    'Sin', 'Tai', 'Sze', 'Kan', 'Shum',   'Fu', 'Yim', 'Sun', 'Ling', 'Tan', 'Ngai', 'Fok', 'Xu', 'Hong', 'Lee', 'Lu',
                    'Suen', 'Tam', 'Chung', 'Zhou', 'Pun', 'Yin', 'Zhao', 'Zhu', 'Hu', 'Szeto',   'Cheuk', 'Tsoi', 'Cho', 'Yue', 'Keung',
                    'Liang', 'He', 'Lung', 'Mo', 'Kim', 'Shiu', 'Zheng', 'Kung', 'Ku', 'Jiang', 'Wei', 'Tso']
                },
                'female': {
                    'first': ['Yan', 'Man', 'Mei', 'Wei', 'Ling', 'Yin', 'Hui', 'Xiao', 'Yun', 'Ning', 'Xin', 'Jin', 'Qing', 'Xi', 'Meng', 'Li',
                    'Qian', 'Tingting', 'Rong', 'Qi', 'Ya', 'Xiang', 'Yifan', 'Yuanyuan', 'Huan', 'Zhu', 'Lingling', 'Miao', 'Qin',
                    'Meiling', 'Yuping', 'Xiaoyu', 'Yingying', 'Cheng', 'Yanyan', 'Mai', 'Shuang', 'Feifei', 'Bei', 'Tea', 'Yilin',
                    'Winnie', 'Ru', 'Xiaoxiao', 'Xiaowen', 'Karen', 'Xiaoying', 'Yiwei', 'Kay', 'Yuxin', 'Qiu', 'Xinyue', 'Liling',
                    'Xiaoyan', 'Xiaowei', 'Jianfeng', 'Yangyang', 'Rongrong', 'Xiaoli', 'Tiantian', 'Grace', 'Joyce', 'Mandy', 'Jianwei',
                    'Jingyi', 'Ailin', 'Ziyi', 'Qiao', 'Xinxin', 'Connie', 'Vivian', 'Eva', 'Yihan', 'Yanhong', 'Qianqian', 'Angela',
                    'Dennis', 'Iris', 'Catherine', 'Chenchen', 'Jiahui', 'Zhenhua', 'Xiaolin', 'Yanping', 'Annie', 'Carol', 'Carmen',
                    'Candy', 'Elaine', 'Anna', 'Danny', 'Christine', 'Cindy', 'Jennifer', 'Yanli', 'Yuling', 'Beibei', 'Yuhong', 'Ying',
                    'Chun', 'Ming', 'May', 'Lin', 'Fei', 'Hong',  'Lei', 'Min', 'Yang', 'Chen', 'Jie', 'Ye', 'Xu', 'Han', 'Nan', 'Lan',
                    'Bin', 'Lou', 'Zhi', 'Zhen', 'Pei', 'Shanshan', 'Xuan', 'Zheng', 'Ai', 'Xue', 'Na', 'Chan', 'Zhao', 'Jingjing', 'Xenia',
                    'Weiwei', 'Xinyi', 'Meimei', 'Xian', 'Qiong', 'Liying', 'Xia', 'Wenjing', 'Lian', 'Xiaojun', 'Lee', 'Jiayi', 'Yuting',
                    'Xinyu', 'Xiaohui', 'Yiwen', 'Yu', 'Siyu', 'Linlin', 'Yiyi', 'Haiyan', 'Amy', 'Liwen', 'Yanling', 'Liping', 'Alice',
                    'Xiaofei', 'Yuqing', 'Jingwen',   'Huimin', 'Zhenzhen', 'Yixin', 'Xiaohong', 'Michelle', 'Xiaolei'],
                    'second': ['Chan', 'Cheung',   'Leung', 'Lau', 'Li', 'Cheng', 'Lai', 'Yeung', 'Tang', 'Chow', 'Fung', 'Tsang', 'Kwok', 'Yu', 
                    'Chu', 'Tse', 'Yip', 'Law', 'Liu', 'Wong', 'Hui', 'Mak', 'Yuen', 'Wu', 'Chiu', 'Choi', 'So', 'Au', 'Poon', 'Kwan',
                    'Ma', 'Chen', 'Wang', 'Wan', 'Lui', 'Tong', 'Siu', 'Man', 'Ip', 'Tsui', 'Pang', 'Zhang', 'Mok', 'Kong', 'Lam', 'Ko',
                    'Kwong', 'Luk', 'Ng', 'Yiu', 'Chong', 'Lin', 'Ho', 'Yung', 'Yan', 'Chui', 'Fan', 'Yang', 'Chang', 'Choy', 'Huang',
                    'Sin', 'Tai', 'Sze', 'Kan', 'Shum',   'Fu', 'Yim', 'Sun', 'Ling', 'Tan', 'Ngai', 'Fok', 'Xu', 'Hong', 'Lee', 'Lu',
                    'Suen', 'Tam', 'Chung', 'Zhou', 'Pun', 'Yin', 'Zhao', 'Zhu', 'Hu', 'Szeto',   'Cheuk', 'Tsoi', 'Cho', 'Yue', 'Keung',
                    'Liang', 'He', 'Lung', 'Mo', 'Kim', 'Shiu', 'Zheng', 'Kung', 'Ku', 'Jiang', 'Wei', 'Tso'],
                }
            }
        }, 'native': {
            'sex': {
                'male': {
                    'first': [
                      "文強", "偉業", "志明", "明俊", "俊傑", "國豪", "浩然", "宗翰", "建業", "文彥",
                      "浩軒", "子軒", "俊賢", "梓豪", "國偉", "志豪", "志鵬", "俊宇", "志成", "明輝",
                      "嘉偉", "偉賢", "建國", "國基", "振宇", "浩澤", "志濤", "建宇", "浩昇", "建強",
                      "志傑", "國強", "浩然", "志軒", "俊輝", "振豪", "浩宇", "俊偉", "志偉", "子健",
                      "俊威", "文榮", "博文", "宗政", "梓軒", "偉勳", "建成", "博瀚", "家駿", "卓然"
                  ],
                    'second': [
                      "李", "王", "張", "劉", "陳", "楊", "黃", "趙", "周", "吳",
                      "徐", "孫", "胡", "朱", "高", "林", "何", "郭", "馬", "羅",
                      "梁", "宋", "鄭", "唐", "程", "蔡", "曹", "袁", "許", "韓",
                      "馮", "鄧", "曾", "彭", "蕭", "董", "潘", "葉", "蔣", "陸",
                      "胡", "鍾", "姚", "魏", "成", "葉", "方", "白", "石", "賈"
                  ]
                },
                'female': {
                    'first': [
                      "美麗", "惠儀", "雪瑩", "曉彤", "靜儀", "翠玲", "莉莉", "嘉欣", "思穎", "玲玲",
                      "慧婷", "綺雯", "美玲", "蓓蕾", "文靜", "雅婷", "惠如", "婉婷", "芷晴", "晶晶",
                      "雅雅", "慧敏", "詩雅", "靜雯", "佳怡", "雪兒", "薇薇", "思敏", "欣怡", "潔儀",
                      "智欣", "雯雯", "慧玲", "曉彤", "綺麗", "雪梅", "雅文", "心怡", "曉萍", "家琪",
                      "惠敏", "美怡", "靜文", "佩珊", "欣宜", "婉君", "雅婷", "思萍", "婉萍", "淑儀"
                  ],
                    'second': [
                      "李", "王", "張", "劉", "陳", "楊", "黃", "趙", "周", "吳",
                      "徐", "孫", "胡", "朱", "高", "林", "何", "郭", "馬", "羅",
                      "梁", "宋", "鄭", "唐", "程", "蔡", "曹", "袁", "許", "韓",
                      "馮", "鄧", "曾", "彭", "蕭", "董", "潘", "葉", "蔣", "陸",
                      "胡", "鍾", "姚", "魏", "成", "葉", "方", "白", "石", "賈"
                  ],
                }
            }
        }},
    'Greece': { 
      'en': {
            'sex': {
                'male': {
                    'first': [
                        "Alexandros", "Nikolaos", "Georgios", "Kostas", "Dimitris",
                        "Panagiotis", "Antonis", "Ioannis", "Spyros", "Christos",
                        "Evangelos", "Andreas", "Theodoros", "Paulos", "Athanasios",
                        "Konstantinos", "Giorgos", "Stavros", "Petros", "Vasilis",
                        "Aristotelis", "Ilias", "Michalis", "Pantelis", "Andreas",
                        "Kleos", "Aris", "Dionysis", "Thanasis", "Anastasios",
                        "Panagis", "Manolis", "Stelios", "Charalampos", "Sotiris",
                        "Savvas", "Eleftherios", "Antonios", "Argyris", "Vasilis",
                        "Giorgos", "Dimitris", "Nikolaos", "Konstantinos", "Theodoros",
                        "Ioannis", "Stavros", "Panagiotis", "Andreas", "Christos"
                      ],
                    'second': [
                        "Papadopoulos", "Karagiannis", "Nikolaidis", "Dimitriou", "Konstantinidis",
                        "Athanasios", "Papanikolaou", "Michailidis", "Georgiou", "Andreas",
                        "Stavridis", "Kontogiannis", "Karampetis", "Pantelidis", "Papastamatios",
                        "Stamatopoulos", "Markopoulou", "Sarantis", "Kontogiorghis", "Liapis",
                        "Kalogirou", "Katsifaras", "Fokidis", "Papantoniou", "Dourou",
                        "Vlachopoulos", "Pappas", "Kyriakou", "Manolias", "Liberopoulos",
                        "Antoniadis", "Katsaros", "Alexopoulos", "Giannoulis", "Kourkoulos",
                        "Dimitrakopoulos", "Margaitis", "Maniatis", "Yiannis", "Tsakalidis",
                        "Papachristos", "Tsalikis", "Margaitis", "Kourtidis", "Makris"
                      ]
                },
                'female': {
                    'first': [
                        "Aikaterini", "Sofia", "Maria", "Eleni", "Anastasia",
                        "Evangelia", "Angeliki", "Dimitra", "Katerina", "Alexandra",
                        "Panagia", "Ioanna", "Arete", "Petra", "Athina",
                        "Christina", "Eirini", "Aimilia", "Elisavet", "Eleutheria",
                        "Evi", "Kalliopi", "Danae", "Georgia", "Chara",
                        "Anna", "Rea", "Niki", "Ariadne", "Melina",
                        "Marina", "Stella", "Kleo", "Klara", "Aristea",
                        "Lydia", "Zoi", "Myrto", "Fotini", "Elsa",
                        "Athanasia", "Penelope", "Agapi", "Lampria", "Vasiliki",
                        "Arietta", "Sofitsa", "Panselinos", "Efi", "Kori",
                        "Evdiki", "Rousa", "Nefeli", "Iliana", "ProDromi",
                        "Dukissa", "Smaragda", "Thalia", "Korina", "Kalypto",
                        "Anaxagora", "Ekaterina", "Marianna", "Roxani", "Theodora",
                        "Kyriaki", "Stavroula", "Asimina", "Ismene", "Drosia",
                        "Menexenia", "Glykeria", "Arkadia", "Efthalia", "Vangelio",
                        "Evdiki", "Manto", "Katina", "Selini", "Stamatia",
                        "Magdalini", "Kallisto", "Argyro", "Epistimi", "Vana"
                      ],
                    'second': [
                        "Papadopoulos", "Karagiannis", "Nikolaidis", "Dimitriou", "Konstantinidis",
                        "Athanasios", "Papanikolaou", "Michailidis", "Georgiou", "Andreas",
                        "Stavridis", "Kontogiannis", "Karampetis", "Pantelidis", "Papastamatios",
                        "Stamatopoulos", "Markopoulou", "Sarantis", "Kontogiorghis", "Liapis",
                        "Kalogirou", "Katsifaras", "Fokidis", "Papantoniou", "Dourou",
                        "Vlachopoulos", "Pappas", "Kyriakou", "Manolias", "Liberopoulos",
                        "Antoniadis", "Katsaros", "Alexopoulos", "Giannoulis", "Kourkoulos",
                        "Dimitrakopoulos", "Margaitis", "Maniatis", "Yiannis", "Tsakalidis",
                        "Papachristos", "Tsalikis", "Margaitis", "Kourtidis", "Makris"
                      ],
                }
            }
        }, 'native': {
            'sex': {
                'male': {
                    'first': [
                        "Αλέξανδρος", "Νικόλαος", "Γεώργιος", "Κώστας", "Δημήτρης",
                        "Παναγιώτης", "Αντώνης", "Ιωάννης", "Σπύρος", "Χρήστος",
                        "Ευάγγελος", "Ανδρέας", "Θεόδωρος", "Παύλος", "Αθανάσιος",
                        "Κωνσταντίνος", "Γιώργος", "Σταύρος", "Πέτρος", "Βασίλης",
                        "Αριστοτέλης", "Ηλίας", "Μιχάλης", "Παντελής", "Ανδρέας",
                        "Κλέος", "Αρης", "Διονύσης", "Θανάσης", "Αναστάσιος",
                        "Παναγής", "Μανώλης", "Στέλιος", "Χαράλαμπος", "Σωτήρης",
                        "Σάββας", "Ελευθέριος", "Αντώνιος", "Αργύρης", "Βασίλης",
                        "Γιώργος", "Δημήτρης", "Νικόλαος", "Κωνσταντίνος", "Θεόδωρος",
                        "Ιωάννης", "Σταύρος", "Παναγιώτης", "Ανδρέας", "Χρήστος"
                      ],
                    'second': [
                        "Παπαδόπουλος", "Καραγιάννης", "Νικολαΐδης", "Δημητρίου", "Κωνσταντινίδης",
                        "Αθανασίου", "Παπανικολάου", "Μιχαηλίδης", "Γεωργίου", "Ανδρέου",
                        "Σταυρίδης", "Κοντογιώργης", "Καραμπέτης", "Παντελίδης", "Παπασταματίου",
                        "Σταματόπουλος", "Μαρκοπούλου", "Σαράντης", "Κούτσουρας", "Λιάπης",
                        "Καλογήρου", "Κατσιφάρας", "Φωκίδης", "Παπαντωνίου", "Δούρου",
                        "Βλαχόπουλος", "Παππάς", "Κυριακού", "Μανωλιάς", "Λυμπερόπουλος",
                        "Αντωνιάδης", "Κατσαρός", "Αλεξόπουλος", "Γιαννούλης", "Κούρκουλος",
                        "Δημητρακόπουλος", "Μαργαρίτης", "Μανιάτης", "Γιάννη", "Τσακαλίδης",
                        "Παπαχρήστος", "Τσαλίκης", "Μαργαρίτης", "Κουρτίδης", "Μακρής"
                      ]
                },
                'female': {
                    'first': [
                        "Αικατερίνη", "Σοφία", "Μαρία", "Ελένη", "Αναστασία",
                        "Ευαγγελία", "Αγγελική", "Δήμητρα", "Κατερίνα", "Αλεξάνδρα",
                        "Παναγία", "Ιωάννα", "Αρετή", "Πέτρα", "Αθηνά",
                        "Χριστίνα", "Ειρήνη", "Αιμιλία", "Ελίσαβετ", "Ελευθερία",
                        "Εύη", "Καλλιόπη", "Δανάη", "Γεωργία", "Χαρά", 
                        "Αννα", "Ρέα", "Νίκη", "Αριάδνη", "Μελίνα",
                        "Μαρίνα", "Στέλλα", "Κλειώ", "Κλάρα", "Αριστέα",
                        "Λυδία", "Ζωή", "Μυρτώ", "Φωτεινή", "Ελσα",
                        "Αθανασία", "Πηνελόπη", "Αγάπη", "Λάμπρια", "Βασιλική",
                        "Αριέττα", "Σοφίτσα", "Πανσέληνος", "Εφη", "Κόρη",
                        "Ευρυδίκη", "Ρούσα", "Νεφέλη", "Ηλιάνα", "Προδρόμη",
                        "Δούκισσα", "Σμαράγδα", "Θάλεια", "Κορίνα", "Καλύπτω",
                        "Αναξαγόρα", "Εκατερίνα", "Μαριάννα", "Ρωξάνη", "Θεοδώρα",
                        "Κυριακή", "Σταυρούλα", "Ασημίνα", "Ισμήνη", "Δροσιά",
                        "Μενεξένια", "Γλυκερία", "Αρκαδία", "Ευθαλία", "Βαγγελιώ",
                        "Ευρυδίκη", "Μαντώ", "Κατίνα", "Σελήνη", "Σταματία",
                        "Μαγδαληνή", "Καλλιστώ", "Αργυρώ", "Επιστήμη", "Βάνα"
                      ],
                    'second': [
                        "Παπαδόπουλος", "Καραγιάννης", "Νικολαΐδης", "Δημητρίου", "Κωνσταντινίδης",
                        "Αθανασίου", "Παπανικολάου", "Μιχαηλίδης", "Γεωργίου", "Ανδρέου",
                        "Σταυρίδης", "Κοντογιώργης", "Καραμπέτης", "Παντελίδης", "Παπασταματίου",
                        "Σταματόπουλος", "Μαρκοπούλου", "Σαράντης", "Κούτσουρας", "Λιάπης",
                        "Καλογήρου", "Κατσιφάρας", "Φωκίδης", "Παπαντωνίου", "Δούρου",
                        "Βλαχόπουλος", "Παππάς", "Κυριακού", "Μανωλιάς", "Λυμπερόπουλος",
                        "Αντωνιάδης", "Κατσαρός", "Αλεξόπουλος", "Γιαννούλης", "Κούρκουλος",
                        "Δημητρακόπουλος", "Μαργαρίτης", "Μανιάτης", "Γιάννη", "Τσακαλίδης",
                        "Παπαχρήστος", "Τσαλίκης", "Μαργαρίτης", "Κουρτίδης", "Μακρής"
                      ],
                }
            }
        }},
    'Georgia': { 
      'en': {
            'sex': {
                'male': {
                    'first': [
                        "Giorgi", "David", "Luka", "Nika", "Ioane",
                        "Levan", "Irakli", "Tornike", "Mikheil", "Akaki",
                        "Givi", "Zurab", "Davit", "Temur", "Beka",
                        "Vakhtang", "Kakha", "Revaz", "Saba", "Giorgadze",
                        "Guram", "Archil", "Lasha", "Giorgi", "Irakli",
                        "Levan", "Dato", "Gocha", "Otar", "Dato",
                        "Nodar", "Kote", "Mamuka", "Koba", "Davit",
                        "Badri", "Gaga", "Rezo", "Temo", "Ioseb",
                        "Akaki", "Beso", "Gaga", "Gogi", "Guram",
                        "Irakli", "Giorgi", "Kakha", "Lado", "Levan",
                        "Mamuka", "Mikheil", "Nika", "Otar", "Pavle",
                        "Revaz", "Sandro", "Soso", "Temur", "Ucha",
                        "Vakhtang", "Zurab", "Davit", "Giorgi", "Irakli",
                        "Levan", "Mikheil", "Nika", "Otar", "Pavle",
                        "Rezo", "Sandro", "Temur", "Ucha", "Vakhtang",
                        "Zaza", "Zurab", "Irakli", "Kakha", "Lado",
                        "Levan", "Mamuka", "Nodar", "Otar", "Pavle",
                        "Revaz", "Sandro", "Temur", "Ucha", "Vakhtang",
                        "Zaza", "Zurab"
                      ],
                    'second': [
                        "Abashidze", "Abramishvili", "Avalishvili", "Abashishvili", "Abramiani",
                        "Baratashvili", "Bakhtadze", "Baramidze", "Balanchivadze", "Beridze",
                        "Gogoladze", "Grigolia", "Gogolashvili", "Gomosmeni", "Guliashvili",
                        "Dadianidze", "Diakonidze", "Deliashvili", "Dvali", "Dodia",
                        "Emgvarishvili", "Eliashvili", "Eradze", "Vardanidze", "Verabidze",
                        "Zurabishvili", "Zurnadze", "Tarasi", "Tarianashvili", "Tevzadze",
                        "Kapanadze", "Kakhaberishvili", "Kikabidze", "Kobakhidze", "Koladze",
                        "Lordkipanidze", "Lomtadze", "Lukashvili", "Maisuradze", "Mamiaishvili",
                        "Mamukha", "Margvelashvili", "Mamukelashvili", "Mgaloblishvili", "Mekvabidze",
                        "Meparishvili", "Merabishvili", "Mikadze", "Mindorashvili", "Mirdzvelaishvili",
                        "Mosephishvili", "Nadareishvili", "Nakashidze", "Nalbandidze", "Natsvlishvili",
                        "Nioradze", "Nozadze", "Ozarashvili", "Papuashvili", "Pataridze",
                        "Pipia", "Pleksunashvili", "Pomarashvili", "Puladze", "Rachvelishvili",
                        "Rusudanashvili", "Rustavellishvili", "Sabashvili", "Sachaleishvili", "Sakandelidze",
                        "Samadashvili", "Sanaia", "Sanikidze", "Sarajishvili", "Shalikashvili",
                        "Shamatava", "Shavgulidze", "Shavisvili", "Sidamonidze", "Sikharulidze",
                        "Simashvili", "Sulaberidze", "Svanidze", "Svimonishvili", "Tabidze",
                        "Taktakishvili", "Tandashvili", "Tanadgoma", "Tavdgiridze", "Tchaidze",
                        "Telianidze", "Tsintsadze", "Tsitelauri", "Tskhovrebashvili", "Tsulukidze",
                        "Tsurtsumia", "Ubilava", "Vachnadze", "Vanosanidze", "Varazi",
                        "Vardzelashvili", "Vashakidze", "Verdzadze", "Vezdenashvili", "Vepkhvadze"
                      ]
                },
                'female': {
                    'first': [
                        "Ana", "Mariam", "Nino", "Salome", "Tamar",
                        "Ketevan", "Maia", "Lela", "Nana", "Sophia",
                        "Elene", "Tamari", "Natia", "Khatia", "Nazi",
                        "Tea", "Diana", "Lia", "Mariami", "Ketevani",
                        "Sophie", "Elena", "Tamara", "Natela", "Ninutsa",
                        "Khatuna", "Tinatin", "Dodo", "Marika", "Tamriko",
                        "Keto", "Maka", "Levana", "Sofia", "Eka",
                        "Tamuna", "Niniko", "Tamriko", "Niniko", "Tamriko"
                      ],
                    'second': [
                        "Abashidze", "Abramishvili", "Avalishvili", "Abashishvili", "Abramiani",
                        "Baratashvili", "Bakhtadze", "Baramidze", "Balanchivadze", "Beridze",
                        "Gogoladze", "Grigolia", "Gogolashvili", "Gomosmeni", "Guliashvili",
                        "Dadianidze", "Diakonidze", "Deliashvili", "Dvali", "Dodia",
                        "Emgvarishvili", "Eliashvili", "Eradze", "Vardanidze", "Verabidze",
                        "Zurabishvili", "Zurnadze", "Tarasi", "Tarianashvili", "Tevzadze",
                        "Kapanadze", "Kakhaberishvili", "Kikabidze", "Kobakhidze", "Koladze",
                        "Lordkipanidze", "Lomtadze", "Lukashvili", "Maisuradze", "Mamiaishvili",
                        "Mamukha", "Margvelashvili", "Mamukelashvili", "Mgaloblishvili", "Mekvabidze",
                        "Meparishvili", "Merabishvili", "Mikadze", "Mindorashvili", "Mirdzvelaishvili",
                        "Mosephishvili", "Nadareishvili", "Nakashidze", "Nalbandidze", "Natsvlishvili",
                        "Nioradze", "Nozadze", "Ozarashvili", "Papuashvili", "Pataridze",
                        "Pipia", "Pleksunashvili", "Pomarashvili", "Puladze", "Rachvelishvili",
                        "Rusudanashvili", "Rustavellishvili", "Sabashvili", "Sachaleishvili", "Sakandelidze",
                        "Samadashvili", "Sanaia", "Sanikidze", "Sarajishvili", "Shalikashvili",
                        "Shamatava", "Shavgulidze", "Shavisvili", "Sidamonidze", "Sikharulidze",
                        "Simashvili", "Sulaberidze", "Svanidze", "Svimonishvili", "Tabidze",
                        "Taktakishvili", "Tandashvili", "Tanadgoma", "Tavdgiridze", "Tchaidze",
                        "Telianidze", "Tsintsadze", "Tsitelauri", "Tskhovrebashvili", "Tsulukidze",
                        "Tsurtsumia", "Ubilava", "Vachnadze", "Vanosanidze", "Varazi",
                        "Vardzelashvili", "Vashakidze", "Verdzadze", "Vezdenashvili", "Vepkhvadze"
                      ],
                }
            }
        }, 'native': {
            'sex': {
                'male': {
                    'first': [
                        "გიორგი", "დავით", "ლუკა", "ნიკა", "იოანე",
                        "ლევანი", "ირაკლი", "თორნიკე", "მიხეილ", "აკაკი",
                        "გივი", "ზურაბი", "დავითი", "თემური", "ბექა",
                        "ვახტანგი", "კახა", "რევაზი", "საბა", "გიორგაძე",
                        "გურამი", "არჩილი", "ლაშა", "გიორგი", "ირაკლი",
                        "ლევანი", "დათო", "გოჩა", "ოთარი", "დათო",
                        "ნოდარი", "კოტე", "მამუკა", "კობა", "დავითი",
                        "ბადრი", "გაგა", "რეზო", "თემო", "იოსებ",
                        "აკაკი", "ბესო", "გაგა", "გოგი", "გურამი",
                        "ირაკლი", "გიორგი", "კახა", "ლადო", "ლევანი",
                        "მამუკა", "მიხეილ", "ნიკა", "ოთარი", "პავლე",
                        "რევაზი", "სანდრო", "სოსო", "თემური", "უჩა",
                        "ვახტანგი", "ზურაბი", "დავითი", "გიორგი", "ირაკლი",
                        "ლევანი", "მიხეილ", "ნიკა", "ოთარი", "პავლე",
                        "რევაზი", "სანდრო", "სოსო", "თემური", "უჩა",
                        "ვახტანგი", "ზაზა", "ზურაბი", "ირაკლი", "კახა",
                        "ლადო", "ლევანი", "მამუკა", "ნოდარი", "ოთარი",
                        "პავლე", "რევაზი", "სანდრო", "სოსო", "თემური",
                        "უჩა", "ვახტანგი", "ზაზა", "ზურაბი"
                      ],
                    'second': [
                        "აბაშიძე", "აბრამიშვილი", "ავალიშვილი", "აბაშიშვილი", "აბრამიანი",
                        "ბარათაშვილი", "ბახტაძე", "ბარამიძე", "ბალანჩივაძე", "ბერიძე",
                        "გოგოლაძე", "გრიგოლია", "გოგოლაშვილი", "გომოსმენი", "გულიაშვილი",
                        "დადიანიძე", "დიაკონიძე", "დელიაშვილი", "დვალი", "დოდია",
                        "ემგვარიშვილი", "ელიაშვილი", "ერაძე", "ვარდანიძე", "ვერაბიძე",
                        "ზურაბიშვილი", "ზურნაძე", "ტარასი", "ტარიანაშვილი", "თევზაძე",
                        "კაპანაძე", "კახაბერიშვილი", "კიკაბიძე", "კობახიძე", "კოლაძე",
                        "ლორდქიფანიძე", "ლომთაძე", "ლუკაშვილი", "მაისურაძე", "მამიაიშვილი",
                        "მამუხა", "მარგველაშვილი", "მამუკელაშვილი", "მგალობლიშვილი", "მექვაბიძე",
                        "მეფარიშვილი", "მერაბიშვილი", "მიქაძე", "მინდორაშვილი", "მირძველაიშვილი",
                        "მოსეფიშვილი", "ნადარეიშვილი", "ნაკაშიძე", "ნალბანიძე", "ნაცვლიშვილი",
                        "ნიორაძე", "ნოზაძე", "ოზარაშვილი", "პაპუაშვილი", "პატარიძე",
                        "ფიფია", "პლექსუნაშვილი", "პომარაშვილი", "პულაძე", "რაჭველიშვილი",
                        "რუსუდანაშვილი", "რუსთაველიშვილი", "საბაშვილი", "საჩალეიშვილი", "საკანდელიძე",
                        "სამადაშვილი", "სანაია", "სანიკიძე", "სარაჯიშვილი", "შალიკაშვილი",
                        "შამათავა", "შავგულიძე", "შავიშვილი", "სიდამონიძე", "სიხარულიძე",
                        "სიმაშვილი", "სულაბერიძე", "სვანიძე", "სვიმონიშვილი", "ტაბიძე",
                        "თაქთაქიშვილი", "თანდაშვილი", "თანადგომა", "თავდგირიძე", "ჩაიძე",
                        "თელიანიძე", "ცინცაძე", "წითელაური", "ცხოვრებაშვილი", "წულუკიძე",
                        "წურწუმია", "უბილავა", "ვაჩნაძე", "ვანოსანიძე", "ვარაზი",
                        "ვარძელაშვილი", "ვაშაკიძე", "ვერძაძე", "ვეზდენაშვილი", "ვეფხვაძე"
                     ]
                },
                'female': {
                    'first': [
                        "ანა", "მარიამი", "ნინო", "სალომე", "თამარი",
                        "ქეთევანი", "მაია", "ლელა", "ნანა", "სოფია",
                        "ელენე", "თამარი", "ნათია", "ხატია", "ნაზი",
                        "ჩაი", "დიანა", "ლია", "მარიამი", "ქეთევანი",
                        "სოფო", "ელენა", "თამარა", "ნათელა", "ნინუცა",
                        "ხათუნა", "თინათინი", "დოდო", "მარიკა", "თამრიკო",
                        "ქეთო", "მაკა", "ლევანა", "სოფია", "ეკა",
                        "თამუნა", "ნინიკო", "თამრიკო", "ნინიკო", "თამრიკო"
                     ],
                    'second': [
                        "აბაშიძე", "აბრამიშვილი", "ავალიშვილი", "აბაშიშვილი", "აბრამიანი",
                        "ბარათაშვილი", "ბახტაძე", "ბარამიძე", "ბალანჩივაძე", "ბერიძე",
                        "გოგოლაძე", "გრიგოლია", "გოგოლაშვილი", "გომოსმენი", "გულიაშვილი",
                        "დადიანიძე", "დიაკონიძე", "დელიაშვილი", "დვალი", "დოდია",
                        "ემგვარიშვილი", "ელიაშვილი", "ერაძე", "ვარდანიძე", "ვერაბიძე",
                        "ზურაბიშვილი", "ზურნაძე", "ტარასი", "ტარიანაშვილი", "თევზაძე",
                        "კაპანაძე", "კახაბერიშვილი", "კიკაბიძე", "კობახიძე", "კოლაძე",
                        "ლორდქიფანიძე", "ლომთაძე", "ლუკაშვილი", "მაისურაძე", "მამიაიშვილი",
                        "მამუხა", "მარგველაშვილი", "მამუკელაშვილი", "მგალობლიშვილი", "მექვაბიძე",
                        "მეფარიშვილი", "მერაბიშვილი", "მიქაძე", "მინდორაშვილი", "მირძველაიშვილი",
                        "მოსეფიშვილი", "ნადარეიშვილი", "ნაკაშიძე", "ნალბანიძე", "ნაცვლიშვილი",
                        "ნიორაძე", "ნოზაძე", "ოზარაშვილი", "პაპუაშვილი", "პატარიძე",
                        "ფიფია", "პლექსუნაშვილი", "პომარაშვილი", "პულაძე", "რაჭველიშვილი",
                        "რუსუდანაშვილი", "რუსთაველიშვილი", "საბაშვილი", "საჩალეიშვილი", "საკანდელიძე",
                        "სამადაშვილი", "სანაია", "სანიკიძე", "სარაჯიშვილი", "შალიკაშვილი",
                        "შამათავა", "შავგულიძე", "შავიშვილი", "სიდამონიძე", "სიხარულიძე",
                        "სიმაშვილი", "სულაბერიძე", "სვანიძე", "სვიმონიშვილი", "ტაბიძე",
                        "თაქთაქიშვილი", "თანდაშვილი", "თანადგომა", "თავდგირიძე", "ჩაიძე",
                        "თელიანიძე", "ცინცაძე", "წითელაური", "ცხოვრებაშვილი", "წულუკიძე",
                        "წურწუმია", "უბილავა", "ვაჩნაძე", "ვანოსანიძე", "ვარაზი",
                        "ვარძელაშვილი", "ვაშაკიძე", "ვერძაძე", "ვეზდენაშვილი", "ვეფხვაძე"
                     ],
                }
            }
        }},
    'Denmark': { 
      'en': {
            'sex': {
                'male': {
                    'first': [
                        "Anders", "Frederik", "Christian", "Mikkel", "Lukas",
                        "Emil", "Oliver", "Noah", "William", "Carl",
                        "Victor", "Elias", "Alexander", "Mathias", "Oscar",
                        "Johan", "Daniel", "Sebastian", "Lucas", "Nikolaj",
                        "Simon", "Malthe", "Jonathan", "Sofus", "Tobias",
                        "Benjamin", "Isaac", "Sander", "Jonas", "Theo",
                        "Marcus", "Albert", "August", "Magnus", "Kristian",
                        "Lasse", "Niklas", "Erik", "Anton", "Rasmus",
                        "Jens", "Mads", "David", "Casper", "Gabriel",
                        "Valdemar", "Jakob", "Filip", "Mathilde", "Christian",
                        "Emil", "Oliver", "Noah", "William", "Carl",
                        "Victor", "Elias", "Alexander", "Mathias", "Oscar",
                        "Johan", "Daniel", "Sebastian", "Lucas", "Nikolaj",
                        "Simon", "Malthe", "Jonathan", "Sofus", "Tobias",
                        "Benjamin", "Isaac", "Sander", "Jonas", "Theo",
                        "Marcus", "Albert", "August", "Magnus", "Kristian",
                        "Lasse", "Niklas", "Erik", "Anton", "Rasmus",
                        "Jens", "Mads", "David", "Casper", "Gabriel",
                        "Valdemar", "Jakob", "Filip"
                      ],
                    'second': [
                        "Andersen", "Nielsen", "Jensen", "Hansen", "Pedersen",
                        "Andreasen", "Olsen", "Madsen", "Christensen", "Petersen",
                        "Sorensen", "Larsen", "Rasmussen", "Jorgensen", "Poulsen",
                        "Knudsen", "Kristensen", "Mortensen", "Damgaard", "Lund",
                        "Moller", "Eriksen", "Simonsen", "Thomsen", "Jakobsen",
                        "Johansen", "Mogensen", "Hermansen", "Svendsen", "Olesen",
                        "Lorentzen", "Jakobsen", "Johnsen", "Enevoldsen", "Jepsen",
                        "Hedegaard", "Haugaard", "Svane", "Bach", "Dalgaard",
                        "Winther", "Mathiasen", "Torp", "Vinter", "Lyng",
                        "Klausen", "Munk", "Madsen", "Vestergaard", "Brandt",
                        "Bisgaard", "Brodersen", "Juhl", "Norgaard", "Friis",
                        "Schmidt", "Christoffersen", "Hoffmann", "Hermansen", "Lassen",
                        "Koch", "Lind", "Haugaard", "Olesen", "Bjerre",
                        "Ravn", "Knudsen", "Kofoed", "Svendsen", "Toft",
                        "Vinter", "Laursen", "Bonde", "Knudsen", "Wagner",
                        "Hansen", "Gade", "Fogh", "Henriksen", "Leth",
                        "Lauridsen", "Sonne", "Berg", "Eriksen", "Fischer",
                        "Johannsen", "Olesen", "Poulsen", "Thomsen", "Vinther",
                        "Winther", "Zimmermann"
                      ]
                },
                'female': {
                    'first': [
                        "Emma", "Ida", "Clara", "Laura", "Isabella",
                        "Sophia", "Freja", "Mathilde", "Sofie", "Anna",
                        "Olivia", "Alberte", "Ella", "Mille", "Victoria",
                        "Emilie", "Caroline", "Maja", "Frida", "Alma",
                        "Julie", "Sara", "Aya", "Nora", "Liva",
                        "Karla", "Ellen", "Eva", "Lea", "Agnes",
                        "Thea", "Josefine", "Mia", "Line", "Liv",
                        "Malou", "Amalie", "Astrid", "Sofia", "Luna",
                        "Nanna", "Marie", "Signe", "Silje", "Selma",
                        "Tilde", "Mynte", "Ingrid", "Vigga", "Merle",
                        "Viktoria", "Annabelle", "Hannah", "Alba", "Esther",
                        "Lily", "Hedvig", "Louise", "Ronja", "Sofija",
                        "Matilda", "Alina", "Mira", "Eleanor", "Agathe",
                        "Elea", "Edith", "Estelle", "Eden", "Jasmine",
                        "Fie", "Cornelia", "Cecilie", "Amelia", "Andrea",
                        "Bella", "Betina", "Bianca", "Cille", "Camilla",
                        "Cathrine", "Charlotte", "Christine", "Dorthea", "Evelyn",
                        "Fanny", "Filippa", "Gabriella", "Georgine", "Gitte",
                        "Gry", "Hanne", "Helle", "Helene"
                      ],
                    'second': [
                        "Andersen", "Nielsen", "Jensen", "Hansen", "Pedersen",
                        "Andreasen", "Olsen", "Madsen", "Christensen", "Petersen",
                        "Sorensen", "Larsen", "Rasmussen", "Jorgensen", "Poulsen",
                        "Knudsen", "Kristensen", "Mortensen", "Damgaard", "Lund",
                        "Moller", "Eriksen", "Simonsen", "Thomsen", "Jakobsen",
                        "Johansen", "Mogensen", "Hermansen", "Svendsen", "Olesen",
                        "Lorentzen", "Jakobsen", "Johnsen", "Enevoldsen", "Jepsen",
                        "Hedegaard", "Haugaard", "Svane", "Bach", "Dalgaard",
                        "Winther", "Mathiasen", "Torp", "Vinter", "Lyng",
                        "Klausen", "Munk", "Madsen", "Vestergaard", "Brandt",
                        "Bisgaard", "Brodersen", "Juhl", "Norgaard", "Friis",
                        "Schmidt", "Christoffersen", "Hoffmann", "Hermansen", "Lassen",
                        "Koch", "Lind", "Haugaard", "Olesen", "Bjerre",
                        "Ravn", "Knudsen", "Kofoed", "Svendsen", "Toft",
                        "Vinter", "Laursen", "Bonde", "Knudsen", "Wagner",
                        "Hansen", "Gade", "Fogh", "Henriksen", "Leth",
                        "Lauridsen", "Sonne", "Berg", "Eriksen", "Fischer",
                        "Johannsen", "Olesen", "Poulsen", "Thomsen", "Vinther",
                        "Winther", "Zimmermann"
                      ],
                }
            }
        }, 'native': {
            'sex': {
                'male': {
                    'first': [
                        "Anders", "Frederik", "Christian", "Mikkel", "Lukas",
                        "Emil", "Oliver", "Noah", "William", "Carl",
                        "Victor", "Elias", "Alexander", "Mathias", "Oscar",
                        "Johan", "Daniel", "Sebastian", "Lucas", "Nikolaj",
                        "Simon", "Malthe", "Jonathan", "Sofus", "Tobias",
                        "Benjamin", "Isaac", "Sander", "Jonas", "Theo",
                        "Marcus", "Albert", "August", "Magnus", "Kristian",
                        "Lasse", "Niklas", "Erik", "Anton", "Rasmus",
                        "Jens", "Mads", "David", "Casper", "Gabriel",
                        "Valdemar", "Jakob", "Filip", "Mathilde", "Christian",
                        "Emil", "Oliver", "Noah", "William", "Carl",
                        "Victor", "Elias", "Alexander", "Mathias", "Oscar",
                        "Johan", "Daniel", "Sebastian", "Lucas", "Nikolaj",
                        "Simon", "Malthe", "Jonathan", "Sofus", "Tobias",
                        "Benjamin", "Isaac", "Sander", "Jonas", "Theo",
                        "Marcus", "Albert", "August", "Magnus", "Kristian",
                        "Lasse", "Niklas", "Erik", "Anton", "Rasmus",
                        "Jens", "Mads", "David", "Casper", "Gabriel",
                        "Valdemar", "Jakob", "Filip"
                      ],
                    'second': [
                        "Andersen", "Nielsen", "Jensen", "Hansen", "Pedersen",
                        "Andreasen", "Olsen", "Madsen", "Christensen", "Petersen",
                        "Sorensen", "Larsen", "Rasmussen", "Jorgensen", "Poulsen",
                        "Knudsen", "Kristensen", "Mortensen", "Damgaard", "Lund",
                        "Moller", "Eriksen", "Simonsen", "Thomsen", "Jakobsen",
                        "Johansen", "Mogensen", "Hermansen", "Svendsen", "Olesen",
                        "Lorentzen", "Jakobsen", "Johnsen", "Enevoldsen", "Jepsen",
                        "Hedegaard", "Haugaard", "Svane", "Bach", "Dalgaard",
                        "Winther", "Mathiasen", "Torp", "Vinter", "Lyng",
                        "Klausen", "Munk", "Madsen", "Vestergaard", "Brandt",
                        "Bisgaard", "Brodersen", "Juhl", "Norgaard", "Friis",
                        "Schmidt", "Christoffersen", "Hoffmann", "Hermansen", "Lassen",
                        "Koch", "Lind", "Haugaard", "Olesen", "Bjerre",
                        "Ravn", "Knudsen", "Kofoed", "Svendsen", "Toft",
                        "Vinter", "Laursen", "Bonde", "Knudsen", "Wagner",
                        "Hansen", "Gade", "Fogh", "Henriksen", "Leth",
                        "Lauridsen", "Sonne", "Berg", "Eriksen", "Fischer",
                        "Johannsen", "Olesen", "Poulsen", "Thomsen", "Vinther",
                        "Winther", "Zimmermann"
                      ]
                },
                'female': {
                    'first': [
                        "Emma", "Ida", "Clara", "Laura", "Isabella",
                        "Sophia", "Freja", "Mathilde", "Sofie", "Anna",
                        "Olivia", "Alberte", "Ella", "Mille", "Victoria",
                        "Emilie", "Caroline", "Maja", "Frida", "Alma",
                        "Julie", "Sara", "Aya", "Nora", "Liva",
                        "Karla", "Ellen", "Eva", "Lea", "Agnes",
                        "Thea", "Josefine", "Mia", "Line", "Liv",
                        "Malou", "Amalie", "Astrid", "Sofia", "Luna",
                        "Nanna", "Marie", "Signe", "Silje", "Selma",
                        "Tilde", "Mynte", "Ingrid", "Vigga", "Merle",
                        "Viktoria", "Annabelle", "Hannah", "Alba", "Esther",
                        "Lily", "Hedvig", "Louise", "Ronja", "Sofija",
                        "Matilda", "Alina", "Mira", "Eleanor", "Agathe",
                        "Elea", "Edith", "Estelle", "Eden", "Jasmine",
                        "Fie", "Cornelia", "Cecilie", "Amelia", "Andrea",
                        "Bella", "Betina", "Bianca", "Cille", "Camilla",
                        "Cathrine", "Charlotte", "Christine", "Dorthea", "Evelyn",
                        "Fanny", "Filippa", "Gabriella", "Georgine", "Gitte",
                        "Gry", "Hanne", "Helle", "Helene"
                      ],
                    'second': [
                        "Andersen", "Nielsen", "Jensen", "Hansen", "Pedersen",
                        "Andreasen", "Olsen", "Madsen", "Christensen", "Petersen",
                        "Sorensen", "Larsen", "Rasmussen", "Jorgensen", "Poulsen",
                        "Knudsen", "Kristensen", "Mortensen", "Damgaard", "Lund",
                        "Moller", "Eriksen", "Simonsen", "Thomsen", "Jakobsen",
                        "Johansen", "Mogensen", "Hermansen", "Svendsen", "Olesen",
                        "Lorentzen", "Jakobsen", "Johnsen", "Enevoldsen", "Jepsen",
                        "Hedegaard", "Haugaard", "Svane", "Bach", "Dalgaard",
                        "Winther", "Mathiasen", "Torp", "Vinter", "Lyng",
                        "Klausen", "Munk", "Madsen", "Vestergaard", "Brandt",
                        "Bisgaard", "Brodersen", "Juhl", "Norgaard", "Friis",
                        "Schmidt", "Christoffersen", "Hoffmann", "Hermansen", "Lassen",
                        "Koch", "Lind", "Haugaard", "Olesen", "Bjerre",
                        "Ravn", "Knudsen", "Kofoed", "Svendsen", "Toft",
                        "Vinter", "Laursen", "Bonde", "Knudsen", "Wagner",
                        "Hansen", "Gade", "Fogh", "Henriksen", "Leth",
                        "Lauridsen", "Sonne", "Berg", "Eriksen", "Fischer",
                        "Johannsen", "Olesen", "Poulsen", "Thomsen", "Vinther",
                        "Winther", "Zimmermann"
                      ],
                }
            }
        }},
    'Israel': { 
      'en': {
            'sex': {
                'male': {
                    'first': [
                        "Avraham", "Moshe", "David", "Yehoshua", "Netanel",
                        "Gavriel", "Eitan", "Adam", "Yitzchak", "Aharon",
                        "Yosef", "Yaakov", "Yisrael", "Eilan", "Daniel",
                        "Yehuda", "Reuven", "Shimon", "Levi", "Asher",
                        "Naftali", "Yissachar", "Zevulun", "Gad", "Ephraim",
                        "Menashe", "Binyamin", "Aryeh", "Eil", "Yoav",
                        "Oz", "Yair", "Ilya", "Eliyahu", "Elazar",
                        "Shlomo", "Har'el", "Gideon", "Baruch", "Avihu",
                        "Alon", "Yirmiyahu", "Yishmael", "Hod", "Matan",
                        "Menachem", "Menuchah", "Mordechai", "Morim", "Marcus",
                        "Mishpat", "Nadav", "Noam", "Nir", "Naftali",
                        "Natan", "Neriya", "Savion", "Sela", "Sapphire",
                        "Eden", "Amit", "Eran", "Oseh", "Palai",
                        "Flash", "Perez", "Perez", "Freed", "Fridman",
                        "Fridman", "Tzur", "Tzach", "Tzion", "Tzefanya",
                        "Tzarfati", "Kobi", "Korn", "Korn", "Kornin",
                        "Kushnir", "Kinan", "Kishon", "Kanael", "Caesar",
                        "Katzav", "Katz", "Katzir", "Kotz", "Kotzer",
                        "Kish", "Krispi", "Keren", "Keshet", "Ron",
                        "Reuven", "Rosenblum", "Roey", "Ranan", "Shaul",
                        "Shaul", "Shaul", "Shabtai", "Shagav", "Shai",
                        "Shama'i", "Shemuel", "Simcha", "Shmiya", "Shneer"
                      ],
                    'second': [
                        "Cohen", "Levi", "Peretz", "Benjamin", "David",
                        "Goldberg", "Friedman", "Mizrachi", "Oren", "Carmel",
                        "Mor", "Katz", "Weiss", "Adler", "Eisenberg",
                        "Stern", "Avraham", "Azoulay", "Carmi", "Malul",
                        "Amsalem", "Grossman", "Hasson", "Levinsky", "Shalom",
                        "Carmeli", "Maman", "Hazan", "Cohen", "Shapira",
                        "Finkelstein", "Harel", "Amir", "Golan", "Haim",
                        "Amrani", "Dahan", "Ivri", "Carmel", "Lavie",
                        "Sasson", "Shamir", "Barak", "Magen", "Chen",
                        "Melamed", "Fisher", "Ben Ari", "Biton", "Geva",
                        "Rosen", "Kahana", "Amoyal", "Dror", "Schwartz",
                        "Fried", "Gavrieli", "Hadad", "Fridman", "Berger",
                        "Berkovich", "Wolfovitz", "Drori", "Shaked", "Malka",
                        "Sabag", "Reuveni", "Gur", "Zada", "Zamir",
                        "Zur", "Zinger", "Sadeh", "Sadot", "Sarfati",
                        "Sason", "Sternberg", "Tadmor", "Taranto", "Tennenbaum",
                        "Terzi", "Tzur", "Uzan", "Vaknin", "Vardi",
                        "Werner", "Yanai", "Yisraeli", "Zahavi", "Zarfati",
                        "Zilberman", "Zarchi", "Zehavi", "Zelner", "Zemach",
                        "Zer", "Zilka", "Zisapel", "Zisser", "Zilberberg"
                      ]
                },
                'female': {
                    'first': [
                        "Sarah", "Ruth", "Rachel", "Leah", "Miriam",
                        "Esther", "Rebecca", "Hannah", "Tamar", "Devorah",
                        "Judith", "Chaya", "Zehava", "Yael", "Rivka",
                        "Batsheva", "Dina", "Abigail", "Michal", "Batya",
                        "Nechama", "Avigail", "Noa", "Orly", "Shira",
                        "Maya", "Ayelet", "Shoshana", "Talia", "Yonit",
                        "Liat", "Tziporah", "Adina", "Liora", "Shifra",
                        "Chava", "Shlomit", "Yifat", "Orit", "Iris",
                        "Dorit", "Efrat", "Yiska", "Yaffa", "Tzipporah",
                        "Nava", "Yonina", "Hodaya", "Lior", "Ora",
                        "Inbal", "Liat", "Eden", "Nofar", "Lilach",
                        "Maayan", "Osnat", "Sivan", "Roni", "Liorit",
                        "Sigal", "Galit", "Yifat", "Bat-El", "Meital",
                        "Rina", "Liron", "Avital", "Orna", "Aliza",
                        "Riki", "Tzurit", "Hadassah", "Netanya", "Hila",
                        "Naama", "Shaked", "Sarit", "Sharon", "Dafna",
                        "Alma", "Vered", "Yiska", "Yardena", "Yahel",
                        "Zohar", "Ziva", "Shuli", "Shlomit", "Shifra",
                        "Tehila", "Tzila", "Shmuela", "Shani", "Sigalit",
                        "Zina", "Zehava", "Zuri", "Zehavit", "Zvika",
                        "Shimrit", "Shirel"
                      ],
                    'second': [
                        "Cohen", "Levi", "Peretz", "Benjamin", "David",
                        "Goldberg", "Friedman", "Mizrachi", "Oren", "Carmel",
                        "Mor", "Katz", "Weiss", "Adler", "Eisenberg",
                        "Stern", "Avraham", "Azoulay", "Carmi", "Malul",
                        "Amsalem", "Grossman", "Hasson", "Levinsky", "Shalom",
                        "Carmeli", "Maman", "Hazan", "Cohen", "Shapira",
                        "Finkelstein", "Harel", "Amir", "Golan", "Haim",
                        "Amrani", "Dahan", "Ivri", "Carmel", "Lavie",
                        "Sasson", "Shamir", "Barak", "Magen", "Chen",
                        "Melamed", "Fisher", "Ben Ari", "Biton", "Geva",
                        "Rosen", "Kahana", "Amoyal", "Dror", "Schwartz",
                        "Fried", "Gavrieli", "Hadad", "Fridman", "Berger",
                        "Berkovich", "Wolfovitz", "Drori", "Shaked", "Malka",
                        "Sabag", "Reuveni", "Gur", "Zada", "Zamir",
                        "Zur", "Zinger", "Sadeh", "Sadot", "Sarfati",
                        "Sason", "Sternberg", "Tadmor", "Taranto", "Tennenbaum",
                        "Terzi", "Tzur", "Uzan", "Vaknin", "Vardi",
                        "Werner", "Yanai", "Yisraeli", "Zahavi", "Zarfati",
                        "Zilberman", "Zarchi", "Zehavi", "Zelner", "Zemach",
                        "Zer", "Zilka", "Zisapel", "Zisser", "Zilberberg"
                      ],
                }
            }
        }, 'native': {
            'sex': {
                'male': {
                    'first': ["אברהם", "משה", "דוד", "יהושוע", "נתנאל",
                    "גבריאל", "איתן", "אדם", "יצחק", "אהרון",
                    "יוסף", "יעקב", "ישראל", "איילן", "דניאל",
                    "יהודה", "ראובן", "שמעון", "לוי", "אשר",
                    "נפתלי", "יששכר", "זבולון", "גד", "אפרים",
                    "מנשה", "בנימין", "אריה", "אייל", "יואב",
                    "עוז", "יאיר", "איליה", "אליהו", "אלעזר",
                    "שלמה", "הראל", "גדעון", "ברוך", "אביהו",
                    "אלון", "ירמיהו", "ישמעאל", "הוד", "מתן",
                    "מנחם", "מנוחה", "מרדכי", "מורים", "מרקוס",
                    "משפט", "נדב", "נעם", "ניר", "נפתלי",
                    "נתן", "נריה", "סביון", "סלע", "ספיר",
                    "עדן", "עמית", "ערן", "אושר", "פלאי",
                    "פלאש", "פרס", "פרס", "פריד", "פרידמן",
                    "פרידמן", "צור", "צח", "ציון", "צפניה",
                    "צרפתי", "קובי", "קורן", "קורן", "קורנין",
                    "קושניר", "קינן", "קישון", "כנאל", "קיסר",
                    "קצב", "כץ", "קציר", "קוץ", "קוצר",
                    "קיש", "קריספי", "קרן", "קשת", "רון",
                    "ראובן", "רוזנבלום", "רועי", "רנן", "שאול",
                    "שאול", "שאול", "שבתאי", "שגב", "שי",
                    "שמעי", "שמואל", "שמחה", "שמעיה", "שניר"],
                    'second': ["כהן", "לוי", "פרץ", "בנימין", "דוד",
                    "גולדברג", "פרידמן", "מזרחי", "אורן", "כרמל",
                    "מור", "כץ", "וייס", "אדלר", "אייזנברג",
                    "שטרן", "אברהם", "אזולאי", "כרמי", "מלול",
                    "אמסלם", "גרוסמן", "חסון", "לוינסקי", "שלום",
                    "כרמלי", "ממן", "חזן", "כהן", "שפירא",
                    "פינקלשטיין", "הראל", "אמיר", "גולן", "חיים",
                    "עמרני", "דהאן", "עברי", "כרמל", "לביא",
                    "ששון", "שמיר", "ברק", "מגן", "חן",
                    "מלמד", "פישר", "בן ארי", "ביטון", "גבע",
                    "רוזן", "כהנא", "אמויאל", "דרור", "שוורץ",
                    "פריד", "גבריאלי", "חדד", "פרידמן", "ברגר",
                    "ברקוביץ'", "וולפוביץ", "דרורי", "שקד", "מלכה",
                    "סבג", "ראובני", "גור", "זאדה", "זמיר",
                    "צור", "זינגר", "שדה", "שדות", "צרפתי",
                    "שון", "שטרנברג", "תדמור", "טרנטו", "טננבאום",
                    "טרזי", "צור", "אוזן", "ועקנין", "ורדי",
                    "ורנר", "ינאי", "ישראלי", "זהבי", "צרפתי",
                    "זילברמן", "זרחי", "זהבי", "זלנר", "צמח",
                    "זר", "זילקה", "זיסאפל", "זיסר", "זילברברג"]
                },
                'female': {
                    'first': ["שרה", "רות", "רחל", "לאה", "מרים",
                    "אסתר", "רבקה", "חנה", "תמר", "דבורה",
                    "יהודית", "חיה", "זהבה", "יעל", "רבקה",
                    "בת שבע", "דינה", "אביגיל", "מיכל", "בתיה",
                    "נחמה", "אביגיל", "נועה", "אורלי", "שירה",
                    "מאיה", "איילת", "שושנה", "טליה", "יונית",
                    "ליאת", "ציפורה", "עדינה", "ליאורה", "שפרה",
                    "חוה", "שלומית", "יפעת", "אורית", "איריס",
                    "דורית", "אפרת", "יסקה", "יפה", "ציפורה",
                    "נאווה", "יונינה", "הודיה", "ליאור", "אורה",
                    "ענבל", "ליאת", "עדן", "נופר", "לילך",
                    "מעיין", "אסנת", "סיון", "רוני", "ליאורית",
                    "סיגל", "גלית", "יפעת", "בת-אל", "מיטל",
                    "רינה", "לירון", "אביטל", "אורנה", "עליזה",
                    "ריקי", "צורית", "הדסה", "נתניה", "הילה",
                    "נעמה", "שקד", "שרית", "שרון", "דפנה",
                    "עלמה", "ורד", "יסקה", "ירדנה", "יהל",
                    "זוהר", "זיוה", "שולי", "שלומית", "שפרה",
                    "תהילה", "צילה", "שמואלה", "שני", "סיגלית",
                    "זינה", "זהבה", "צורי", "זהבית", "צביקה",
                    "שמרית", "שירל"],
                    'second': ["כהן", "לוי", "פרץ", "בנימין", "דוד",
                    "גולדברג", "פרידמן", "מזרחי", "אורן", "כרמל",
                    "מור", "כץ", "וייס", "אדלר", "אייזנברג",
                    "שטרן", "אברהם", "אזולאי", "כרמי", "מלול",
                    "אמסלם", "גרוסמן", "חסון", "לוינסקי", "שלום",
                    "כרמלי", "ממן", "חזן", "כהן", "שפירא",
                    "פינקלשטיין", "הראל", "אמיר", "גולן", "חיים",
                    "עמרני", "דהאן", "עברי", "כרמל", "לביא",
                    "ששון", "שמיר", "ברק", "מגן", "חן",
                    "מלמד", "פישר", "בן ארי", "ביטון", "גבע",
                    "רוזן", "כהנא", "אמויאל", "דרור", "שוורץ",
                    "פריד", "גבריאלי", "חדד", "פרידמן", "ברגר",
                    "ברקוביץ'", "וולפוביץ", "דרורי", "שקד", "מלכה",
                    "סבג", "ראובני", "גור", "זאדה", "זמיר",
                    "צור", "זינגר", "שדה", "שדות", "צרפתי",
                    "שון", "שטרנברג", "תדמור", "טרנטו", "טננבאום",
                    "טרזי", "צור", "אוזן", "ועקנין", "ורדי",
                    "ורנר", "ינאי", "ישראלי", "זהבי", "צרפתי",
                    "זילברמן", "זרחי", "זהבי", "זלנר", "צמח",
                    "זר", "זילקה", "זיסאפל", "זיסר", "זילברברג"],
                }
            }
        }},
    'Iceland': { 
      'en': {
            'sex': {
                'male': {
                    'first': [
                        "Andri", "Bjorn", "Dagur", "Einar", "Finnur",
                        "Gunnar", "Haukur", "Ivar", "Jon", "Kari",
                        "Leifur", "Magnus", "Njall", "Olafur", "Petur",
                        "Ragnar", "Sigurdur", "Tomas", "Ulfur", "Vikingur",
                        "Thor", "Aegir", "Orn", "Birkir", "Dadi",
                        "Erlingur", "Freyr", "Geir", "Hoskuldur", "Ingi",
                        "Jokull", "Kolbeinn", "Larus", "Mani", "Natan",
                        "Omar", "Pall", "Rutur", "Sindri", "Toki",
                        "Ulfar", "Villi", "Thordur", "Aevar", "Orvar",
                        "Baltasar", "David", "Elvar", "Fannar", "Garpur",
                        "Hugi", "Isak", "Jonas", "Karl", "Leif",
                        "Moggi", "Niels", "Orri", "Pall", "Runar",
                        "Sigmundur", "Tinni", "Ulfar", "Vigfus", "Thorarinn",
                        "Aegir", "Orn", "Bjarki", "Dui", "Erlendur",
                        "Flosi", "Gisli", "Hjalti", "Ingi", "Jon",
                        "Kormakur", "Larus", "Mani", "Niels", "Olafur",
                        "Pall", "Rokkuro", "Steinunnar", "Teitur", "Ulflyotr",
                        "Vilhjalmur", "Thorbjorn", "Aevar", "Orn", "Birkir",
                        "Dadi", "Einar", "Finnbogi", "Gunnar", "Hordur",
                        "Ivar", "Johann", "Kari", "Leifur", "Mar"
                      ],
                    'second': [
                        "Andersson", "Bjornsson", "Dagsson", "Einarsson", "Finnsson",
                        "Gunnarsson", "Hauksson", "Ivarsson", "Jonsson", "Karisson",
                        "Leifsson", "Magnusson", "Njallsson", "Olafsson", "Petursson",
                        "Ragnarsson", "Sigurdsson", "Tomasson", "Ulfsson", "Vikingson",
                        "Thorsson", "Aegirsson", "Ornsson", "Birkirsson", "Dadisson",
                        "Erlingsson", "Freysson", "Geirsson", "Hoskuldursson", "Ingisson",
                        "Jokullsson", "Kolbeinsson", "Larsson", "Manisson", "Natansson",
                        "Omarsson", "Paulsson", "Rutursson", "Sindrison", "Tokisson",
                        "Ulfarsson", "Villisson", "Thordursson", "Aevarsson", "Orvarsson",
                        "Baltasarsson", "Davidsson", "Elvarsson", "Fannarsson", "Garpursson",
                        "Hugisson", "Isaksson", "Jonasson", "Karlsson", "Leifursson",
                        "Moggisson", "Nielsson", "Orrisson", "Paulsson", "Runarsson",
                        "Sigmundursson", "Tinnisson", "Ulfarsson", "Vigfusson", "Thorarinsson",
                        "Aegirsson", "Ornsson", "Bjarkisson", "Duisson", "Erlendursson",
                        "Flosisson", "Gislesson", "Hjaltisson", "Ingisson", "Jonsson",
                        "Kormakursson", "Larsson", "Mannisson", "Nielsson", "Orrisson",
                        "Paulsson", "Rokkursson", "Steinunsson", "Teitursson", "Ulflyotrsson",
                        "Vilhjalmursson", "Thorbjornsson", "Aevarsson", "Ornsson", "Birkisson",
                        "Dadisson", "Einarsson", "Finnbogisson", "Gunnarsson", "Hordursson",
                        "Ivarsson", "Johannsson", "Karlsson", "Leifursson", "Marsson"
                      ]
                },
                'female': {
                    'first': [
                        "Anna", "Berglind", "Dagny", "Edda", "Frida",
                        "Gudrun", "Halla", "Ingibjorg", "Johanna", "Katrin",
                        "Lilja", "Margret", "Nina", "Olafia", "Petra",
                        "Ragna", "Sigrun", "Thora", "Una", "Valdis",
                        "Ylfa", "Asa", "Birna", "Dora", "Elin",
                        "Fjola", "Gudridur", "Hekla", "Iris", "Jona",
                        "Kolbrun", "Lara", "Manuela", "Nanna", "Olof",
                        "Pallina", "Ragnheidur", "Sigga", "Tora", "Una",
                        "Vigdis", "Thorgerdur", "Agusta", "Osp", "Bjork",
                        "Dora", "Edda", "Freyja", "Gunnhildur", "Helena",
                        "Isabella", "Johanna", "Klara", "Linda", "Maria",
                        "Nora", "Olga", "Palla", "Ruth", "Sif",
                        "Thyri", "Vala", "Yrsa", "Astros", "Birta",
                        "Dagrun", "Eirny", "Fridrika", "Gudbjorg", "Hekla",
                        "Ingibjorg", "Jona", "Kolbrun", "Lara", "Malin",
                        "Nora", "Olga", "Petra", "Ragnheidur", "Solveig",
                        "Thordis", "Vala", "Yrsa", "Audur", "Bergthora",
                        "Dagny", "Edda", "Freja", "Gudlaug", "Hrafnhildur",
                        "Isabella", "Jona", "Kolbrun", "Lara", "Mara",
                        "Nora", "Olof", "Pora", "Ruth", "Sif",
                        "Thora", "Vala", "Yrsa"
                      ],
                    'second': [
                        "Andersson", "Bjornsson", "Dagsson", "Einarsson", "Finnsson",
                        "Gunnarsson", "Hauksson", "Ivarsson", "Jonsson", "Karisson",
                        "Leifsson", "Magnusson", "Njallsson", "Olafsson", "Petursson",
                        "Ragnarsson", "Sigurdsson", "Tomasson", "Ulfsson", "Vikingson",
                        "Thorsson", "Aegirsson", "Ornsson", "Birkirsson", "Dadisson",
                        "Erlingsson", "Freysson", "Geirsson", "Hoskuldursson", "Ingisson",
                        "Jokullsson", "Kolbeinsson", "Larsson", "Manisson", "Natansson",
                        "Omarsson", "Paulsson", "Rutursson", "Sindrison", "Tokisson",
                        "Ulfarsson", "Villisson", "Thordursson", "Aevarsson", "Orvarsson",
                        "Baltasarsson", "Davidsson", "Elvarsson", "Fannarsson", "Garpursson",
                        "Hugisson", "Isaksson", "Jonasson", "Karlsson", "Leifursson",
                        "Moggisson", "Nielsson", "Orrisson", "Paulsson", "Runarsson",
                        "Sigmundursson", "Tinnisson", "Ulfarsson", "Vigfusson", "Thorarinsson",
                        "Aegirsson", "Ornsson", "Bjarkisson", "Duisson", "Erlendursson",
                        "Flosisson", "Gislesson", "Hjaltisson", "Ingisson", "Jonsson",
                        "Kormakursson", "Larsson", "Mannisson", "Nielsson", "Orrisson",
                        "Paulsson", "Rokkursson", "Steinunsson", "Teitursson", "Ulflyotrsson",
                        "Vilhjalmursson", "Thorbjornsson", "Aevarsson", "Ornsson", "Birkisson",
                        "Dadisson", "Einarsson", "Finnbogisson", "Gunnarsson", "Hordursson",
                        "Ivarsson", "Johannsson", "Karlsson", "Leifursson", "Marsson"
                      ],
                }
            }
        }, 'native': {
            'sex': {
                'male': {
                    'first': [
                        "Andri", "Bjorn", "Dagur", "Einar", "Finnur",
                        "Gunnar", "Haukur", "Ívar", "Jón", "Kari",
                        "Leifur", "Magnus", "Njall", "Ólafur", "Pétur",
                        "Ragnar", "Sigurður", "Tómas", "Úlfur", "Vikingur",
                        "Þór", "Ægir", "Örn", "Birkir", "Dadi",
                        "Erlingur", "Freyr", "Geir", "Hoskuldur", "Ingi",
                        "Jökull", "Kolbeinn", "Larus", "Mani", "Natan",
                        "Ómar", "Pall", "Rutur", "Sindri", "Toki",
                        "Úlfar", "Villi", "Þórður", "Ævar", "Orvar",
                        "Baltasar", "David", "Elvar", "Fannar", "Garpur",
                        "Hugi", "Isak", "Jonas", "Karl", "Leif",
                        "Moggi", "Niels", "Orri", "Pall", "Runar",
                        "Sigmundur", "Tinni", "Úlfar", "Vigfus", "Þórarinn",
                        "Ægir", "Örn", "Bjarki", "Dui", "Erlendur",
                        "Flosi", "Gisli", "Hjalti", "Ingi", "Jón",
                        "Kormakur", "Larus", "Mani", "Niels", "Ólafur",
                        "Pall", "Rokkuro", "Steinunnar", "Teitur", "Ulflyotr",
                        "Vilhjálmur", "Þorbjörn", "Ævar", "Örn", "Birkir",
                        "Dadi", "Einar", "Finnbogi", "Gunnar", "Hörður",
                        "Ívar", "Johann", "Kari", "Leifur", "Mar"
                     ],
                    'second': [
                        "Andersson", "Bjornsson", "Dagsson", "Einarsson", "Finnsson",
                        "Gunnarsson", "Hauksson", "Ívarsson", "Jonsson", "Karisson",
                        "Leifsson", "Magnusson", "Njallsson", "Olafsson", "Petursson",
                        "Ragnarsson", "Sigurdsson", "Tomasson", "Ulfsson", "Vikingson",
                        "Þorsson", "Ægirsson", "Örnsson", "Birkirsson", "Dadisson",
                        "Erlingsson", "Freysson", "Geirsson", "Hoskuldursson", "Ingisson",
                        "Jökullsson", "Kolbeinsson", "Larsson", "Manisson", "Natansson",
                        "Ómarsson", "Paulsson", "Rutursson", "Sindrison", "Tokisson",
                        "Úlfarsson", "Villisson", "Þórðursson", "Aevarsson", "Orvarsson",
                        "Baltasarsson", "Davidsson", "Elvarsson", "Fannarsson", "Garpursson",
                        "Hugisson", "Isaksson", "Jonasson", "Karlsson", "Leifursson",
                        "Moggisson", "Nielsson", "Orrisson", "Paulsson", "Runarsson",
                        "Sigmundursson", "Tinnisson", "Úlfarsson", "Vigfússon", "Þórarinsson",
                        "Ægirsson", "Örnsson", "Bjarkisson", "Duisson", "Erlendursson",
                        "Flosisson", "Gislesson", "Hjaltisson", "Ingisson", "Jonsson",
                        "Kormakursson", "Larsson", "Mannisson", "Nielsson", "Orrisson",
                        "Paulsson", "Rokkursson", "Steinunsson", "Teitursson", "Ulflyotrsson",
                        "Vilhjálmursson", "Þorbjörnsson", "Ævarsson", "Örnsson", "Birkisson",
                        "Dadisson", "Einarsson", "Finnbogisson", "Gunnarsson", "Hörðursson",
                        "Ívarsson", "Johannsson", "Karlsson", "Leifursson", "Marsson"
                     ]
                },
                'female': {
                    'first': [
                        "Anna", "Berglind", "Dagný", "Edda", "Frida",
                        "Guðrun", "Halla", "Ingibjörg", "Johanna", "Katrin",
                        "Lilja", "Margret", "Nina", "Olafia", "Petra",
                        "Ragna", "Sigrun", "Þóra", "Una", "Valdís",
                        "Ylfa", "Ása", "Birna", "Dóra", "Elín",
                        "Fjóla", "Guðríður", "Hekla", "Íris", "Jona",
                        "Kolbrún", "Lara", "Manuela", "Nanna", "Olof",
                        "Pallina", "Ragnheidur", "Sigga", "Tora", "Una",
                        "Vigdís", "Þorgerður", "Ágústa", "Osp", "Björk",
                        "Dóra", "Edda", "Freyja", "Gunnhildur", "Helena",
                        "Isabella", "Johanna", "Klara", "Linda", "Maria",
                        "Nora", "Olga", "Palla", "Ruth", "Sif",
                        "Tyri", "Vala", "Yrsa", "Astros", "Birta",
                        "Dagrun", "Eirny", "Fridrika", "Guðbjörg", "Hekla",
                        "Ingibjörg", "Jona", "Kolbrún", "Lara", "Malin",
                        "Nora", "Olga", "Petra", "Ragnheidur", "Solveig",
                        "Þórdís", "Vala", "Yrsa", "Auður", "Bergþóra",
                        "Dagný", "Edda", "Freja", "Guðlaug", "Hrafnhildur",
                        "Isabella", "Jona", "Kolbrun", "Lara", "Mara",
                        "Nora", "Olof", "Póra", "Ruth", "Sif",
                        "Þóra", "Vala", "Yrsa"
                     ],
                    'second': [
                        "Andersson", "Bjornsson", "Dagsson", "Einarsson", "Finnsson",
                        "Gunnarsson", "Hauksson", "Ívarsson", "Jonsson", "Karisson",
                        "Leifsson", "Magnusson", "Njallsson", "Olafsson", "Petursson",
                        "Ragnarsson", "Sigurdsson", "Tomasson", "Ulfsson", "Vikingson",
                        "Þorsson", "Ægirsson", "Örnsson", "Birkirsson", "Dadisson",
                        "Erlingsson", "Freysson", "Geirsson", "Hoskuldursson", "Ingisson",
                        "Jökullsson", "Kolbeinsson", "Larsson", "Manisson", "Natansson",
                        "Ómarsson", "Paulsson", "Rutursson", "Sindrison", "Tokisson",
                        "Úlfarsson", "Villisson", "Þórðursson", "Aevarsson", "Orvarsson",
                        "Baltasarsson", "Davidsson", "Elvarsson", "Fannarsson", "Garpursson",
                        "Hugisson", "Isaksson", "Jonasson", "Karlsson", "Leifursson",
                        "Moggisson", "Nielsson", "Orrisson", "Paulsson", "Runarsson",
                        "Sigmundursson", "Tinnisson", "Úlfarsson", "Vigfússon", "Þórarinsson",
                        "Ægirsson", "Örnsson", "Bjarkisson", "Duisson", "Erlendursson",
                        "Flosisson", "Gislesson", "Hjaltisson", "Ingisson", "Jonsson",
                        "Kormakursson", "Larsson", "Mannisson", "Nielsson", "Orrisson",
                        "Paulsson", "Rokkursson", "Steinunsson", "Teitursson", "Ulflyotrsson",
                        "Vilhjálmursson", "Þorbjörnsson", "Ævarsson", "Örnsson", "Birkisson",
                        "Dadisson", "Einarsson", "Finnbogisson", "Gunnarsson", "Hörðursson",
                        "Ívarsson", "Johannsson", "Karlsson", "Leifursson", "Marsson"
                     ],
                }
            }
        }},
    'Kazakhstan': { 
      'en': {
            'sex': {
                'male': {
                    'first': [
                        "Abylai", "Adil", "Aidar", "Aidos", "Almas", "Altai", "Amir", "Anuar", "Arman", "Askar", "Aslan", "Aybek", "Azamat", 
                        "Bagdat", "Bakyt", "Batyr", "Berik", "Bolat", "Bulat", "Daulet", "Duman", "Eldar", "Erbol", "Erkin", "Erlan", "Ermek", 
                        "Galym", "Kairat", "Kaldy", "Kanat", "Kasym", "Kenes", "Kuanysh", "Madi", "Magzhan", "Maksat", "Marat", "Medet", "Meirzhan", 
                        "Nurdaulet", "Nurzhan", "Rinat", "Rustem", "Sagat", "Saken", "Sanzhar", "Serik", "Shyngys", "Talgat", "Tamerlan", "Temirlan", 
                        "Timur", "Ulan", "Yerzhan", "Yerlan", "Yernar", "Yersultan", "Zhandos", "Zhasulan", "Zhenis", "Zhomart", "Zhuman", "Zholdas", 
                        "Zhorabek", "Zhusup", "Ziyat", "Zulfiya", "Zumrat", "Zurgen", "Zyau"
                      ],
                    'second': [
                        'Nazarbayev', 'Tokayev', 'Abishev', 'Ismagulov', 'Kenzhebayev', 'Tulebayev', 'Akhmetov', 'Sarsekov', 'Kadyrov',
                        'Sultanov', 'Yessimbekov', 'Kulibaev', 'Zhakiyanov', 'Sagadiyev', 'Kulmanov', 'Orazov', 'Aitkhozhin', 'Tazhin',
                        'Zholdasov', 'Baimukhametov', 'Kozybayev', 'Aitzhanov', 'Sadvakasov', 'Abylaiuly', 'Zhumabayev', 'Sultanbekov',
                        'Baizakova', 'Tynybekova', 'Zhumanov', 'Yessimov', 'Mukhamedzhanov', 'Kobenov', 'Kuatbekov', 'Bakytzhanov', 'Zhumagulov',
                        'Sariev', 'Kusainov', 'Abylkassymov', 'Kenzhekhanov', 'Kuatov', 'Ryskaliyev', 'Aubakirov', 'Zhunusov', 'Kudaibergenov',
                        'Tazhibayev', 'Sultanmuratov', 'Ualiyev', 'Koshanov', 'Aitzhan', 'Shymkentov', 'Tursunov', 'Saidullayev', 'Orazbekov',
                        'Zhiyenbayev', 'Baikenov', 'Sariev', 'Zhumakhanov', 'Bazarbayev', 'Saparbayev', 'Mukhametzhanov', 'Tulegenov', 'Zhaksylykov',
                        'Nurtayev', 'Utepov', 'Kaldybayev', 'Issabekov', 'Togzhanov', 'Korganov', 'Baltabayev', 'Kozhabekov', 'Kenzhekhanov',
                        'Yelamanov', 'Tursynbayev', 'Arynova', 'Kalybekov', 'Zhumagaliyev', 'Zhaksylyk', 'Orazaly', 'Zhapparov', 'Issatayev',
                        'Akhmetzhanov', 'Sarsenbayev', 'Urazayev', 'Makhanov', 'Tulegenuly', 'Zhunusov', 'Alikhanov', 'Zhusupov', 'Kasymov',
                        'Doszhanov', 'Bekmuratov', 'Kulzhanov', 'Iskakov', 'Nurgaliyev', 'Zhumabayeva', 'Baizhanov', 'Akhmetuly', 'Zhumashev',
                        'Tleuzhanov', 'Abylkasym', 'Syzdykov'
                      ]
                },
                'female': {
                    'first': [
                        "Aigerim", "Aiman", "Aisha", "Akmaral", "Alima", "Altynai", "Anara", "Aruzhan", "Asel", "Asem", "Assel", "Ayaulym",
                        "Ayazhan", "Aygerim", "Azhar", "Bakytgul", "Bota", "Dana", "Dinara", "Eleonora", "Gaukhar", "Gulbanu", "Gulmira",
                        "Gulnaz", "Gulshat", "Karlygash", "Karolina", "Kulyash", "Madina", "Maira", "Manshuk", "Margaret", "Mariam", "Nazgul",
                        "Nazerke", "Perizat", "Raushan", "Rimma", "Saule", "Symbat", "Tamara", "Venera", "Xeniya", "Yelena", "Yerkezhan", "Yerlan",
                        "Yerzhan", "Yessenia", "Yulduz", "Zamira", "Zarina", "Zarly", "Zere", "Zhadyra", "Zhanara", "Zhana", "Zhannat", "Zhansaya",
                        "Zhibek", "Zhuman", "Zulfiya", "Zumrat", "Zynaida", "Zyra", "Zyrau", "Zyrgul", "Zyri", "Zyrtay", "Zyryab", "Zyryk",
                        "Zyrza", "Zysha", "Zyuzanna", "Zyyma", "Zyzyl", "Zyzyryk", "Zyzzy", "Zzoe"
                      ],
                    'second': [
                        'Nazarova', 'Tokayeva', 'Abisheva', 'Ismagulova', 'Kenzhebayeva', 'Tulebayeva', 'Akhmetova', 'Sarsekova', 'Kadyrova',
                        'Sultanova', 'Yessimbekova', 'Kulibaeva', 'Zhakiyanova', 'Sagadiyeva', 'Kulmanova', 'Orazova', 'Aitkhozhina',
                        'Tazhina', 'Zholdasova', 'Baimukhametova', 'Kozybayeva', 'Aitzhanova', 'Sadvakasova', 'Abylaiulova', 'Zhumabayeva',
                        'Sultanbekova', 'Baizakova', 'Tynybekova', 'Zhumanova', 'Yessimova', 'Mukhamedzhanova', 'Kobenova', 'Kuatbekova',
                        'Bakytzhanova', 'Zhumagulova', 'Sarieva', 'Kusainova', 'Abylkassymova', 'Kenzhekhanova', 'Kuatova', 'Ryskaliyeva',
                        'Aubakirova', 'Zhunusova', 'Kudaibergenova', 'Tazhibayeva', 'Sultanmuratova', 'Ualiyeva', 'Koshanova', 'Aitzhana',
                        'Shymkentova', 'Tursunova', 'Saidullayeva', 'Orazbekova', 'Zhiyenbayeva', 'Baikenova', 'Sarieva', 'Zhumakhanova',
                        'Bazarbayeva', 'Saparbayeva', 'Mukhametzhanova', 'Tulegenova', 'Zhaksylykova', 'Nurtayeva', 'Utepova', 'Kaldybayeva',
                        'Issabekova', 'Togzhanova', 'Korganova', 'Baltabayeva', 'Kozhabekova', 'Kenzhekhanova', 'Yelamanova', 'Tursynbayeva',
                        'Arynova', 'Kalybekova', 'Zhumagaliyeva', 'Zhaksylykova', 'Orazalyova', 'Zhapparova', 'Issatayeva', 'Akhmetzhanova',
                        'Sarsenbayeva', 'Urazayeva', 'Makhanova', 'Tulegenulova', 'Zhunusova', 'Alikhanova', 'Zhusupova', 'Kasymova',
                        'Doszhanova', 'Bekmuratova', 'Kulzhanova', 'Iskakova', 'Nurgaliyeva', 'Zhumabayeva', 'Baizhanova', 'Akhmetulova',
                        'Zhumasheva', 'Tleuzhanova', 'Abylkasymova', 'Syzdykova'
                      ],
                }
            }
        }, 'native': {
            'sex': {
                'male': {
                    'first': [
                        "Абылай", "Әділ", "Айдар", "Айдос", "Алмас", "Алтай", "Әмір", "Әнуар", "Арман", "Асқар", "Аслан", "Айбек", "Азамат",
                        "Бағдат", "Бақыт", "Батыр", "Берік", "Болат", "Болат", "Дәулет", "Думан", "Элдар", "Ербол", "Еркін", "Ерлан", "Ермек",
                        "Ғалым", "Қайрат", "Қалды", "Қанат", "Қасым", "Кеңес", "Қуаныш", "Мәди", "Мағжан", "Мақсат", "Марат", "Медет", "Мейіржан ",
                        "Нұрдәулет", "Нұржан", "Ринат", "Рүстем", "Сағат", "Сәкен", "Санжар", "Серік", "Шыңғыс", "Талғат", "Тамерлан", "Темірлан",
                        "Тимур", "Ұлан", "Ержан", "Ерлан", "Ернар", "Ерсұлтан", "Жандос", "Жасұлан", "Жеңіс", "Жомарт", "Жұман", "Жолдас",
                        "Жорабек", "Жүсіп", "Зият", "Зүлфия", "Зұмрат", "Зүрген", "Зяу"
                      ],
                    'second': [
                        "Назарбаев", "Тоқаев", "Әбішев", "Ысмағұлов", "Кенжебаев", "Төлебаев", "Ахметов", "Сәрсеков", "Қадыров",
                        "Сұлтанов", "Есімбеков", "Құлыбаев", "Жақиянов", "Сағадиев", "Құлманов", "Оразов", "Айтхожин", "Тәжин",
                        "Жолдасов", "Баймұхаметов", "Қозыбаев", "Айтжанов", "Сәдуақасов", "Абылайұлы", "Жұмабаев", "Сұлтанбеков",
                        "Байзақова", "Тыныбекова", "Жұманов", "Есімов", "Мұхамеджанов", "Көбенов", "Қуатбеков", "Бақытжанов", "Жұмағұлов",
                        "Сариев", "Құсайынов", "Әбілқасымов", "Кенжеханов", "Қуатов", "Рысқалиев", "Әубәкіров", "Жүнісов", "Құдайбергенов",
                        "Тәжібаев", "Сұлтанмұратов", "Уәлиев", "Қошанов", "Айтжан", "Шымкентов", "Тұрсынов", "Сайдуллаев", "Оразбеков",
                        "Жиенбаев", "Бәйкенов", "Сариев", "Жұмаханов", "Базарбаев", "Сапарбаев", "Мұхаметжанов", "Төлегенов", "Жақсылықов",
                        "Нұртаев", "Өтепов", "Қалдыбаев", "Исабеков", "Тоғжанов", "Қорғанов", "Балтабаев", "Қожабеков", "Кенжеханов",
                        "Еламанов", "Тұрсынбаев", "Арынова", "Қалыбеков", "Жұмағалиев", "Жақсылық", "Оразалы", "Жаппаров", "Исатаев",
                        "Ахметжанов", "Сәрсенбаев", "Уразаев", "Маханов", "Төлегенұлы", "Жүнісов", "Әлиханов", "Жүсіпов", "Қасымов",
                        "Досжанов", "Бекмұратов", "Құлжанов", "Ысқақов", "Нұрғалиев", "Жұмабаева", "Байжанов", "Ахметұлы", "Жұмашев",
                        'Тілеужанов', 'Әбілқасым', 'Сыздықов'
                      ]
                },
                'female': {
                    'first': [
                        "Әйгерім", "Айман", "Айша", "Ақмарал", "Әлима", "Алтынай", "Анара", "Аружан", "Әсел", "Әсем", "Әсел", "Аяулым",
                        "Аяжан", "Әйгерім", "Ажар", "Бақытгүл", "Бота", "Дана", "Динара", "Элеонора", "Гауһар", "Гүлбану", "Гүлмира",
                        "Гүлназ", "Гүлшат", "Қарлығаш", "Каролина", "Күләш", "Мадина", "Майра", "Мәншүк", "Маргарет", "Мариям", "Назгүл",
                        "Назерке", "Перизат", "Раушан", "Римма", "Сәуле", "Сымбат", "Тамара", "Венера", "Ксения", "Елена", "Еркежан", "Ерлан",
                        "Ержан", "Есения", "Юлдуз", "Замира", "Зарина", "Зарлы", "Зере", "Жадыра", "Жанара", "Жаңа", "Жаннат", "Жансая",
                        "Жібек", "Жұман", "Зүлфия", "Зұмрат", "Зынаида", "Зыра", "Зырау", "Зыргүл", "Зыры", "Зыртай", "Зыряб", "Зырық",
                        "Зырза", "Зыша", "Зюзанна", "Зыйма", "Зыл", "Зырық", "Зызы", "Ззое"
                      ],
                    'second': [
                        "Назарова", "Тоқаева", "Әбішева", "Исмағұлова", "Кенжебаева", "Төлебаева", "Ахметова", "Сарсекова", "Қадырова",
                        "Сұлтанова", "Есімбекова", "Құлыбаева", "Жақиянова", "Сағадиева", "Құлманова", "Оразова", "Айтхожина",
                        "Тәжина", "Жолдасова", "Баймұхаметова", "Қозыбаева", "Айтжанова", "Сәдуақасова", "Абылайулова", "Жұмабаева",
                        "Сұлтанбекова", "Байзақова", "Тыныбекова", "Жұманова", "Есімова", "Мұхамеджанова", "Көбенова", "Қуатбекова",
                        "Бақытжанова", "Жұмағұлова", "Сариева", "Құсайынова", "Әбілқасымова", "Кенжеханова", "Қуатова", "Рысқалиева",
                        "Әубәкірова", "Жүнісова", "Құдайбергенова", "Тәжібаева", "Сұлтанмұратова", "Уәлиева", "Қошанова", "Айтжана",
                        'Шымкентова', 'Турсынова', 'Сайдуллаева', 'Оразбекова', 'Жиенбаева', 'Байкенова', 'Сариева', 'Жұмаханова',
                        'Базарбаева', 'Сапарбаева', 'Мұхаметжанова', 'Төлегенова', 'Жақсылықова', 'Нұртаева', 'Өтепова', 'Қалдыбаева',
                        "Исабекова", "Тоғжанова", "Қорғанова", "Балтабаева", "Қожабекова", "Кенжеханова", "Еламанова", "Тұрсынбаева",
                        'Арынова', 'Қалыбекова', 'Жұмағалиева', 'Жақсылықова', 'Оразалева', 'Жаппарова', 'Исатаева', 'Ахметжанова',
                        'Сәрсенбаева', 'Уразаева', 'Маханова', 'Тулегенулова', 'Жүнісова', 'Әлиханова', 'Жүсіпова', 'Қасымова',
                        "Досжанова", "Бекмұратова", "Құлжанова", "Ысқақова", "Нұрғалиева", "Жұмабаева", "Байжанова", "Ахметулова",
                        'Жұмашева', 'Тілеужанова', 'Әбілқасымова', 'Сыздықова'
                      ],
                }
            }
        }},
    'Cyprus': { 'en': {
            'sex': {
                'male': {
                    'first': [
                        'Andreas', 'Constantinos', 'Dimitris', 'Eleftherios', 'Georgios', 'Haralambos', 'Iacovos', 'Kyriakos', 'Lazaros', 'Michalis',
                        'Nikos', 'Panayiotis', 'Stavros', 'Theodoros', 'Yiannis', 'Zacharias', 'Alexandros', 'Basilis', 'Christodoulos', 'Demetrios',
                        'Elias', 'Fanis', 'George', 'Hercules', 'Iasonas', 'Kyriakou', 'Leonidas', 'Marios', 'Nestor', 'Orestis', 'Petros', 'Rodis',
                        'Sokratis', 'Takis', 'Vasilis', 'Xenophon', 'Yiorgos', 'Zacharias', 'Achilleas', 'Bambos', 'Christoforos', 'Doros', 'Evagoras',
                        'Faidon', 'Gavriel', 'Hermes', 'Ioannis', 'Kimon', 'Loukas', 'Marianos', 'Nearchos', 'Omiros', 'Panos', 'Reinis', 'Sotiris',
                        'Tassos', 'Vassilis', 'Xanthos', 'Yiannakis', 'Zeno', 'Aris', 'Babis', 'Christos', 'Dinos', 'Evandros', 'Frixos', 'Gabriel',
                        'Harris', 'Iakovos', 'Kleanthis', 'Laertis', 'Minos', 'Nikandros', 'Orestes', 'Pavlos', 'Rafael', 'Stefanos', 'Thanos', 'Vangelis',
                        'Xenios', 'Yiannis', 'Zephyros', 'Achilles', 'Bartholomew', 'Christakis', 'Dimitris', 'Efstathios', 'Gabriel', 'Herakles', 'Ioannis',
                        'Kostas', 'Lefteris', 'Michalis', 'Nikos', 'Orestis', 'Petros', 'Raphael', 'Sotiris', 'Theo', 'Vasos', 'Xenon', 'Yiannis', 'Zeno'
                      ],
                    'second': [
                        'Andreas', 'Christou', 'Demetriou', 'Eleftheriou', 'Georgiou', 'Hadjiyiannis', 'Ioannou', 'Kyriakou', 'Lambrou', 'Michail',
                        'Nikolaou', 'Papanastasiou', 'Savva', 'Theodorou', 'Yiannakou', 'Zachariou', 'Alexandrou', 'Christofi', 'Dimitriou', 'Elias',
                        'Fotiou', 'Georgiades', 'Hadjiadamou', 'Iacovou', 'Kazamias', 'Lambrianou', 'Michaelides', 'Nikolaides', 'Papadopoulos', 'Savvides',
                        'Tsangari', 'Vassiliou', 'Xenophontos', 'Yiannaros', 'Zacharia', 'Achilleos', 'Bakirtzis', 'Christoforou', 'Demosthenous', 'Evangelou',
                        'Fyssas', 'Georgiou', 'Hadjiagapiou', 'Ioannides', 'Kallis', 'Lanitis', 'Markou', 'Nicodemou', 'Orphanides', 'Papamichael',
                        'Raptis', 'Socratous', 'Tavros', 'Vassiliadis', 'Xenopoulos', 'Yiannides', 'Zachariades', 'Aggelopoulos', 'Bardis', 'Christou',
                        'Dionysiou', 'Evriviades', 'Galatas', 'Hadjigeorgiou', 'Iordanou', 'Kapnisis', 'Lappas', 'Mavris', 'Nikolaidis', 'Oikonomou',
                        'Papanikolaou', 'Rigas', 'Sofokleous', 'Tsaggaris', 'Vassilopoulos', 'Xenou', 'Yiannopoulos', 'Zacharias', 'Achilleous', 'Bardas',
                        'Christodoulou', 'Droushiotis', 'Eftychiou', 'Gavriel', 'Hadjipanayiotou', 'Ioannou', 'Karaolis', 'Larkou', 'Mavrokordatos', 'Nikolaou',
                        'Onisiforou', 'Papantoniou', 'Rossides', 'Souglis', 'Tsiakkas', 'Vassos', 'Xenopoulos', 'Yiannouris', 'Zacharopoulos', 'Aggelis',
                        'Boutros', 'Christofides', 'Drosos', 'Eleftheriades', 'Gallos', 'Hadjitheodosiou', 'Ioannou', 'Karayiannis', 'Lavrentiou', 'Mavrommatis',
                        'Nikolopoulos', 'Papapetrou', 'Roushias', 'Sousis', 'Tsangaris', 'Vassiliadou', 'Xenos', 'Yiannou', 'Zachariou'
                      ]
                },
                'female': {
                    'first': [
                        'Andriana', 'Chloe', 'Dimitra', 'Elena', 'Georgia', 'Haroula', 'Irene', 'Kyriaki', 'Lara', 'Maria',
                        'Niki', 'Panayiota', 'Stavroula', 'Theodora', 'Yianna', 'Zoe', 'Alexandra', 'Bianca', 'Christiana', 'Despina',
                        'Eleni', 'Fay', 'Georgia', 'Helen', 'Isidora', 'Katerina', 'Lena', 'Maria', 'Natalia', 'Olga', 'Penelope',
                        'Sophia', 'Tasia', 'Vasiliki', 'Xenia', 'Yianna', 'Zahara', 'Aphrodite', 'Bella', 'Chara', 'Diana', 'Eva',
                        'Fotini', 'Georgia', 'Hara', 'Iliana', 'Kalliopi', 'Lina', 'Marina', 'Nafsika', 'Olympia', 'Pandora', 'Rea',
                        'Sophie', 'Thea', 'Vasiliki', 'Xenoula', 'Yolanda', 'Zara', 'Athena', 'Bianca', 'Chryssa', 'Dorothea', 'Elena',
                        'Fay', 'Giselle', 'Hermione', 'Isabella', 'Kalliope', 'Lia', 'Melina', 'Nadia', 'Olia', 'Penny', 'Rania',
                        'Stella', 'Theano', 'Vivi', 'Xenia', 'Yiota', 'Zoi', 'Anastasia', 'Bettina', 'Cleo', 'Dimitra', 'Eirene',
                        'Flora', 'Georgia', 'Helena', 'Iris', 'Kyriaki', 'Lydia', 'Melpo', 'Nina', 'Olympia', 'Persephone', 'Rhea',
                        'Sofia', 'Tara', 'Vasiliki', 'Xara', 'Yianna', 'Zafira'
                      ],
                    'second': [
                        'Andreas', 'Christou', 'Demetriou', 'Eleftheriou', 'Georgiou', 'Hadjiyiannis', 'Ioannou', 'Kyriakou', 'Lambrou', 'Michail',
                        'Nikolaou', 'Papanastasiou', 'Savva', 'Theodorou', 'Yiannakou', 'Zachariou', 'Alexandrou', 'Christofi', 'Dimitriou', 'Elias',
                        'Fotiou', 'Georgiades', 'Hadjiadamou', 'Iacovou', 'Kazamias', 'Lambrianou', 'Michaelides', 'Nikolaides', 'Papadopoulos', 'Savvides',
                        'Tsangari', 'Vassiliou', 'Xenophontos', 'Yiannaros', 'Zacharia', 'Achilleos', 'Bakirtzis', 'Christoforou', 'Demosthenous', 'Evangelou',
                        'Fyssas', 'Georgiou', 'Hadjiagapiou', 'Ioannides', 'Kallis', 'Lanitis', 'Markou', 'Nicodemou', 'Orphanides', 'Papamichael',
                        'Raptis', 'Socratous', 'Tavros', 'Vassiliadis', 'Xenopoulos', 'Yiannides', 'Zachariades', 'Aggelopoulos', 'Bardis', 'Christou',
                        'Dionysiou', 'Evriviades', 'Galatas', 'Hadjigeorgiou', 'Iordanou', 'Kapnisis', 'Lappas', 'Mavris', 'Nikolaidis', 'Oikonomou',
                        'Papanikolaou', 'Rigas', 'Sofokleous', 'Tsaggaris', 'Vassilopoulos', 'Xenou', 'Yiannopoulos', 'Zacharias', 'Achilleous', 'Bardas',
                        'Christodoulou', 'Droushiotis', 'Eftychiou', 'Gavriel', 'Hadjipanayiotou', 'Ioannou', 'Karaolis', 'Larkou', 'Mavrokordatos', 'Nikolaou',
                        'Onisiforou', 'Papantoniou', 'Rossides', 'Souglis', 'Tsiakkas', 'Vassos', 'Xenopoulos', 'Yiannouris', 'Zacharopoulos', 'Aggelis',
                        'Boutros', 'Christofides', 'Drosos', 'Eleftheriades', 'Gallos', 'Hadjitheodosiou', 'Ioannou', 'Karayiannis', 'Lavrentiou', 'Mavrommatis',
                        'Nikolopoulos', 'Papapetrou', 'Roushias', 'Sousis', 'Tsangaris', 'Vassiliadou', 'Xenos', 'Yiannou', 'Zachariou'
                      ],
                }
            }
        }, 'native': {
            'sex': {
                'male': {
                    'first': [
                        'Ανδρέας', 'Κωνσταντίνος', 'Δημήτρης', 'Ελευθέριος', 'Γεώργιος', 'Χαράλαμπος', 'Ιάκωβος', 'Κυριάκος', 'Λάζαρος', 'Μιχάλης',
                        'Νίκος', 'Παναγιώτης', 'Σταύρος', 'Θόδωρος', 'Γιάννης', 'Ζαχαρίας', 'Αλέξανδρος', 'Βασίλης', 'Χριστόδουλος', 'Δημήτριος',
                        'Ηλίας', 'Φάνης', 'Γιώργος', 'Ηρακλής', 'Ιάσωνας', 'Κυριακού', 'Λεωνίδας', 'Μάριος', 'Νέστωρ', 'Ορέστης', 'Πέτρος', 'Ρόδης',
                        'Σωκράτης', 'Τάκης', 'Βασίλης', 'Ξενοφών', 'Γιώργος', 'Ζαχαρίας', 'Αχιλλέας', 'Μπάμπος', 'Χριστοφόρος', 'Δώρος', 'Ευαγόρας',
                        "Φαίδων", "Γαβριήλ", "Ερμής", "Ιωάννης", "Κίμων", "Λουκάς", "Μαριανός", "Νέαρχος", "Όμηρος", "Πάνος", "Ρεΐνης", "Σωτήρης",
                        'Τάσος', 'Βασίλης', 'Ξανθός', 'Γιαννάκης', 'Ζήνων', 'Άρης', 'Μπάμπης', 'Χρήστος', 'Ντίνος', 'Εύανδρος', 'Φρίξος', 'Γαβριήλ',
                        'Χάρις', 'Ιάκωβος', 'Κλεάνθης', 'Λαέρτης', 'Μίνως', 'Νίκανδρος', 'Ορέστης', 'Παύλος', 'Ραφαήλ', 'Στέφανος', 'Θάνος', 'Βαγγέλης',
                        'Ξένιος', 'Γιάννης', 'Ζέφυρος', 'Αχιλλέας', 'Βαρθολομαίος', 'Χριστάκης', 'Δημήτρης', 'Ευστάθιος', 'Γαβριήλ', 'Ηρακλής', 'Ιωάννης',
                        'Κώστας', 'Λευτέρης', 'Μιχάλης', 'Νίκος', 'Ορέστης', 'Πέτρος', 'Ραφαήλ', 'Σωτήρη', 'Θεό', 'Βάσος', 'Ξένον', 'Γιάννη', 'Ζήνων'
                      ],
                    'second': [
                        "Ανδρέας", "Χρήστου", "Δημητρίου", "Ελευθερίου", "Γεωργίου", "Χατζηγιάννης", "Ιωάννου", "Κυριακού", "Λάμπρου", "Μιχαήλ",
                        'Νικολάου', 'Παπαναστασίου', 'Σάββα', 'Θεοδώρου', 'Γιαννάκου', 'Ζαχαρίου', 'Αλεξάνδρου', 'Χριστοφή', 'Δημητρίου', 'Ηλίας',
                        'Φωτίου', 'Γεωργιάδες', 'Χατζηαδάμου', 'Ιακώβου', 'Καζαμίας', 'Λαμπριανού', 'Μιχαηλίδη', 'Νικολαΐδες', 'Παπαδόπουλος', 'Σαββίδης',
                        'Τσαγγάρι', 'Βασιλείου', 'Ξενοφώντος', 'Γιάνναρος', 'Ζαχαρία', 'Αχιλλέως', 'Μπακιρτζής', 'Χριστοφόρου', 'Δημοσθένους', 'Ευαγγέλου',
                        'Φύσσας', 'Γεωργίου', 'Χατζηαγαπίου', 'Ιωαννίδης', 'Καλλής', 'Λανίτης', 'Μάρκου', 'Νικόδημου', 'Ορφανίδη', 'Παπαμιχαήλ',
                        "Ράπτης", "Σωκράτους", "Ταύρος", "Βασιλειάδης", "Ξενόπουλος", "Γιάννηδες", "Ζαχαριάδης", "Αγγελόπουλος", "Βαρδής", "Χρήστου",
                        'Διονυσίου', 'Ευριβιάδες', 'Γαλατάς', 'Χατζηγεωργίου', 'Ιορδάνου', 'Καπνίσης', 'Λάππας', 'Μαυρής', 'Νικολαΐδης', 'Οικονόμου',
                        'Παπανικολάου', 'Ρήγας', 'Σοφοκλέους', 'Τσαγκάρης', 'Βασιλόπουλος', 'Ξένου', 'Γιαννόπουλος', 'Ζαχαρίας', 'Αχιλλέους', 'Βάρδας',
                        'Χριστοδούλου', 'Δρουσιώτη', 'Ευτυχίου', 'Γαβριήλ', 'Χατζηπαναγιώτου', 'Ιωάννου', 'Καραόλης', 'Λάρκου', 'Μαυροκορδάτος', 'Νικολάου',
                        'Ονησιφόρου', 'Παπαντωνίου', 'Ρωσίδες', 'Σούγλης', 'Τσιάκκας', 'Βάσος', 'Ξενόπουλος', 'Γιαννούρης', 'Ζαχαρόπουλος', 'Αγγέλης',
                        "Μπουτρός", "Χριστοφίδης", "Δρόσος", "Ελευθεριάδης", "Γάλλος", "Χατζηθεοδοσίου", "Ιωάννου", "Καραγιάννης", "Λαυρεντίου", "Μαυρομμάτης",
                        'Νικολόπουλος', 'Παπαπέτρου', 'Ρούσιας', 'Σούσης', 'Τσαγγάρης', 'Βασιλειάδου', 'Ξένος', 'Γιάννου', 'Ζαχαρίου'
                      ]
                },
                'female': {
                    'first': [
                        'Ανδριάνα', 'Χλόη', 'Δήμητρα', 'Έλενα', 'Γεωργία', 'Χαρούλα', 'Ειρήνη', 'Κυριακή', 'Λάρα', 'Μαρία',
                        'Νίκη', 'Παναγιώτα', 'Σταυρούλα', 'Θεοδώρα', 'Γιάννα', 'Ζωή', 'Αλεξάνδρα', 'Μπιάνκα', 'Χριστιάνα', 'Δέσποινα',
                        "Ελένη", "Φαίη", "Γεωργία", "Ελένη", "Ισιδώρα", "Κατερίνα", "Λένα", "Μαρία", "Ναταλία", "Όλγα", "Πηνελόπη",
                        'Σοφία', 'Τασία', 'Βασιλική', 'Ξένια', 'Γιάννα', 'Ζαχάρα', 'Αφροδίτη', 'Μπέλλα', 'Χάρα', 'Νταιάνα', 'Εύα',
                        'Φωτεινή', 'Γεωργία', 'Χαρά', 'Ηλιάνα', 'Καλλιόπη', 'Λίνα', 'Μαρίνα', 'Ναυσικά', 'Ολυμπία', 'Πανδώρα', 'Ρέα',
                        'Σόφη', 'Θέα', 'Βασιλική', 'Ξενούλα', 'Γιολάντα', 'Ζάρα', 'Αθηνά', 'Μπιάνκα', 'Χρύσα', 'Δωροθέα', 'Έλενα',
                        'Φαίη', 'Ζιζέλ', 'Ερμιόνη', 'Ιζαμπέλα', 'Καλλιόπη', 'Λία', 'Μελίνα', 'Νάντια', 'Όλια', 'Πένυ', 'Ράνια',
                        'Στέλλα', 'Θεανώ', 'Βιβή', 'Ξένια', 'Γιώτα', 'Ζωή', 'Αναστασία', 'Μπετίνα', 'Κλεώ', 'Δήμητρα', 'Ειρήνη',
                        'Φλώρα', 'Γεωργία', 'Ελένα', 'Ίρις', 'Κυριακή', 'Λυδία', 'Μέλπω', 'Νίνα', 'Ολυμπία', 'Περσεφόνη', 'Ρέα',
                        'Σοφία', 'Τάρα', 'Βασιλική', 'Χάρα', 'Γιάννα', 'Ζαφείρα'
                      ],
                    'second': [
                        "Ανδρέας", "Χρήστου", "Δημητρίου", "Ελευθερίου", "Γεωργίου", "Χατζηγιάννης", "Ιωάννου", "Κυριακού", "Λάμπρου", "Μιχαήλ",
                        'Νικολάου', 'Παπαναστασίου', 'Σάββα', 'Θεοδώρου', 'Γιαννάκου', 'Ζαχαρίου', 'Αλεξάνδρου', 'Χριστοφή', 'Δημητρίου', 'Ηλίας',
                        'Φωτίου', 'Γεωργιάδες', 'Χατζηαδάμου', 'Ιακώβου', 'Καζαμίας', 'Λαμπριανού', 'Μιχαηλίδη', 'Νικολαΐδες', 'Παπαδόπουλος', 'Σαββίδης',
                        'Τσαγγάρι', 'Βασιλείου', 'Ξενοφώντος', 'Γιάνναρος', 'Ζαχαρία', 'Αχιλλέως', 'Μπακιρτζής', 'Χριστοφόρου', 'Δημοσθένους', 'Ευαγγέλου',
                        'Φύσσας', 'Γεωργίου', 'Χατζηαγαπίου', 'Ιωαννίδης', 'Καλλής', 'Λανίτης', 'Μάρκου', 'Νικόδημου', 'Ορφανίδη', 'Παπαμιχαήλ',
                        "Ράπτης", "Σωκράτους", "Ταύρος", "Βασιλειάδης", "Ξενόπουλος", "Γιάννηδες", "Ζαχαριάδης", "Αγγελόπουλος", "Βαρδής", "Χρήστου",
                        'Διονυσίου', 'Ευριβιάδες', 'Γαλατάς', 'Χατζηγεωργίου', 'Ιορδάνου', 'Καπνίσης', 'Λάππας', 'Μαυρής', 'Νικολαΐδης', 'Οικονόμου',
                        'Παπανικολάου', 'Ρήγας', 'Σοφοκλέους', 'Τσαγκάρης', 'Βασιλόπουλος', 'Ξένου', 'Γιαννόπουλος', 'Ζαχαρίας', 'Αχιλλέους', 'Βάρδας',
                        'Χριστοδούλου', 'Δρουσιώτη', 'Ευτυχίου', 'Γαβριήλ', 'Χατζηπαναγιώτου', 'Ιωάννου', 'Καραόλης', 'Λάρκου', 'Μαυροκορδάτος', 'Νικολάου',
                        'Ονησιφόρου', 'Παπαντωνίου', 'Ρωσίδες', 'Σούγλης', 'Τσιάκκας', 'Βάσος', 'Ξενόπουλος', 'Γιαννούρης', 'Ζαχαρόπουλος', 'Αγγέλης',
                        "Μπουτρός", "Χριστοφίδης", "Δρόσος", "Ελευθεριάδης", "Γάλλος", "Χατζηθεοδοσίου", "Ιωάννου", "Καραγιάννης", "Λαυρεντίου", "Μαυρομμάτης",
                        'Νικολόπουλος', 'Παπαπέτρου', 'Ρούσιας', 'Σούσης', 'Τσαγγάρης', 'Βασιλειάδου', 'Ξένος', 'Γιάννου', 'Ζαχαρίου'
                      ],
                }
            }
        }},
    'Latvia': { 'en': {
            'sex': {
                'male': {
                    'first': [
                        'Janis', 'Andris', 'Juris', 'Aivars', 'Dainis', 'Guntis', 'Kaspars', 'Edgars', 'Raimonds', 'Ainars',
                        'Eduards', 'Miks', 'Valters', 'Viesturs', 'Armands', 'Arturs', 'Martins', 'Vladimirs', 'Krisjanis',
                        'Aigars', 'Miks', 'Ilmars', 'Renars', 'Agris', 'Toms', 'Uldis', 'Janeks', 'Valdis', 'Maris', 'Gatis',
                        'Dzintars', 'Ainars', 'Zigmars', 'Egons', 'Krisjanis', 'Voldemars', 'Gints', 'Kazimirs', 'Edzus', 'Viktors',
                        'Emils', 'Klavs', 'Nikolajs', 'Martins', 'Miks', 'Juris', 'Edijs', 'Talis', 'Alvis', 'Rolands', 'Normunds',
                        'Edvards', 'Aldis', 'Egils', 'Vilnis', 'Ainars', 'Aivis', 'Oskars', 'Karlis', 'Atis', 'Krisjanis', 'Ugis',
                        'Lauris', 'Dzintars', 'Marian', 'Vairis', 'Imants', 'Aigars', 'Andris', 'Ivars', 'Einars', 'Jekabs', 'Gundars',
                        'Toms', 'Miks', 'Ojars', 'Alvis', 'Reinis', 'Janeks', 'Edgars', 'Aldis', 'Rihards', 'Eriks', 'Vilnis', 'Valdis',
                        'Miks', 'Aigars', 'Janis', 'Edzus', 'Aivars'
                      ],
                    'second': [
                        'Berzin', 'Oak', 'Linden', 'Kalniņš', 'Tylin', 'Raven', 'Pine', 'Lion', 'Apple', 'Kakis', 'King', 'Nut', 'Star ', 'Forest', 'Rooster', 'Aspen', 'Little', 'Horse', 'Swan',
                        'Rone', 'Wolf', 'Fox', 'Wolf', 'Bear', 'Oak', 'Yellow', 'Bird', 'Mole', 'Apple', 'Swan', 'Sunshine', 'Thrush', 'Northern', 'Flower', 'Cossack', 'Northern', 'Old', 'Lamb',
                        'Bay', 'Hedgehog', 'Aries', 'Swede', 'Sow', 'Owl', 'Perch', 'Salmon', 'Snake', 'Deer', 'Mushroom', 'Rider', 'Guest ', 'Golden', 'Wop', 'Sun', 'Young', 'Amber', 'Tree', 'Apple Tree',
                        'Brush', 'Guest', 'Train', 'Grieze', 'Pig', 'River', 'Russian', 'Ribbon', 'Cook', 'Seaside', 'Bear', 'Cry', 'Crowd', 'Old Tree', 'Lark', 'Moon', 'Wolf', 'Down', 'Nut',
                        'Cherry', 'Beard', 'Otter', 'Cook', 'Bottom', 'Blacksmith', 'Biscuit', 'Garlic', 'Clover', 'Fly', 'Russian', 'Lark', 'Mountain ', 'Krauklis'
                      ]
                },
                'female': {
                    'first': [
                        'Liga', 'Zane', 'Inese', 'Ilze', 'Dace', 'Santa', 'Linda', 'Liene', 'Aija', 'Guna', 'Kristine',
                        'Baiba', 'Agnese', 'Ieva', 'Sanita', 'Anita', 'Evita', 'Sandra', 'Karina', 'Viktorija', 'Lelde',
                        'Madara', 'Elina', 'Laila', 'Renata', 'Alise', 'Zanda', 'Daina', 'Laura', 'Anastasija', 'Simona',
                        'Dita', 'Martina', 'Zinta', 'Larisa', 'Krista', 'Diana', 'Ruta', 'Kristine', 'Liga', 'Vita', 'Vineta',
                        'Zieda', 'Liene', 'Linda', 'Amanda', 'Maija', 'Veronika', 'Alina', 'Sabine', 'Madara', 'Katrina', 'Elizabete',
                        'Vera', 'Vilma', 'Zinaida', 'Zanda', 'Anna', 'Jolanta', 'Elena', 'Dace', 'Liene', 'Gundega', 'Monika', 'Silvija',
                        'Agnija', 'Vaira', 'Laila', 'Inara', 'Regina', 'Vija', 'Guna', 'Zane', 'Iveta', 'Laima', 'Ligita', 'Baiba',
                        'Solvita', 'Ieva', 'Karina', 'Laila', 'Marta', 'Elza', 'Brigita', 'Inga', 'Valda', 'Alvita', 'Karolina', 'Linda', 'Zita'],
                    'second': [
                        'Berzin', 'Oak', 'Linden', 'Kalniņš', 'Tylin', 'Raven', 'Pine', 'Lion', 'Apple', 'Kakis', 'King', 'Nut', 'Star ', 'Forest', 'Rooster', 'Aspen', 'Little', 'Horse', 'Swan',
                        'Rone', 'Wolf', 'Fox', 'Wolf', 'Bear', 'Oak', 'Yellow', 'Bird', 'Mole', 'Apple', 'Swan', 'Sunshine', 'Thrush', 'Northern', 'Flower', 'Cossack', 'Northern', 'Old', 'Lamb',
                        'Bay', 'Hedgehog', 'Aries', 'Swede', 'Sow', 'Owl', 'Perch', 'Salmon', 'Snake', 'Deer', 'Mushroom', 'Rider', 'Guest ', 'Golden', 'Wop', 'Sun', 'Young', 'Amber', 'Tree', 'Apple Tree',
                        'Brush', 'Guest', 'Train', 'Grieze', 'Pig', 'River', 'Russian', 'Ribbon', 'Cook', 'Seaside', 'Bear', 'Cry', 'Crowd', 'Old Tree', 'Lark', 'Moon', 'Wolf', 'Down', 'Nut',
                        'Cherry', 'Beard', 'Otter', 'Cook', 'Bottom', 'Blacksmith', 'Biscuit', 'Garlic', 'Clover', 'Fly', 'Russian', 'Lark', 'Mountain ', 'Krauklis'
                      ],
                }
            }
        }, 'native': {
            'sex': {
                'male': {
                    'first': [
                        'Jānis', 'Andris', 'Juris', 'Aivars', 'Dainis', 'Guntis', 'Kaspars', 'Edgars', 'Raimonds', 'Ainārs',
                        'Eduards', 'Miks', 'Valters', 'Viesturs', 'Armands', 'Artūrs', 'Mārtiņš', 'Vladimirs', 'Krišjānis',
                        'Aigars', 'Miks', 'Ilmārs', 'Renārs', 'Agris', 'Toms', 'Uldis', 'Janeks', 'Valdis', 'Māris', 'Gatis',
                        'Dzintars', 'Ainārs', 'Zigmārs', 'Egons', 'Krišjānis', 'Voldemārs', 'Gints', 'Kazimirs', 'Edzus', 'Viktors',
                        'Emīls', 'Klāvs', 'Nikolajs', 'Mārtiņš', 'Miks', 'Juris', 'Edijs', 'Tālis', 'Alvis', 'Rolands', 'Normunds',
                        'Edvards', 'Aldis', 'Egils', 'Vilnis', 'Ainārs', 'Aivis', 'Oskars', 'Kārlis', 'Atis', 'Krišjānis', 'Uģis',
                        'Lauris', 'Dzintars', 'Marian', 'Vairis', 'Imants', 'Aigars', 'Andris', 'Ivars', 'Einārs', 'Jēkabs', 'Gundars',
                        'Toms', 'Miks', 'Ojārs', 'Alvis', 'Reinis', 'Janeks', 'Edgars', 'Aldis', 'Rihards', 'Ēriks', 'Vilnis', 'Valdis',
                        'Miks', 'Aigars', 'Jānis', 'Edzus', 'Aivars'
                      ],
                    'second': [
                        'Bērziņš', 'Ozols', 'Liepa', 'Kalniņš', 'Tylīns', 'Krauklis', 'Pride', 'Lauva', 'Ābols', 'Kaķis', 'Karalis', 'Rieksts', 'Zvaigzne', 'Mežs', 'Gailis', 'Apse', 'Maziņš', 'Zirgs', 'Gulbis',
                        'Rone', 'Vilks', 'Lapsa', 'Vilks', 'Lācis', 'Ozols', 'Dzeltenais', 'Putns', 'Kurmis', 'Ābols', 'Gulbis', 'Saulīte', 'Strazds', 'Ziemeļu', 'Zieds', 'Kazaks', 'Ziemeļu', 'Vecais', 'Jērs',
                        'Līcis', 'Ezītis', 'Auns', 'Zviedrs', 'Sēj', 'Pūce', 'Asaris', 'Lasis', 'čūska', 'Briedis', 'Sēne', 'Jātnieks', 'Viesis', 'Zelta', 'Wop', 'Saule', 'Jauns', 'Dzintars', 'Koks', 'Ābele',
                        "Ota", "Viesis", "Vilciens", "Grieze", "Cūka", "Upe", "Krievu valoda", "Lente", "Pavārs", "Piejūra", "Lācis", "raudāt", "pūlis", 'Vecs koks', 'Cīrulis', 'Mēness', 'Vilks', 'Uz leju', 'Rieksts',
                        'Ķirsis', 'Bārda', 'Ūdris', 'Pavārs', 'Apakšā', 'Kalējs', 'Cepums', 'Ķiploki', 'Āboliņš', 'Muša', 'Krievu', 'Cīrulis', 'Kalns', 'Krauklis'
                      ]
                },
                'female': {
                    'first': [
                        'Līga', 'Zāne', 'Inese', 'Ilze', 'Dace', 'Santa', 'Linda', 'Liene', 'Aija', 'Guna', 'Kristīne',
                        'Baiba', 'Agnese', 'Ieva', 'Sanita', 'Anita', 'Evita', 'Sandra', 'Karīna', 'Viktorija', 'Lelde',
                        'Madara', 'Elīna', 'Laila', 'Renāte', 'Alise', 'Zanda', 'Daina', 'Laura', 'Anastasija', 'Simona',
                        'Dita', 'Mārtiņa', 'Zinta', 'Larisa', 'Krista', 'Diāna', 'Rūta', 'Kristīne', 'Līga', 'Vita', 'Vineta',
                        'Zieda', 'Liene', 'Linda', 'Amanda', 'Maija', 'Veronika', 'Alīna', 'Sabīne', 'Madara', 'Katrīna', 'Elizabete',
                        'Vera', 'Vilma', 'Zinaīda', 'Zanda', 'Anna', 'Jolanta', 'Elēna', 'Dace', 'Liene', 'Gundega', 'Monika', 'Silvija',
                        'Agnija', 'Vaira', 'Laila', 'Ināra', 'Regīna', 'Vija', 'Guna', 'Zane', 'Iveta', 'Laima', 'Ligita', 'Baiba',
                        'Solvita', 'Ieva', 'Karīna', 'Laila', 'Marta', 'Elza', 'Brigita', 'Inga', 'Valda', 'Alvita', 'Karolīna', 'Linda', 'Zita'
                    ],
                    'second': [
                        'Bērziņš', 'Ozols', 'Liepa', 'Kalniņš', 'Tylīns', 'Krauklis', 'Pride', 'Lauva', 'Ābols', 'Kaķis', 'Karalis', 'Rieksts', 'Zvaigzne', 'Mežs', 'Gailis', 'Apse', 'Maziņš', 'Zirgs', 'Gulbis',
                        'Rone', 'Vilks', 'Lapsa', 'Vilks', 'Lācis', 'Ozols', 'Dzeltenais', 'Putns', 'Kurmis', 'Ābols', 'Gulbis', 'Saulīte', 'Strazds', 'Ziemeļu', 'Zieds', 'Kazaks', 'Ziemeļu', 'Vecais', 'Jērs',
                        'Līcis', 'Ezītis', 'Auns', 'Zviedrs', 'Sēj', 'Pūce', 'Asaris', 'Lasis', 'čūska', 'Briedis', 'Sēne', 'Jātnieks', 'Viesis', 'Zelta', 'Wop', 'Saule', 'Jauns', 'Dzintars', 'Koks', 'Ābele',
                        "Ota", "Viesis", "Vilciens", "Grieze", "Cūka", "Upe", "Krievu valoda", "Lente", "Pavārs", "Piejūra", "Lācis", "raudāt", "pūlis", 'Vecs koks', 'Cīrulis', 'Mēness', 'Vilks', 'Uz leju', 'Rieksts',
                        'Ķirsis', 'Bārda', 'Ūdris', 'Pavārs', 'Apakšā', 'Kalējs', 'Cepums', 'Ķiploki', 'Āboliņš', 'Muša', 'Krievu', 'Cīrulis', 'Kalns', 'Krauklis'
                      ],
                }
            }
        }},
    'Lithuania': { 
      'en': {
            'sex': {
                'male': {
                    'first': [
                        'Andrius', 'Tomas', 'Mantas', 'Gediminas', 'Vytautas', 'Domantas', 'Artūras', 'Matas', 'Jonas', 'Darius',
                        'Kazimieras', 'Lukas', 'Eduardas', 'Žygimantas', 'Antanas', 'Evaldas', 'Laurynas', 'Edvardas', 'Karolis', 'Mindaugas',
                        'Rokas', 'Aurimas', 'Edgaras', 'Vaidotas', 'Eimantas', 'Justas', 'Dovydas', 'Šarūnas', 'Arnoldas', 'Tautvydas',
                        'Ričardas', 'Gabrielius', 'Albertas', 'Gintaras', 'Algirdas', 'Linas', 'Rytis', 'Emilis', 'Jokūbas', 'Benas',
                        'Augustas', 'Rimvydas', 'Viktoras', 'Ignas', 'Henrikas', 'Nerijus', 'Dainius', 'Deividas', 'Vytas', 'Aidas',
                        'Kęstutis', 'Kasparas', 'Erikas', 'Saulius', 'Julius', 'Donatas', 'Robertas', 'Adomas', 'Jurgis', 'Almantas',
                        'Vladas', 'Gabija', 'Audrius', 'Paulius', 'Gintautas', 'Emilijus', 'Žilvinas', 'Simonas', 'Arūnas', 'Kipras',
                        'Arunas', 'Marius', 'Tadas', 'Kristupas', 'Egidijs', 'Remigijus', 'Aistis', 'Rolandas', 'Vilius', 'Nerijus',
                        'Aivaras', 'Zigmas', 'Jurgita', 'Aurelijus', 'Andželinas', 'Egidijus', 'Dainius', 'Eduardas', 'Mantas', 'Regimantas'
                      ],
                    'second': [
                        'Kazlauskas', 'Jankauskas', 'Petraitis', 'Paulauskas', 'Urbonas', 'Vasiliauskas', 'Lukauskas', 'Balčiūnas', 'Gediminas', 'Sakalauskas',
                        'Mikalauskas', 'Brazauskas', 'Klimas', 'Tamošiūnas', 'Rimkus', 'Zubrus', 'Stankevičius', 'Kulikauskas', 'Jonaitis', 'Mačiulis',
                        'Grigaitis', 'Kavaliauskas', 'Čepulis', 'Baužys', 'Sutkus', 'Butkus', 'Gudaitis', 'Valiulis', 'Černiauskas', 'Antanavičius',
                        'Karpavičius', 'Liaugaudas', 'Naujokas', 'Radvila', 'Petrulis', 'Česonis', 'Raudys', 'Šimkus', 'Pocius', 'Makauskas',
                        'Varnas', 'Tamulaitis', 'Gedvilas', 'Žukauskas', 'Kazėnas', 'Zukas', 'Svobonas', 'Navickas', 'Zaleskas', 'Budrys',
                        'Mažonas', 'Lingys', 'Jurgaitis', 'Vaicekauskas', 'Sarkauskas', 'Uleckas', 'Vaitkus', 'Vaičiulis', 'Švedas', 'Daukšys',
                        'Grikšas', 'Kairys', 'Ramanauskas', 'Morkūnas', 'Lengvinas', 'Jasinskis', 'Svirelis', 'Juška', 'Jakštas', 'Kondratas',
                        'Adomaitis', 'Daugėla', 'Dainys', 'Stonys', 'Laurinaitis', 'Vaičius', 'Binkis', 'Saulėnas', 'Grazulis', 'Astrauskas',
                        'Butkus', 'Narkevičius', 'Dūda', 'Vosylius', 'Žebrauskas', 'Krupavičius', 'Landsbergis', 'Mackevičius', 'Zalieckas', 'Astrauskas'
                      ]
                },
                'female': {
                    'first': [
                        'Gabija', 'Greta', 'Jurga', 'Rūpinta', 'Austėja', 'Viktorija', 'Monika', 'Indrė', 'Laura', 'Ieva',
                        'Rasa', 'Eglė', 'Jolanta', 'Ugnė', 'Simona', 'Elena', 'Inga', 'Giedrė', 'Lina', 'Kristina',
                        'Dovilė', 'Agnė', 'Rūpė', 'Vaida', 'Kotryna', 'Milda', 'Gintarė', 'Živilė', 'Aistė', 'Laima',
                        'Julija', 'Akvilė', 'Lauryna', 'Inesa', 'Rūpinta', 'Daiva', 'Karolina', 'Ema', 'Jūratė', 'Asta',
                        'Vilija', 'Dalia', 'Laimutė', 'Gražina', 'Renata', 'Diana', 'Audra', 'Brigita', 'Rūpinta', 'Emilija',
                        'Urtė', 'Vaida', 'Vitalija', 'Miglė', 'Ligita', 'Giedrė', 'Gabrielė', 'Zita', 'Ramunė', 'Rūpinta',
                        'Asta', 'Miglė', 'Sofija', 'Agata', 'Kamila', 'Lina', 'Rūpinta', 'Julija', 'Živilė', 'Ona',
                        'Indrė', 'Rasa', 'Inga', 'Greta', 'Giedrė', 'Lauryna', 'Lina', 'Evelina', 'Jolanta', 'Justė',
                        'Simona', 'Karolina', 'Rūpinta', 'Aistė', 'Ugnė', 'Emilija', 'Vaida', 'Laura', 'Gražina', 'Jūratė',
                        'Viktorija', 'Dovilė', 'Gabija', 'Monika', 'Rūpinta', 'Ausrinė', 'Gintarė', 'Agne', 'Inesa', 'Rūpinta'
                      ],
                    'second': [
                        'Kazlauskas', 'Jankauskas', 'Petraitis', 'Paulauskas', 'Urbonas', 'Vasiliauskas', 'Lukauskas', 'Balčiūnas', 'Gediminas', 'Sakalauskas',
                        'Mikalauskas', 'Brazauskas', 'Klimas', 'Tamošiūnas', 'Rimkus', 'Zubrus', 'Stankevičius', 'Kulikauskas', 'Jonaitis', 'Mačiulis',
                        'Grigaitis', 'Kavaliauskas', 'Čepulis', 'Baužys', 'Sutkus', 'Butkus', 'Gudaitis', 'Valiulis', 'Černiauskas', 'Antanavičius',
                        'Karpavičius', 'Liaugaudas', 'Naujokas', 'Radvila', 'Petrulis', 'Česonis', 'Raudys', 'Šimkus', 'Pocius', 'Makauskas',
                        'Varnas', 'Tamulaitis', 'Gedvilas', 'Žukauskas', 'Kazėnas', 'Zukas', 'Svobonas', 'Navickas', 'Zaleskas', 'Budrys',
                        'Mažonas', 'Lingys', 'Jurgaitis', 'Vaicekauskas', 'Sarkauskas', 'Uleckas', 'Vaitkus', 'Vaičiulis', 'Švedas', 'Daukšys',
                        'Grikšas', 'Kairys', 'Ramanauskas', 'Morkūnas', 'Lengvinas', 'Jasinskis', 'Svirelis', 'Juška', 'Jakštas', 'Kondratas',
                        'Adomaitis', 'Daugėla', 'Dainys', 'Stonys', 'Laurinaitis', 'Vaičius', 'Binkis', 'Saulėnas', 'Grazulis', 'Astrauskas',
                        'Butkus', 'Narkevičius', 'Dūda', 'Vosylius', 'Žebrauskas', 'Krupavičius', 'Landsbergis', 'Mackevičius', 'Zalieckas', 'Astrauskas'
                      ],
                }
            }
        }, 'native': {
            'sex': {
                'male': {
                    'first': [
                        'Andrius', 'Tomas', 'Mantas', 'Gediminas', 'Vytautas', 'Domantas', 'Artūras', 'Matas', 'Jonas', 'Darius',
                        'Kazimieras', 'Lukas', 'Eduardas', 'Žygimantas', 'Antanas', 'Evaldas', 'Laurynas', 'Edvardas', 'Karolis', 'Mindaugas',
                        'Rokas', 'Aurimas', 'Edgaras', 'Vaidotas', 'Eimantas', 'Justas', 'Dovydas', 'Šarūnas', 'Arnoldas', 'Tautvydas',
                        'Ričardas', 'Gabrielius', 'Albertas', 'Gintaras', 'Algirdas', 'Linas', 'Rytis', 'Emilis', 'Jokūbas', 'Benas',
                        'Augustas', 'Rimvydas', 'Viktoras', 'Ignas', 'Henrikas', 'Nerijus', 'Dainius', 'Deividas', 'Vytas', 'Aidas',
                        'Kęstutis', 'Kasparas', 'Erikas', 'Saulius', 'Julius', 'Donatas', 'Robertas', 'Adomas', 'Jurgis', 'Almantas',
                        'Vladas', 'Gabija', 'Audrius', 'Paulius', 'Gintautas', 'Emilijus', 'Žilvinas', 'Simonas', 'Arūnas', 'Kipras',
                        'Arunas', 'Marius', 'Tadas', 'Kristupas', 'Egidijs', 'Remigijus', 'Aistis', 'Rolandas', 'Vilius', 'Nerijus',
                        'Aivaras', 'Zigmas', 'Jurgita', 'Aurelijus', 'Andželinas', 'Egidijus', 'Dainius', 'Eduardas', 'Mantas', 'Regimantas'
                      ],
                    'second': [
                        'Kazlauskas', 'Jankauskas', 'Petraitis', 'Paulauskas', 'Urbonas', 'Vasiliauskas', 'Lukauskas', 'Balčiūnas', 'Gediminas', 'Sakalauskas',
                        'Mikalauskas', 'Brazauskas', 'Klimas', 'Tamošiūnas', 'Rimkus', 'Zubrus', 'Stankevičius', 'Kulikauskas', 'Jonaitis', 'Mačiulis',
                        'Grigaitis', 'Kavaliauskas', 'Čepulis', 'Baužys', 'Sutkus', 'Butkus', 'Gudaitis', 'Valiulis', 'Černiauskas', 'Antanavičius',
                        'Karpavičius', 'Liaugaudas', 'Naujokas', 'Radvila', 'Petrulis', 'Česonis', 'Raudys', 'Šimkus', 'Pocius', 'Makauskas',
                        'Varnas', 'Tamulaitis', 'Gedvilas', 'Žukauskas', 'Kazėnas', 'Zukas', 'Svobonas', 'Navickas', 'Zaleskas', 'Budrys',
                        'Mažonas', 'Lingys', 'Jurgaitis', 'Vaicekauskas', 'Sarkauskas', 'Uleckas', 'Vaitkus', 'Vaičiulis', 'Švedas', 'Daukšys',
                        'Grikšas', 'Kairys', 'Ramanauskas', 'Morkūnas', 'Lengvinas', 'Jasinskis', 'Svirelis', 'Juška', 'Jakštas', 'Kondratas',
                        'Adomaitis', 'Daugėla', 'Dainys', 'Stonys', 'Laurinaitis', 'Vaičius', 'Binkis', 'Saulėnas', 'Grazulis', 'Astrauskas',
                        'Butkus', 'Narkevičius', 'Dūda', 'Vosylius', 'Žebrauskas', 'Krupavičius', 'Landsbergis', 'Mackevičius', 'Zalieckas', 'Astrauskas'
                      ]
                },
                'female': {
                    'first': [
                        'Gabija', 'Greta', 'Jurga', 'Rūpinta', 'Austėja', 'Viktorija', 'Monika', 'Indrė', 'Laura', 'Ieva',
                        'Rasa', 'Eglė', 'Jolanta', 'Ugnė', 'Simona', 'Elena', 'Inga', 'Giedrė', 'Lina', 'Kristina',
                        'Dovilė', 'Agnė', 'Rūpė', 'Vaida', 'Kotryna', 'Milda', 'Gintarė', 'Živilė', 'Aistė', 'Laima',
                        'Julija', 'Akvilė', 'Lauryna', 'Inesa', 'Rūpinta', 'Daiva', 'Karolina', 'Ema', 'Jūratė', 'Asta',
                        'Vilija', 'Dalia', 'Laimutė', 'Gražina', 'Renata', 'Diana', 'Audra', 'Brigita', 'Rūpinta', 'Emilija',
                        'Urtė', 'Vaida', 'Vitalija', 'Miglė', 'Ligita', 'Giedrė', 'Gabrielė', 'Zita', 'Ramunė', 'Rūpinta',
                        'Asta', 'Miglė', 'Sofija', 'Agata', 'Kamila', 'Lina', 'Rūpinta', 'Julija', 'Živilė', 'Ona',
                        'Indrė', 'Rasa', 'Inga', 'Greta', 'Giedrė', 'Lauryna', 'Lina', 'Evelina', 'Jolanta', 'Justė',
                        'Simona', 'Karolina', 'Rūpinta', 'Aistė', 'Ugnė', 'Emilija', 'Vaida', 'Laura', 'Gražina', 'Jūratė',
                        'Viktorija', 'Dovilė', 'Gabija', 'Monika', 'Rūpinta', 'Ausrinė', 'Gintarė', 'Agne', 'Inesa', 'Rūpinta'
                      ],
                    'second': [
                        'Kazlauskas', 'Jankauskas', 'Petraitis', 'Paulauskas', 'Urbonas', 'Vasiliauskas', 'Lukauskas', 'Balčiūnas', 'Gediminas', 'Sakalauskas',
                        'Mikalauskas', 'Brazauskas', 'Klimas', 'Tamošiūnas', 'Rimkus', 'Zubrus', 'Stankevičius', 'Kulikauskas', 'Jonaitis', 'Mačiulis',
                        'Grigaitis', 'Kavaliauskas', 'Čepulis', 'Baužys', 'Sutkus', 'Butkus', 'Gudaitis', 'Valiulis', 'Černiauskas', 'Antanavičius',
                        'Karpavičius', 'Liaugaudas', 'Naujokas', 'Radvila', 'Petrulis', 'Česonis', 'Raudys', 'Šimkus', 'Pocius', 'Makauskas',
                        'Varnas', 'Tamulaitis', 'Gedvilas', 'Žukauskas', 'Kazėnas', 'Zukas', 'Svobonas', 'Navickas', 'Zaleskas', 'Budrys',
                        'Mažonas', 'Lingys', 'Jurgaitis', 'Vaicekauskas', 'Sarkauskas', 'Uleckas', 'Vaitkus', 'Vaičiulis', 'Švedas', 'Daukšys',
                        'Grikšas', 'Kairys', 'Ramanauskas', 'Morkūnas', 'Lengvinas', 'Jasinskis', 'Svirelis', 'Juška', 'Jakštas', 'Kondratas',
                        'Adomaitis', 'Daugėla', 'Dainys', 'Stonys', 'Laurinaitis', 'Vaičius', 'Binkis', 'Saulėnas', 'Grazulis', 'Astrauskas',
                        'Butkus', 'Narkevičius', 'Dūda', 'Vosylius', 'Žebrauskas', 'Krupavičius', 'Landsbergis', 'Mackevičius', 'Zalieckas', 'Astrauskas'
                      ],
                }
            }
        }},
    'Morocco': { 
      'en': {
            'sex': {
                'male': {
                    'first': [
                        'Mohammed', 'Ahmed', 'Omar', 'Ali', 'Youssef', 'Khalid', 'Ismail', 'Rachid', 'Abdellah', 'Mustapha',
                        'Said', 'Hassan', 'Hamza', 'Adil', 'Nabil', 'Abdelilah', 'Anas', 'Zakaria', 'Nadir', 'Yassin',
                        'Mehdi', 'Karim', 'Ayoub', 'Reda', 'Amine', 'Brahim', 'Tarik', 'Othman', 'Jawad', 'Hicham',
                        'Abdelkader', 'Ayyoub', 'Mohcine', 'Bilal', 'Wissam', 'Aziz', 'Fayçal', 'Othmane', 'Kamal', 'Younes',
                        'Abderrahmane', 'Youness', 'Mounir', 'Walid', 'Sofiane', 'Mohsin', 'Mehamed', 'Chakib', 'Imad', 'Hichame',
                        'Houssam', 'Anouar', 'Saad', 'Khalil', 'Abdou', 'Tarek', 'Amir', 'Nour', 'Mouad', 'Hakim',
                        'Abderrahim', 'Fouad', 'Yassine', 'Rida', 'Oualid', 'Badr', 'Najib', 'Mohcine', 'Ilyas', 'Taha',
                        'Marouane', 'Achraf', 'Mohsen', 'Mohamed Amine', 'Ilias', 'Zouhair', 'Omar', 'Mohamed Ali', 'Majid', 'Mounir',
                        'Mohamed Amine', 'Hassane', 'Yahya', 'Abdelwahed', 'Adnane', 'Abdellatif', 'Abdelkrim', 'Houcine', 'Achraf', 'Ayman',
                        'Youness', 'Rachid', 'Houssine', 'Zakaria', 'Bilal', 'Nassim', 'Nizar', 'Ahmed', 'Wassim', 'Khalid'
                      ],
                    'second': [
                        'Alami', 'Bouazza', 'Chraibi', 'El Amrani', 'Fassi', 'Gharib', 'Hilali', 'Idrissi', 'Jilali', 'Kabbaj',
                        'Lahlou', 'Mokhtar', 'Najjar', 'Ouahbi', 'Rafiq', 'Sahraoui', 'Tazi', 'Ziani', 'Benali', 'Chaoui',
                        'Dahbi', 'El Fahri', 'Fouad', 'Ghazi', 'Hassani', 'Ismaili', 'Joudi', 'Kamal', 'Lakhdar', 'Mansouri',
                        'Naimi', 'Ouazzani', 'Rahmani', 'Seddiki', 'Taibi', 'Zerouali', 'Bahja', 'Chami', 'Doukkali', 'El Haouari',
                        'Fassi', 'Ghazali', 'Hakimi', 'Issaoui', 'Jahjouh', 'Kasmi', 'Lahjouji', 'Mernissi', 'Naciri', 'Ouadoudi',
                        'Rochdi', 'Sbihi', 'Tazi', 'Zakari', 'Benjelloun', 'Dakir', 'El Haddad', 'Fatihi', 'Ghiyati', 'Houssni',
                        'Ibrir', 'Jaidi', 'Kabbaj', 'Lamrani', 'Mestari', 'Naji', 'Ouarghidi', 'Raji', 'Sekkat', 'Tabit',
                        'Zemmouri', 'Bensaid', 'Dekkak', 'El Hani', 'Fattahi', 'Ghoulam', 'Ibourk', 'Jamaï', 'Kabli', 'Lazrak',
                        'Mokhtari', 'Nakhi', 'Ouarab', 'Rami', 'Selmouni', 'Tadlaoui', 'Zemmouri', 'Benyahia', 'Dlimi', 'Ezzerhouni'
                      ]
                },
                'female': {
                    'first': [
                        'Fatima', 'Zainab', 'Amina', 'Khadija', 'Hafsa', 'Nour', 'Meryem', 'Sara', 'Loubna', 'Hayat',
                        'Siham', 'Asmaa', 'Najat', 'Samira', 'Ibtissam', 'Latifa', 'Raja', 'Naima', 'Imane', 'Soukaina',
                        'Houda', 'Hajar', 'Hanae', 'Wafa', 'Saida', 'Rim', 'Fadwa', 'Zahra', 'Malika', 'Nadia',
                        'Nawal', 'Rachida', 'Asmae', 'Aicha', 'Yasmina', 'Kaoutar', 'Sofia', 'Karima', 'Safia', 'Nisrine',
                        'Ghizlane', 'Bouchra', 'Salma', 'Amal', 'Khawla', 'Saida', 'Laila', 'Sabah', 'Houria', 'Naima',
                        'Rkia', 'Zineb', 'Mina', 'Noura', 'Meriem', 'Khadija', 'Jihane', 'Nadia', 'Samia', 'Fatiha',
                        'Rita', 'Wiam', 'Hanane', 'Fatiha', 'Mina', 'Noura', 'Samira', 'Yasmine', 'Nadia', 'Lina',
                        'Imane', 'Chaimae', 'Wissam', 'Hanane', 'Wafa', 'Hanae', 'Siham', 'Laila', 'Fatima', 'Amina',
                        'Zahra', 'Sara', 'Nour', 'Nawal', 'Aicha', 'Latifa', 'Sofia', 'Rita', 'Loubna', 'Imane',
                        'Houda', 'Hayat', 'Nisrine', 'Fadwa', 'Kaoutar', 'Salma', 'Yasmina', 'Meryem', 'Samia', 'Saida'
                      ],
                    'second': [
                        'Alami', 'Bouazza', 'Chraibi', 'El Amrani', 'Fassi', 'Gharib', 'Hilali', 'Idrissi', 'Jilali', 'Kabbaj',
                        'Lahlou', 'Mokhtar', 'Najjar', 'Ouahbi', 'Rafiq', 'Sahraoui', 'Tazi', 'Ziani', 'Benali', 'Chaoui',
                        'Dahbi', 'El Fahri', 'Fouad', 'Ghazi', 'Hassani', 'Ismaili', 'Joudi', 'Kamal', 'Lakhdar', 'Mansouri',
                        'Naimi', 'Ouazzani', 'Rahmani', 'Seddiki', 'Taibi', 'Zerouali', 'Bahja', 'Chami', 'Doukkali', 'El Haouari',
                        'Fassi', 'Ghazali', 'Hakimi', 'Issaoui', 'Jahjouh', 'Kasmi', 'Lahjouji', 'Mernissi', 'Naciri', 'Ouadoudi',
                        'Rochdi', 'Sbihi', 'Tazi', 'Zakari', 'Benjelloun', 'Dakir', 'El Haddad', 'Fatihi', 'Ghiyati', 'Houssni',
                        'Ibrir', 'Jaidi', 'Kabbaj', 'Lamrani', 'Mestari', 'Naji', 'Ouarghidi', 'Raji', 'Sekkat', 'Tabit',
                        'Zemmouri', 'Bensaid', 'Dekkak', 'El Hani', 'Fattahi', 'Ghoulam', 'Ibourk', 'Jamaï', 'Kabli', 'Lazrak',
                        'Mokhtari', 'Nakhi', 'Ouarab', 'Rami', 'Selmouni', 'Tadlaoui', 'Zemmouri', 'Benyahia', 'Dlimi', 'Ezzerhouni'
                      ],
                }
            }
        }, 'native': {
            'sex': {
                'male': {
                    'first': [
                      "محمد", "أحمد", "عبد الرحمان", "عبد الله", "يوسف", "علي", "عبد العزيز", "مصطفى", "رضوان", "إسماعيل",
                      "أيوب", "عمر", "خالد", "حسن", "حسين", "حمزة", "عبد الوهاب", "مراد", "بلال", "زكرياء",
                      "سفيان", "عبد القادر", "عبد الحفيظ", "نور الدين", "مالك", "إياد", "مهدي", "نصر", "أشرف", "أمين",
                      "عبد السلام", "عبد الكريم", "أنس", "سعيد", "إسلام", "سليمان", "معاذ", "محسن", "محمود", "ياسين",
                      "طارق", "محمد أمين", "وليد", "هشام", "سمير", "نبيل", "رشيد", "أحمد عبد الله", "أسامة", "فؤاد"
                  ],
                    'second': ['العلمي', 'بوعزة', 'الشرايبي', 'العمراني', 'فاسي', 'الغريب', 'هلالي', 'إدريسي', 'جلالي', 'القباج',
                      'اللحلو', 'مختار', 'النجار', 'الوحبي', 'رفيق', 'الصحراوي', 'تازي', 'زياني', 'بن علي', 'الشاوي',
                      'الدهبي', 'الفحري', 'فؤاد', 'غازي', 'الحسني', 'الإسماعيلي', 'جودي', 'كمال', 'الأخضر', 'منصوري',
                      'النعيمي', 'الوزاني', 'الرحماني', 'السديكي', 'الطيبي', 'زروالي', 'بهجة', 'شامي', 'الدكالي', 'الهواري',
                      'فاسي', 'الغزالي', 'حكيمي', 'العيساوي', 'جحجوح', 'كاسمي', 'الحجوجي', 'المرنيسي', 'الناصري', 'الوعدودي',
                      'الرشدي', 'السبيحي', 'تازي', 'زكري', 'بن جلون', 'الداكر', 'الحداد', 'الفتيحي', 'الغياتي', 'الحسني',
                      'إبرير', 'جايدي', 'القباج', 'المراني', 'المستاري', 'الناجي', 'الورغيدي', 'راجي', 'السكات', 'الطبيت',
                      'الزموري', 'بن سعيد', 'الدكاك', 'الهاني', 'فتاحي', 'الغلاوم', 'إبورك', 'الجماعي', 'كابلي', 'الزرق',
                      'المختاري', 'النخي', 'الواراب', 'رامي', 'سلموني', 'تادلاوي', 'الزموري', 'بن يحيى', 'الدليمي', 'الزرهوني']
                },
                'female': {
                    'first': [
                      "فاطمة", "خديجة", "زينب", "سعاد", "مريم", "سمية", "لطيفة", "نعيمة", "سلمى", "رجاء",
                      "سارة", "عائشة", "نور", "حنان", "أمينة", "ليلى", "نجاة", "لمى", "سلمى", "حبيبة",
                      "مريم", "سكينة", "لطيفة", "إبتسام", "هالة", "فدوى", "لينا", "زهراء", "دنيا", "أسماء",
                      "حسناء", "رقية", "فاطمة", "رحمة", "سناء", "فدوى", "عبير", "عائشة", "هدى", "سلوى",
                      "أمال", "جميلة", "نور", "صفاء", "أميرة", "بتول", "رباب", "نوال", "ناهد", "مرام"
                  ],
                    'second': ['العلمي', 'بوعزة', 'الشرايبي', 'العمراني', 'فاسي', 'الغريب', 'هلالي', 'إدريسي', 'جلالي', 'القباج',
                      'اللحلو', 'مختار', 'النجار', 'الوحبي', 'رفيق', 'الصحراوي', 'تازي', 'زياني', 'بن علي', 'الشاوي',
                      'الدهبي', 'الفحري', 'فؤاد', 'غازي', 'الحسني', 'الإسماعيلي', 'جودي', 'كمال', 'الأخضر', 'منصوري',
                      'النعيمي', 'الوزاني', 'الرحماني', 'السديكي', 'الطيبي', 'زروالي', 'بهجة', 'شامي', 'الدكالي', 'الهواري',
                      'فاسي', 'الغزالي', 'حكيمي', 'العيساوي', 'جحجوح', 'كاسمي', 'الحجوجي', 'المرنيسي', 'الناصري', 'الوعدودي',
                      'الرشدي', 'السبيحي', 'تازي', 'زكري', 'بن جلون', 'الداكر', 'الحداد', 'الفتيحي', 'الغياتي', 'الحسني',
                      'إبرير', 'جايدي', 'القباج', 'المراني', 'المستاري', 'الناجي', 'الورغيدي', 'راجي', 'السكات', 'الطبيت',
                      'الزموري', 'بن سعيد', 'الدكاك', 'الهاني', 'فتاحي', 'الغلاوم', 'إبورك', 'الجماعي', 'كابلي', 'الزرق',
                      'المختاري', 'النخي', 'الواراب', 'رامي', 'سلموني', 'تادلاوي', 'الزموري', 'بن يحيى', 'الدليمي', 'الزرهوني'],
                }
            }
        }},
    'Moldova': { 
      'en': {
            'sex': {
                'male': {
                    'first': [
                        'Andrei', 'Vladimir', 'Ion', 'Alexandru', 'Dumitru', 'Sergiu', 'Nicolae', 'Mihai', 'Vasile', 'Valeriu',
                        'Igor', 'Victor', 'Gheorghe', 'Oleg', 'Marian', 'Cristian', 'Iurie', 'Radu', 'Denis', 'Ilie',
                        'Petru', 'Constantin', 'Gabriel', 'Stefan', 'Anatol', 'Grigore', 'Valentin', 'Marin', 'Ivan', 'Eduard',
                        'Vitalie', 'Viorel', 'Artur', 'Aurel', 'Dorin', 'Veaceslav', 'Dmitrii', 'Vlad', 'Oxana', 'Sorin',
                        'Leonid', 'Adrian', 'Ivan', 'Ciprian', 'Iulian', 'Bogdan', 'Adrian', 'Eugen', 'Octavian', 'Gavril',
                        'Saveli', 'Silvian', 'Silviu', 'Boris', 'Sebastian', 'Maxim', 'Teodor', 'Adrian', 'Nikolai', 'Ilie',
                        'Dionisie', 'Cezar', 'Ionel', 'Vadim', 'Emanuil', 'Orest', 'Alexei', 'Dorin', 'Iosif', 'Ovidiu',
                        'Paul', 'Ghennadi', 'Florin', 'Arcadie', 'Zaharia', 'Dorian', 'Vladislav', 'Victor', 'Iurii', 'Emil',
                        'Eduard', 'Ilia', 'Anton', 'Claudiu', 'Dorin', 'Iurie', 'Mihail', 'Octavian', 'Vlad', 'Alexandru',
                        'Serghei', 'Miron', 'Aurelian', 'Valerian', 'Iuliu', 'Gheorghii', 'Ilie', 'Vasile', 'Vladimir', 'Dmitrii'
                      ],
                    'second': [
                        'Ivanov', 'Popescu', 'Dumitru', 'Gheorghiu', 'Andrei', 'Niculescu', 'Vasile', 'Cozma', 'Pavel', 'Cebotari',
                        'Sorin', 'Stoica', 'Sandu', 'Stanciu', 'Balan', 'Sava', 'Ciobanu', 'Roman', 'Burlacu', 'Ionescu',
                        'Toma', 'Bogdan', 'Frunza', 'Grosu', 'Rusu', 'Diaconu', 'Marin', 'Dima', 'Stefan', 'Dumitrache',
                        'Rosu', 'Mocanu', 'Dinu', 'Cristea', 'Lupu', 'Spataru', 'Iordache', 'Dobre', 'Filip', 'Lungu',
                        'Bucur', 'Serban', 'Munteanu', 'Bratu', 'Constantin', 'Dragomir', 'Dragan', 'Radulescu', 'Gavrila', 'Petrica',
                        'Gheorghe', 'Barbu', 'Cornea', 'Ungureanu', 'Moldovan', 'Cristian', 'Ghita', 'Seremet', 'Apostol', 'Paduraru',
                        'Farcas', 'Iacob', 'Olaru', 'Vlad', 'Gheorghiță', 'Filimon', 'Neagu', 'Stefanescu', 'Cretu', 'Anton',
                        'Cojocaru', 'Tudor', 'Radoi', 'Ilie', 'Chirita', 'Romanu', 'Vicol', 'Tudose', 'Panaite', 'Cristofor',
                        'Budeanu', 'Marin', 'Balan', 'Vasiliu', 'Marinescu', 'Nica', 'Florea', 'Solomon', 'Diaconescu', 'Fratila'
                      ]
                },
                'female': {
                    'first': [
                        'Elena', 'Ana', 'Maria', 'Natalia', 'Olga', 'Irina', 'Tatiana', 'Valentina', 'Liuba', 'Svetlana',
                        'Marina', 'Galina', 'Alina', 'Viorica', 'Angela', 'Tamara', 'Lilia', 'Ecaterina', 'Rodica', 'Eugenia',
                        'Larisa', 'Elena', 'Raisa', 'Veronica', 'Nina', 'Valeria', 'Ludmila', 'Silvia', 'Ina', 'Vera',
                        'Zinaida', 'Ema', 'Aurelia', 'Violeta', 'Eugenia', 'Roxana', 'Elica', 'Vladislava', 'Iuliana', 'Nadejda',
                        'Eufrosina', 'Victoria', 'Adriana', 'Daniela', 'Liudmila', 'Aliona', 'Tamara', 'Raisa', 'Sofia', 'Iulia',
                        'Taisia', 'Vera', 'Luminița', 'Sofia', 'Inessa', 'Ludmila', 'Vasilia', 'Lia', 'Ecaterina', 'Tatiana',
                        'Lina', 'Aliona', 'Anastasia', 'Antonina', 'Evghenia', 'Eudochia', 'Valeria', 'Viviana', 'Cristina', 'Violeta',
                        'Iraida', 'Emilia', 'Liuba', 'Tudora', 'Adela', 'Aliona', 'Galina', 'Vera', 'Silvia', 'Valentina',
                        'Ecaterina', 'Ana-Maria', 'Nina', 'Rozalia', 'Iuliana', 'Veronica', 'Larisa', 'Marina', 'Oxana', 'Lia',
                        'Diana', 'Luminița', 'Olimpia', 'Zara', 'Iulia', 'Ecaterina', 'Roxana', 'Tamara', 'Anastasia', 'Emilia'
                      ],
                    'second': [
                        'Ivanov', 'Popescu', 'Dumitru', 'Gheorghiu', 'Andrei', 'Niculescu', 'Vasile', 'Cozma', 'Pavel', 'Cebotari',
                        'Sorin', 'Stoica', 'Sandu', 'Stanciu', 'Balan', 'Sava', 'Ciobanu', 'Roman', 'Burlacu', 'Ionescu',
                        'Toma', 'Bogdan', 'Frunza', 'Grosu', 'Rusu', 'Diaconu', 'Marin', 'Dima', 'Stefan', 'Dumitrache',
                        'Rosu', 'Mocanu', 'Dinu', 'Cristea', 'Lupu', 'Spataru', 'Iordache', 'Dobre', 'Filip', 'Lungu',
                        'Bucur', 'Serban', 'Munteanu', 'Bratu', 'Constantin', 'Dragomir', 'Dragan', 'Radulescu', 'Gavrila', 'Petrica',
                        'Gheorghe', 'Barbu', 'Cornea', 'Ungureanu', 'Moldovan', 'Cristian', 'Ghita', 'Seremet', 'Apostol', 'Paduraru',
                        'Farcas', 'Iacob', 'Olaru', 'Vlad', 'Gheorghiță', 'Filimon', 'Neagu', 'Stefanescu', 'Cretu', 'Anton',
                        'Cojocaru', 'Tudor', 'Radoi', 'Ilie', 'Chirita', 'Romanu', 'Vicol', 'Tudose', 'Panaite', 'Cristofor',
                        'Budeanu', 'Marin', 'Balan', 'Vasiliu', 'Marinescu', 'Nica', 'Florea', 'Solomon', 'Diaconescu', 'Fratila'
                      ],
                }
            }
        }, 'native': {
            'sex': {
                'male': {
                    'first': [
                      "Vasile", "Ion", "Alexandru", "Dumitru", "Gheorghe", "Constantin", "Mihai", "Nicolae", "Ilie", "Dorin",
                      "Valeriu", "Victor", "Sergiu", "Marian", "Andrei", "Petru", "Dorin", "Marin", "Adrian", "Vladimir",
                      "Cristian", "Iacob", "Gheorghii", "Leonid", "Sorin", "Octavian", "Laurențiu", "Florin", "Vasiliu", "Radu",
                      "Iulian", "Teodor", "Ovidiu", "Cosmin", "Aurel", "Cornel", "Eugeniu", "Eduard", "Dorin", "Oleg",
                      "Daniel", "Bogdan", "Valentin", "Viorel", "Valeriu", "Dorian", "Doru", "Dumitru", "Ovidiu", "Marian"
                  ],
                    'second': [
                      "Cojocaru", "Munteanu", "Balan", "Ceban", "Ursu", "Borta", "Cazacu", "Sava", "Lungu", "Popescu",
                      "Nistor", "Gherman", "Grecu", "Toma", "Caraganciu", "Cornea", "Tataru", "Bordeianu", "Socolov", "Juc",
                      "Andronachi", "Stratulat", "Bivol", "Dragan", "Spataru", "Cosovanu", "Dorosenco", "Cerchez", "Cimbru",
                      "Gradinaru", "Hincu", "Ciobanu", "Mustea", "Miron", "Luchian", "Petrenco", "Zaicov", "Donciu", "Frunza",
                      "Scurtu", "Matveev", "Pocrovnicu", "Zabolotni", "Soroceanu", "Cernei", "Nacu", "Calin"
                  ]
                },
                'female': {
                    'first': [
                      "Maria", "Elena", "Ana", "Liliana", "Eugenia", "Viorica", "Elena", "Valentina", "Doina", "Natalia",
                      "Iulia", "Olga", "Marina", "Tatiana", "Adriana", "Irina", "Victoria", "Vera", "Ludmila", "Tamara",
                      "Eugenia", "Larisa", "Svetlana", "Raisa", "Galina", "Ecaterina", "Anastasia", "Daniela", "Elena", "Silvia",
                      "Valeria", "Nadejda", "Nina", "Antonia", "Alexandra", "Cristina", "Lilia", "Alina", "Ema", "Monica",
                      "Dorina", "Elena", "Angela", "Elena", "Valentina", "Violeta", "Ruxandra", "Ana", "Carmen", "Elena"
                  ],
                    'second': [
                      "Cojocaru", "Munteanu", "Balan", "Ceban", "Ursu", "Borta", "Cazacu", "Sava", "Lungu", "Popescu",
                      "Nistor", "Gherman", "Grecu", "Toma", "Caraganciu", "Cornea", "Tataru", "Bordeianu", "Socolov", "Juc",
                      "Andronachi", "Stratulat", "Bivol", "Dragan", "Spataru", "Cosovanu", "Dorosenco", "Cerchez", "Cimbru",
                      "Gradinaru", "Hincu", "Ciobanu", "Mustea", "Miron", "Luchian", "Petrenco", "Zaicov", "Donciu", "Frunza",
                      "Scurtu", "Matveev", "Pocrovnicu", "Zabolotni", "Soroceanu", "Cernei", "Nacu", "Calin"
                  ],
                }
            }
        }},
    'Netherlands': { 
      'en': {
            'sex': {
                'male': {
                    'first': [
                        'Johannes', 'Jan', 'Pieter', 'Hendrik', 'Willem', 'Cornelis', 'Adrianus', 'Jacob', 'Gerrit', 'Petrus',
                        'Arie', 'Albert', 'Gerard', 'Herman', 'Dirk', 'Franciscus', 'Antonius', 'Martinus', 'Theodorus', 'Rudolf',
                        'Bart', 'Jeroen', 'Michiel', 'Rijk', 'Daan', 'Tobias', 'Erik', 'Maarten', 'Wouter', 'Karel',
                        'Lars', 'Luuk', 'Sander', 'Lucas', 'Thijs', 'Tim', 'Stefan', 'Vincent', 'Jelle', 'Pieter-Jan',
                        'Niels', 'Joris', 'Matthijs', 'Bram', 'Wim', 'Simon', 'Michel', 'Roel', 'Patrick', 'Boudewijn',
                        'Johan', 'Alexander', 'Rutger', 'Victor', 'Maas', 'Gerben', 'Joost', 'Berend', 'Ewout', 'Levi',
                        'Rogier', 'Freek', 'Sebastiaan', 'Martijn', 'Koen', 'Frits', 'Cas', 'Teun', 'Olivier', 'Floris',
                        'Sam', 'Bastiaan', 'Christiaan', 'Willem-Jan', 'Reinier', 'Niek', 'Hugo', 'Job', 'Max', 'Gijs',
                        'Rik', 'Hidde', 'Diederik', 'Klaas', 'Bert', 'Jelmer', 'Thierry', 'Jordy', 'Jop', 'Rens',
                        'Jochem', 'Xander', 'Lennart', 'Remy', 'Sjoerd', 'Jesse', 'Mats', 'Quinten', 'Tijn', 'Ferdinand'
                      ],
                    'second': [
                        'de Jong', 'Jansen', 'de Vries', 'van den Berg', 'van Dijk', 'Bakker', 'Janssen', 'Visser', 'Smit', 'Meijer',
                        'Mulder', 'de Boer', 'Bos', 'Vos', 'Peters', 'Hendriks', 'Koster', 'Veenstra', 'Prins', 'Schmidt',
                        'van der Linden', 'van der Meer', 'de Graaf', 'van der Velden', 'de Bruin', 'van der Wal', 'van Doorn', 'Kok', 'Post',
                        'Mol', 'Brouwer', 'Koning', 'de Lange', 'de Groot', 'Kuijpers', 'Timmermans', 'van Leeuwen', 'van der Heijden', 'Kuiper',
                        'de Wit', 'Dijkstra', 'Bosch', 'van Beek', 'Jacobs', 'van de Ven', 'Vermeulen', 'Kramer', 'van Wijk', 'van der Laan',
                        'van der Pols', 'Scholten', 'Jonker', 'Hoekstra', 'Huisman', 'Groen', 'van der Linde', 'Verbeek', 'Willems', 'van der Horst',
                        'Schouten', 'Kuipers', 'van Dam', 'Bakker', 'Willemsen', 'Brouwer', 'de Lange', 'Veenstra', 'van Vliet', 'Visser',
                        'Bosman', 'Koning', 'Vos', 'de Ruiter', 'de Vos', 'van Veen', 'Molenaar', 'van de Pol', 'Scholte', 'de Koning',
                        'Molenaar', 'van Beek', 'van Dijk', 'Koster', 'Smeets', 'Bakker', 'de Wit', 'van Leeuwen', 'van der Zwan', 'de Groot'
                      ]
                },
                'female': {
                    'first': [
                        'Anna', 'Sophie', 'Emma', 'Julia', 'Eva', 'Tess', 'Lisa', 'Fleur', 'Saar', 'Lotte',
                        'Lieke', 'Lena', 'Isa', 'Liv', 'Noa', 'Zoe', 'Lynn', 'Mila', 'Elin', 'Nina',
                        'Rosa', 'Esmee', 'Amy', 'Fenna', 'Amber', 'Isabel', 'Roos', 'Femke', 'Jasmijn', 'Anouk',
                        'Lara', 'Sara', 'Floor', 'Julie', 'Evi', 'Noor', 'Sophia', 'Lois', 'Milou', 'Nova',
                        'Lina', 'Hannah', 'Olivia', 'Lizzy', 'Yara', 'Ava', 'Vera', 'Maud', 'Yasmine', 'Bente',
                        'Lola', 'Anne', 'Daphne', 'Elise', 'Iris', 'Zara', 'Nova', 'Mia', 'Liv', 'Lara',
                        'Aimée', 'Sofia', 'Nora', 'Emily', 'Lisanne', 'Johanna', 'Merel', 'Milou', 'Veerle', 'Ella',
                        'Marit', 'Daisy', 'Elif', 'Sterre', 'Aya', 'Johanneke', 'Puck', 'Lotte', 'Renske', 'Nienke',
                        'Lise', 'Isabella', 'Myrthe', 'Nadia', 'Faye', 'Madelief', 'Amélie', 'Kiki', 'Mara', 'Isla',
                        'Lynn', 'Hanneke', 'Marianne', 'Zoë', 'Charlotte', 'Nienke', 'Jette', 'Feline', 'Demi', 'Isa'
                      ],
                    'second': [
                        'de Jong', 'Jansen', 'de Vries', 'van den Berg', 'van Dijk', 'Bakker', 'Janssen', 'Visser', 'Smit', 'Meijer',
                        'Mulder', 'de Boer', 'Bos', 'Vos', 'Peters', 'Hendriks', 'Koster', 'Veenstra', 'Prins', 'Schmidt',
                        'van der Linden', 'van der Meer', 'de Graaf', 'van der Velden', 'de Bruin', 'van der Wal', 'van Doorn', 'Kok', 'Post',
                        'Mol', 'Brouwer', 'Koning', 'de Lange', 'de Groot', 'Kuijpers', 'Timmermans', 'van Leeuwen', 'van der Heijden', 'Kuiper',
                        'de Wit', 'Dijkstra', 'Bosch', 'van Beek', 'Jacobs', 'van de Ven', 'Vermeulen', 'Kramer', 'van Wijk', 'van der Laan',
                        'van der Pols', 'Scholten', 'Jonker', 'Hoekstra', 'Huisman', 'Groen', 'van der Linde', 'Verbeek', 'Willems', 'van der Horst',
                        'Schouten', 'Kuipers', 'van Dam', 'Bakker', 'Willemsen', 'Brouwer', 'de Lange', 'Veenstra', 'van Vliet', 'Visser',
                        'Bosman', 'Koning', 'Vos', 'de Ruiter', 'de Vos', 'van Veen', 'Molenaar', 'van de Pol', 'Scholte', 'de Koning',
                        'Molenaar', 'van Beek', 'van Dijk', 'Koster', 'Smeets', 'Bakker', 'de Wit', 'van Leeuwen', 'van der Zwan', 'de Groot'
                      ],
                }
            }
        }, 'native': {
            'sex': {
                'male': {
                    'first': [
                      "Jan", "Pieter", "Johan", "Willem", "Hendrik", "Cornelis", "Dirk", "Jacob", "Gerard", "Michiel",
                      "Anton", "Bart", "Maarten", "Lucas", "Henk", "Erik", "Teun", "Thomas", "Piet", "Frits",
                      "Herman", "Karel", "Gerrit", "Rutger", "Berend", "Joris", "Daan", "Reinier", "Thijs", "Roel",
                      "Rik", "Jelle", "Tim", "Sebastiaan", "Rob", "Boudewijn", "Niek", "Wouter", "Bram", "Sander",
                      "Hugo", "Timo", "Floris", "Luuk", "Jeroen", "Gijs", "Cas", "Johannes", "Gerben", "Rolf"
                  ],
                    'second': [
                      "de Jong", "Jansen", "de Vries", "van den Berg", "van Dijk", "Bakker", "Janssen", "Visser", "Smit", "Meijer",
                      "de Boer", "Mulder", "de Groot", "Bos", "Vos", "Peters", "Hendriks", "van Leeuwen", "Dekker", "Brouwer",
                      "van der Meer", "de Haan", "Vermeulen", "Kok", "van den Heuvel", "Prins", "Koopman", "de Wit", "Post", "Kuijpers",
                      "van der Laan", "van Beek", "van der Linden", "Veenstra", "Schouten", "Petersen", "Nielsen", "Martens", "Sanders", "van der Wal",
                      "van Boven", "Hermans", "Dijkstra", "Timmermans", "Huisman", "Evers", "Willems", "van der Heijden", "van der Ven", "Beekman"
                  ]
                },
                'female': {
                    'first': [
                      "Anna", "Marieke", "Sophie", "Emma", "Lotte", "Mieke", "Eva", "Anouk", "Liesbeth", "Elise",
                      "Annelies", "Femke", "Lisanne", "Catharina", "Petra", "Inge", "Renate", "Judith", "Caroline", "Kim",
                      "Linda", "Monique", "Karen", "Paulien", "Mirjam", "Ilse", "Nicole", "Esther", "Yvonne", "Nienke",
                      "Laura", "Julia", "Merel", "Daphne", "Nina", "Floor", "Sanne", "Fleur", "Suzanne", "Lara",
                      "Marianne", "Hanneke", "Jasmijn", "Miranda", "Bianca", "Daniëlle", "Lotte", "Maaike", "Lisette", "Margo"
                  ],
                    'second': [
                      "de Jong", "Jansen", "de Vries", "van den Berg", "van Dijk", "Bakker", "Janssen", "Visser", "Smit", "Meijer",
                      "de Boer", "Mulder", "de Groot", "Bos", "Vos", "Peters", "Hendriks", "van Leeuwen", "Dekker", "Brouwer",
                      "van der Meer", "de Haan", "Vermeulen", "Kok", "van den Heuvel", "Prins", "Koopman", "de Wit", "Post", "Kuijpers",
                      "van der Laan", "van Beek", "van der Linden", "Veenstra", "Schouten", "Petersen", "Nielsen", "Martens", "Sanders", "van der Wal",
                      "van Boven", "Hermans", "Dijkstra", "Timmermans", "Huisman", "Evers", "Willems", "van der Heijden", "van der Ven", "Beekman"
                  ],
                }
            }
        }},
    'Norway': { 
      'en': {
            'sex': {
                'male': {
                    'first': [
                        'Ole', 'Johan', 'Andreas', 'Kristian', 'Erik', 'Lars', 'Per', 'Sven', 'Magnus', 'Knut',
                        'Hans', 'Petter', 'Thomas', 'Martin', 'Jon', 'Harald', 'Geir', 'Bjørn', 'Odd', 'Trond',
                        'Even', 'Frode', 'Helge', 'Sigurd', 'Nils', 'Arne', 'Steinar', 'Øyvind', 'Gunnar', 'Tore',
                        'Ola', 'Roar', 'Terje', 'Kjell', 'Jan', 'Einar', 'Espen', 'Dag', 'Christian', 'Ivar',
                        'Oskar', 'Morten', 'Eivind', 'Rune', 'Sindre', 'Børre', 'Sigmund', 'Jørgen', 'Erling', 'Fredrik',
                        'Pål', 'Gustav', 'Trygve', 'Leif', 'Jostein', 'Marius', 'Stian', 'Oddvar', 'Kåre', 'Vidar',
                        'Åge', 'Håkon', 'Gunnar', 'Jørgen', 'Inge', 'Asbjørn', 'Øystein', 'Herman', 'Henrik', 'Ivan',
                        'Torstein', 'Eilert', 'Omar', 'Rolf', 'Tormod', 'Tor', 'Ludvik', 'Erlend', 'Ulrik', 'Oskar',
                        'Harald', 'Erlend', 'Vegard', 'Ragnar', 'Lasse', 'Simen', 'Vilhelm', 'Finn', 'Alfred', 'Jens',
                        'Ørjan', 'Torbjørn', 'Helge', 'Bjarte', 'Leiv', 'Joachim', 'Jørgen', 'Fridtjof', 'Erling', 'Petter'
                      ],
                    'second': [
                        'Olsen', 'Johansen', 'Larsen', 'Andersen', 'Pedersen', 'Nilsen', 'Kristiansen', 'Jensen', 'Hansen', 'Karlsen',
                        'Svendsen', 'Knutsen', 'Olsen', 'Bakke', 'Sørensen', 'Solberg', 'Andresen', 'Strand', 'Eriksen', 'Moen',
                        'Kristoffersen', 'Jacobsen', 'Haugen', 'Moe', 'Johannessen', 'Gundersen', 'Iversen', 'Olausen', 'Eide', 'Pettersen',
                        'Berg', 'Tangen', 'Johnsen', 'Lie', 'Nielsen', 'Rasmussen', 'Vangen', 'Dahl', 'Aas', 'Berntsen',
                        'Myhre', 'Rønning', 'Ottosen', 'Lunde', 'Haugen', 'Nygård', 'Sørlie', 'Hanssen', 'Nygaard', 'Bjerke',
                        'Næss', 'Fossum', 'Haugland', 'Bakken', 'Wold', 'Berger', 'Isaksen', 'Ruud', 'Simonsen', 'Oppedal',
                        'Lind', 'Arnesen', 'Halvorsen', 'Haga', 'Borge', 'Nordby', 'Haug', 'Lien', 'Sandvik', 'Gran',
                        'Evensen', 'Mikkelsen', 'Aasen', 'Thoresen', 'Tveit', 'Ødegård', 'Hole', 'Fredriksen', 'Solem', 'Hovland',
                        'Engebretsen', 'Vik', 'Engen', 'Nordli', 'Ødegaard', 'Brekke', 'Solheim', 'Tangen', 'Østby', 'Bråten',
                        'Bø', 'Strøm', 'Torp', 'Gulbrandsen', 'Stensrud', 'Gjøen', 'Nygren', 'Eliassen', 'Helle', 'Hedlund'
                      ]
                },
                'female': {
                    'first': [
                        'Ingrid', 'Marianne', 'Kristin', 'Camilla', 'Ida', 'Lene', 'Hilde', 'Astrid', 'Eva', 'Nina',
                        'Silje', 'Tone', 'Bente', 'Hege', 'Solveig', 'Kari', 'Annika', 'Helene', 'Vilde', 'Ragnhild',
                        'Marit', 'Trine', 'Sofie', 'Emma', 'Linda', 'Johanne', 'Anita', 'Gunn', 'Malin', 'Lillian',
                        'Karen', 'Berit', 'Elin', 'Pernille', 'Guro', 'Thea', 'Lisa', 'Maria', 'Anne', 'Julie',
                        'Camilla', 'Gerd', 'Liv', 'Sigrid', 'Jorunn', 'Ellen', 'Gro', 'Anette', 'Kine', 'Siri',
                        'Hanna', 'Kristine', 'Martha', 'Oda', 'Asta', 'Rita', 'Ane', 'Ella', 'Alma', 'Marte',
                        'Lisbeth', 'Caroline', 'Ingeborg', 'Margit', 'Birgitte', 'Hanne', 'Linn', 'Aurora', 'Rønnaug', 'Siri',
                        'Toril', 'Sylvia', 'Cecilie', 'Else', 'Kjersti', 'Elisabeth', 'Asta', 'Unni', 'Helga', 'Inger',
                        'Berit', 'Eva', 'Nora', 'Kamilla', 'Amalie', 'Therese', 'Iselin', 'Synnøve', 'Ellinor', 'Viktoria',
                        'Frida', 'Mona', 'Elise', 'Margrethe', 'Astrid', 'Rikke', 'Linnea', 'Hedda', 'Tiril', 'Idun'
                      ],
                    'second': [
                        'Olsen', 'Johansen', 'Larsen', 'Andersen', 'Pedersen', 'Nilsen', 'Kristiansen', 'Jensen', 'Hansen', 'Karlsen',
                        'Svendsen', 'Knutsen', 'Olsen', 'Bakke', 'Sørensen', 'Solberg', 'Andresen', 'Strand', 'Eriksen', 'Moen',
                        'Kristoffersen', 'Jacobsen', 'Haugen', 'Moe', 'Johannessen', 'Gundersen', 'Iversen', 'Olausen', 'Eide', 'Pettersen',
                        'Berg', 'Tangen', 'Johnsen', 'Lie', 'Nielsen', 'Rasmussen', 'Vangen', 'Dahl', 'Aas', 'Berntsen',
                        'Myhre', 'Rønning', 'Ottosen', 'Lunde', 'Haugen', 'Nygård', 'Sørlie', 'Hanssen', 'Nygaard', 'Bjerke',
                        'Næss', 'Fossum', 'Haugland', 'Bakken', 'Wold', 'Berger', 'Isaksen', 'Ruud', 'Simonsen', 'Oppedal',
                        'Lind', 'Arnesen', 'Halvorsen', 'Haga', 'Borge', 'Nordby', 'Haug', 'Lien', 'Sandvik', 'Gran',
                        'Evensen', 'Mikkelsen', 'Aasen', 'Thoresen', 'Tveit', 'Ødegård', 'Hole', 'Fredriksen', 'Solem', 'Hovland',
                        'Engebretsen', 'Vik', 'Engen', 'Nordli', 'Ødegaard', 'Brekke', 'Solheim', 'Tangen', 'Østby', 'Bråten',
                        'Bø', 'Strøm', 'Torp', 'Gulbrandsen', 'Stensrud', 'Gjøen', 'Nygren', 'Eliassen', 'Helle', 'Hedlund'
                      ],
                }
            }
        }, 'native': {
            'sex': {
                'male': {
                    'first': [
                      "Per", "Ole", "Lars", "Kjell", "Bjørn", "Erik", "Geir", "Jan", "Odd", "Hans",
                      "Anders", "Tor", "Frode", "Jørgen", "Svein", "Nils", "Arne", "Terje", "Thomas", "Steinar",
                      "Petter", "Morten", "Henrik", "Tore", "Kristian", "Espen", "Stian", "Øystein", "Rune", "Martin",
                      "Magnus", "Gunnar", "Jon", "Sigmund", "Trond", "Stig", "Even", "Lasse", "Helge", "Roger",
                      "Simen", "Kjetil", "Håkon", "Ola", "Ivar", "Einar", "Pål", "Fredrik", "Lennart", "Eivind"
                  ],
                    'second': [
                      "Johansen", "Hansen", "Andersen", "Pedersen", "Olsen", "Larsen", "Kristiansen", "Jensen", "Karlsen", "Johnsen",
                      "Pettersen", "Eriksen", "Berg", "Haugen", "Hagen", "Andreassen", "Jacobsen", "Dahl", "Johannessen", "Halvorsen",
                      "Nilssen", "Rasmussen", "Solberg", "Martinsen", "Paulsen", "Knutsen", "Sørensen", "Knudsen", "Amundsen", "Evensen",
                      "Bakke", "Svendsen", "Myhre", "Haugland", "Sæther", "Nilsen", "Gundersen", "Strand", "Tangen", "Solheim",
                      "Bjerke", "Aas", "Lund", "Kvam", "Bakken", "Fredriksen", "Nygård", "Ødegård", "Sandvik", "Brekke"
                  ]
                },
                'female': {
                    'first': [
                      "Anne", "Ingrid", "Marit", "Kristin", "Lise", "Marianne", "Hilde", "Tone", "Eva", "Gunn",
                      "Kari", "Liv", "Hege", "Ida", "Nina", "Mette", "Solveig", "Line", "Camilla", "Inger",
                      "Hanne", "Siri", "Anita", "Siv", "Berit", "Ragnhild", "Lena", "Grethe", "Linn", "Bente",
                      "May", "Astrid", "Wenche", "Else", "Malin", "Katrine", "Monica", "Elisabeth", "Tina", "Mona",
                      "Torill", "Elin", "Carina", "Trine", "Ann", "Silje", "Vibeke", "Synnøve", "Kjersti", "Jorunn"
                  ],
                    'second':[
                      "Johansen", "Hansen", "Andersen", "Pedersen", "Olsen", "Larsen", "Kristiansen", "Jensen", "Karlsen", "Johnsen",
                      "Pettersen", "Eriksen", "Berg", "Haugen", "Hagen", "Andreassen", "Jacobsen", "Dahl", "Johannessen", "Halvorsen",
                      "Nilssen", "Rasmussen", "Solberg", "Martinsen", "Paulsen", "Knutsen", "Sørensen", "Knudsen", "Amundsen", "Evensen",
                      "Bakke", "Svendsen", "Myhre", "Haugland", "Sæther", "Nilsen", "Gundersen", "Strand", "Tangen", "Solheim",
                      "Bjerke", "Aas", "Lund", "Kvam", "Bakken", "Fredriksen", "Nygård", "Ødegård", "Sandvik", "Brekke"
                  ],
                }
            }
        }},
    'UAE': { 
      'en': {
            'sex': {
                'male': {
                    'first': [
                        'Mohammed', 'Ahmed', 'Khalid', 'Saeed', 'Abdullah', 'Rashid', 'Faisal', 'Hamad', 'Sultan', 'Majid',
                        'Saif', 'Hassan', 'Yousef', 'Omar', 'Nasser', 'Ali', 'Adnan', 'Khaled', 'Mohsin', 'Ibrahim',
                        'Tariq', 'Nabil', 'Salim', 'Zayed', 'Issa', 'Fahad', 'Jamal', 'Jasim', 'Mubarak', 'Abdulaziz',
                        'Jaber', 'Kadhim', 'Obaid', 'Riyad', 'Bader', 'Ghassan', 'Marwan', 'Nawaf', 'Othman', 'Saad',
                        'Salman', 'Talal', 'Waleed', 'Zain', 'Amir', 'Arif', 'Asim', 'Bilal', 'Eisa', 'Faris',
                        'Hadi', 'Hakim', 'Hani', 'Imran', 'Jalal', 'Karim', 'Laith', 'Mamdouh', 'Mazin', 'Najib',
                        'Raed', 'Rami', 'Ridwan', 'Sami', 'Sharif', 'Tamer', 'Tarek', 'Wael', 'Zakariya', 'Zuhair',
                        'Amin', 'Anwar', 'Ashraf', 'Ayman', 'Dawood', 'Esmail', 'Hisham', 'Karam', 'Khalifa', 'Lutfi',
                        'Mahmoud', 'Nidal', 'Omar', 'Qasim', 'Raghib', 'Ramzi', 'Sabri', 'Thamer', 'Walid', 'Yasin',
                        'Zayd', 'Zuhair', 'Aqeel', 'Fadi', 'Jawad', 'Kamal', 'Luay', 'Nizar', 'Osama', 'Sameer'
                      ],
                    'second': [
                        'Al-Hamed', 'Al-Farsi', 'Al-Mansoori', 'Al-Suwaidi', 'Al-Qasimi', 'Al-Mazrouei', 'Al-Ali', 'Al-Hashemi', 'Al-Kaabi', 'Al-Abdullah',
                        'Al-Maktoum', 'Al-Nuaimi', 'Al-Hosani', 'Al-Salem', 'Al-Sharif', 'Al-Dhaheri', 'Al-Badi', 'Al-Falasi', 'Al-Jabri', 'Al-Ghafri',
                        'Al-Blooshi', 'Al-Yafei', 'Al-Mahmoud', 'Al-Dhafiri', 'Al-Mulla', 'Al-Harbi', 'Al-Balushi', 'Al-Hassan', 'Al-Riyami', 'Al-Khatiri',
                        'Al-Zarouni', 'Al-Shamsi', 'Al-Qahtani', 'Al-Muhairi', 'Al-Khalaf', 'Al-Shehhi', 'Al-Suwaidan', 'Al-Ghazali', 'Al-Tunaiji', 'Al-Dhahab',
                        'Al-Sarhan', 'Al-Kuwari', 'Al-Khalidi', 'Al-Rashidi', 'Al-Ammari', 'Al-Jabali', 'Al-Marri', 'Al-Jassim', 'Al-Shanqiti', 'Al-Qarni',
                        'Al-Mamari', 'Al-Hamadi', 'Al-Sabah', 'Al-Roumi', 'Al-Qurashi', 'Al-Shahrani', 'Al-Murad', 'Al-Masoud', 'Al-Mahdi', 'Al-Ajmi',
                        'Al-Mandhari', 'Al-Shahwani', 'Al-Maamari', 'Al-Haddad', 'Al-Suhail', 'Al-Rais', 'Al-Zubair', 'Al-Rubaie', 'Al-Sadiq', 'Al-Suwaidan',
                        'Al-Naimi', 'Al-Mazrooei', 'Al-Musharrekh', 'Al-Baloushi', 'Al-Junaibi', 'Al-Qubaisi', 'Al-Awadi', 'Al-Kuwari', 'Al-Otaibi', 'Al-Habashi',
                        'Al-Nuaim', 'Al-Suwaidi', 'Al-Saadi', 'Al-Maskari', 'Al-Musallam', 'Al-Khouri', 'Al-Mannai', 'Al-Suwaidi', 'Al-Hammadi', 'Al-Kandari',
                        'Al-Falasi', 'Al-Belushi', 'Al-Matroushi', 'Al-Suwaidi', 'Al-Mandhari', 'Al-Hammadi', 'Al-Awar', 'Al-Rubaie', 'Al-Muhairi', 'Al-Suwaidan'
                      ]
                },
                'female': {
                    'first': [
                        'Fatima', 'Aisha', 'Layla', 'Noor', 'Mariam', 'Sara', 'Noura', 'Latifa', 'Huda', 'Muna',
                        'Hanan', 'Sheikha', 'Amna', 'Reem', 'Khadija', 'Safia', 'Afaf', 'Nadia', 'Dana', 'Shaima',
                        'Hayat', 'Zainab', 'Alya', 'Jawaher', 'Zahra', 'Asma', 'Razan', 'Jana', 'Maitha', 'Farida',
                        'Manal', 'Shaikha', 'Fatemeh', 'Hamda', 'Lubna', 'Shaista', 'Bushra', 'Sabeen', 'Samia', 'Salma',
                        'Nawal', 'Rania', 'Maryam', 'Maysoon', 'Mai', 'Buthaina', 'Maha', 'Amina', 'Ghada', 'Hessa',
                        'Majida', 'Maysa', 'Najla', 'Roula', 'Samar', 'Abeer', 'Nisreen', 'Nourhan', 'Rabia', 'Maha',
                        'Malak', 'Soraya', 'Rasha', 'Lina', 'Habiba', 'Hanan', 'Jumanah', 'Laila', 'Nada', 'Zaynab',
                        'Ruwaida', 'Sahar', 'Saida', 'Rukaya', 'Tahani', 'Yasmine', 'Noura', 'Nadia', 'Jamila', 'Mouna',
                        'Najah', 'Fadwa', 'Muna', 'Imane', 'Amal', 'Mai', 'Nasreen', 'Shahira', 'Samara', 'Shaza',
                        'Sawsan', 'Fatma', 'Ayesha', 'Amira', 'Lubna', 'Myriam', 'Khawla', 'Sabah', 'Hayam', 'Diana'
                      ],
                    'second': [
                        'Al-Hamed', 'Al-Farsi', 'Al-Mansoori', 'Al-Suwaidi', 'Al-Qasimi', 'Al-Mazrouei', 'Al-Ali', 'Al-Hashemi', 'Al-Kaabi', 'Al-Abdullah',
                        'Al-Maktoum', 'Al-Nuaimi', 'Al-Hosani', 'Al-Salem', 'Al-Sharif', 'Al-Dhaheri', 'Al-Badi', 'Al-Falasi', 'Al-Jabri', 'Al-Ghafri',
                        'Al-Blooshi', 'Al-Yafei', 'Al-Mahmoud', 'Al-Dhafiri', 'Al-Mulla', 'Al-Harbi', 'Al-Balushi', 'Al-Hassan', 'Al-Riyami', 'Al-Khatiri',
                        'Al-Zarouni', 'Al-Shamsi', 'Al-Qahtani', 'Al-Muhairi', 'Al-Khalaf', 'Al-Shehhi', 'Al-Suwaidan', 'Al-Ghazali', 'Al-Tunaiji', 'Al-Dhahab',
                        'Al-Sarhan', 'Al-Kuwari', 'Al-Khalidi', 'Al-Rashidi', 'Al-Ammari', 'Al-Jabali', 'Al-Marri', 'Al-Jassim', 'Al-Shanqiti', 'Al-Qarni',
                        'Al-Mamari', 'Al-Hamadi', 'Al-Sabah', 'Al-Roumi', 'Al-Qurashi', 'Al-Shahrani', 'Al-Murad', 'Al-Masoud', 'Al-Mahdi', 'Al-Ajmi',
                        'Al-Mandhari', 'Al-Shahwani', 'Al-Maamari', 'Al-Haddad', 'Al-Suhail', 'Al-Rais', 'Al-Zubair', 'Al-Rubaie', 'Al-Sadiq', 'Al-Suwaidan',
                        'Al-Naimi', 'Al-Mazrooei', 'Al-Musharrekh', 'Al-Baloushi', 'Al-Junaibi', 'Al-Qubaisi', 'Al-Awadi', 'Al-Kuwari', 'Al-Otaibi', 'Al-Habashi',
                        'Al-Nuaim', 'Al-Suwaidi', 'Al-Saadi', 'Al-Maskari', 'Al-Musallam', 'Al-Khouri', 'Al-Mannai', 'Al-Suwaidi', 'Al-Hammadi', 'Al-Kandari',
                        'Al-Falasi', 'Al-Belushi', 'Al-Matroushi', 'Al-Suwaidi', 'Al-Mandhari', 'Al-Hammadi', 'Al-Awar', 'Al-Rubaie', 'Al-Muhairi', 'Al-Suwaidan'
                      ],
                }
            }
        }, 'native': {
            'sex': {
                'male': {
                    'first': [
                      'محمد', 'أحمد', 'خالد', 'سعيد', 'عبد الله', 'راشد', 'فيصل', 'حمد', 'سلطان', 'ماجد',
                      'سيف', 'حسن', 'يوسف', 'عمر', 'ناصر', 'علي', 'عدنان', 'خالد', 'محسن', 'إبراهيم',
                      'طارق', 'نبيل', 'سليم', 'زايد', 'عيسى', 'فهد', 'جمال', 'جاسم', 'مبارك', 'عبد العزيز',
                      'جابر', 'كاظم', 'عبيد', 'رياض', 'بدر', 'غسان', 'مروان', 'نواف', 'عثمان', 'سعد',
                      'سلمان', 'طلال', 'وليد', 'زين', 'أمير', 'عارف', 'عاصم', 'بلال', 'عيسى', 'فارس',
                      'هادي', 'حكيم', 'هاني', 'عمران', 'جلال', 'كريم', 'ليث', 'ممدوح', 'مازن', 'نجيب',
                      'رائد', 'رامي', 'رضوان', 'سامي', 'شريف', 'تامر', 'طارق', 'وائل', 'زكريا', 'زهير',
                      'أمين', 'أنور', 'أشرف', 'أيمن', 'داود', 'إسماعيل', 'هشام', 'كرم', 'خليفة', 'لطفي',
                      'محمود', 'نضال', 'عمر', 'قاسم', 'راغب', 'رمزي', 'صبري', 'ثامر', 'وليد', 'ياسين',
                      'زيد', 'زهير', 'عقيل', 'فادي', 'جواد', 'كمال', 'لؤي', 'نزار', 'أسامة', 'سمير'
                  ],
                    'second': [
                      'الحمد', 'الفارسي', 'المنصوري', 'السويدي', 'القاسمي', 'المزروعي', 'العلي', 'الهاشمي', 'الكعبي', 'العبدالله',
                      'المكتوم', 'النعيمي', 'الهوسني', 'السالم', 'الشريف', 'الظاهري', 'البادي', 'الفلاسي', 'الجبري', 'الغافري',
                      'البلوشي', 'اليافعي', 'المحمود', 'الظافيري', 'الملا', 'الحربي', 'البلوشي', 'الحسن', 'الريامي', 'الخطيري',
                      'الزروني', 'الشامسي', 'القحطاني', 'المحيري', 'الخلف', 'الشحي', 'السويدان', 'الغزالي', 'التنيجي', 'الذهب',
                      'السرحان', 'الكواري', 'الخالدي', 'الرشيدي', 'العماري', 'الجبلي', 'المري', 'الجاسم', 'الشنقيطي', 'القرني',
                      'المعمري', 'الحمادي', 'الصباح', 'الرومي', 'القرشي', 'الشهراني', 'المراد', 'المسعود', 'المهدي', 'العجمي',
                      'المنظري', 'الشحواني', 'المعمري', 'الحداد', 'السهيل', 'الرئيس', 'الزبير', 'الربيعي', 'الصديق', 'السويدان',
                      'النعيمي', 'المزروعي', 'المشرقي', 'البلوشي', 'الجنوبي', 'القبيسي', 'العوضي', 'الكواري', 'العتيبي', 'الحبشي',
                      'النعيم', 'السويدي', 'السعدي', 'المسكاري', 'المسلم', 'الخوري', 'المناعي', 'السويدي', 'الحمادي', 'الكندري',
                      'الفلاسي', 'البلوشي', 'المطروشي', 'السويدي', 'المنظري', 'الحمادي', 'العوار', 'الربيعي', 'المحيري', 'السويدان'
                  ]
                },
                'female': {
                    'first': [
                      'فاطمة', 'عائشة', 'ليلى', 'نور', 'مريم', 'سارة', 'نورا', 'لطيفة', 'هدى', 'منى',
                      'حنان', 'شيخة', 'آمنة', 'ريم', 'خديجة', 'صفية', 'عفاف', 'نادية', 'دانا', 'شيماء',
                      'حياة', 'زينب', 'علياء', 'جواهر', 'زهراء', 'أسماء', 'رزان', 'جنى', 'ميثا', 'فريدة',
                      'منال', 'شيخة', 'فاطمة', 'حمدة', 'لبنى', 'شيستا', 'بشرى', 'سبين', 'سامية', 'سلمى',
                      'نوال', 'رانيا', 'مريم', 'ميسون', 'مي', 'بثينة', 'مها', 'أمينة', 'غادة', 'حصة',
                      'ماجدة', 'ميساء', 'نجلاء', 'رولا', 'سمر', 'عبير', 'نسرين', 'نورهان', 'رابية', 'مها',
                      'ملاك', 'سرايا', 'رشا', 'لينا', 'حبيبة', 'حنان', 'جمانة', 'ليلى', 'ندى', 'زينب',
                      'رويدة', 'سحر', 'سعيدة', 'رقية', 'طهاني', 'ياسمين', 'نورا', 'نادية', 'جميلة', 'مونا',
                      'نجاح', 'فدوى', 'منى', 'إيمان', 'أمل', 'مي', 'نسرين', 'شاهرة', 'سمارة', 'شذى',
                      'سوسن', 'فاطمة', 'عائشة', 'أميرة', 'لبنى', 'ميريام', 'خولة', 'صباح', 'هيام', 'ديانا'
                  ],
                    'second': [
                      'الحمد', 'الفارسي', 'المنصوري', 'السويدي', 'القاسمي', 'المزروعي', 'العلي', 'الهاشمي', 'الكعبي', 'العبدالله',
                      'المكتوم', 'النعيمي', 'الهوسني', 'السالم', 'الشريف', 'الظاهري', 'البادي', 'الفلاسي', 'الجبري', 'الغافري',
                      'البلوشي', 'اليافعي', 'المحمود', 'الظافيري', 'الملا', 'الحربي', 'البلوشي', 'الحسن', 'الريامي', 'الخطيري',
                      'الزروني', 'الشامسي', 'القحطاني', 'المحيري', 'الخلف', 'الشحي', 'السويدان', 'الغزالي', 'التنيجي', 'الذهب',
                      'السرحان', 'الكواري', 'الخالدي', 'الرشيدي', 'العماري', 'الجبلي', 'المري', 'الجاسم', 'الشنقيطي', 'القرني',
                      'المعمري', 'الحمادي', 'الصباح', 'الرومي', 'القرشي', 'الشهراني', 'المراد', 'المسعود', 'المهدي', 'العجمي',
                      'المنظري', 'الشحواني', 'المعمري', 'الحداد', 'السهيل', 'الرئيس', 'الزبير', 'الربيعي', 'الصديق', 'السويدان',
                      'النعيمي', 'المزروعي', 'المشرقي', 'البلوشي', 'الجنوبي', 'القبيسي', 'العوضي', 'الكواري', 'العتيبي', 'الحبشي',
                      'النعيم', 'السويدي', 'السعدي', 'المسكاري', 'المسلم', 'الخوري', 'المناعي', 'السويدي', 'الحمادي', 'الكندري',
                      'الفلاسي', 'البلوشي', 'المطروشي', 'السويدي', 'المنظري', 'الحمادي', 'العوار', 'الربيعي', 'المحيري', 'السويدان'
                  ],
                }
            }
        }},
    'Poland': { 
      'en': {
            'sex': {
                'male': {
                    'first': [
                        'Adam', 'Piotr', 'Krzysztof', 'Andrzej', 'Jan', 'Marek', 'Tomasz', 'Michał', 'Jerzy', 'Zbigniew',
                        'Ryszard', 'Kazimierz', 'Dariusz', 'Henryk', 'Edward', 'Grzegorz', 'Jacek', 'Mariusz', 'Włodzimierz', 'Robert',
                        'Stanisław', 'Mieczysław', 'Leszek', 'Witold', 'Maciej', 'Wojciech', 'Paweł', 'Zdzisław', 'Kamil', 'Bartłomiej',
                        'Józef', 'Kamil', 'Rafał', 'Bogdan', 'Aleksander', 'Mikołaj', 'Lech', 'Tadeusz', 'Władysław', 'Jarosław',
                        'Artur', 'Łukasz', 'Adrian', 'Janusz', 'Zygmunt', 'Roman', 'Czesław', 'Wiesław', 'Bogusław', 'Sławomir',
                        'Radosław', 'Dawid', 'Filip', 'Hubert', 'Bruno', 'Norbert', 'Sebastian', 'Mateusz', 'Maksymilian', 'Damian',
                        'Konrad', 'Karol', 'Marcin', 'Dawid', 'Arkadiusz', 'Dominik', 'Marek', 'Patryk', 'Radosław', 'Eryk',
                        'Karol', 'Marian', 'Bartosz', 'Konrad', 'Waldemar', 'Juliusz', 'Łukasz', 'Oskar', 'Paweł', 'Szymon',
                        'Kacper', 'Mikołaj', 'Igor', 'Tymoteusz', 'Olivier', 'Zbigniew', 'Rafał', 'Wojciech', 'Andrzej', 'Krzysztof',
                        'Łukasz', 'Bartosz', 'Mateusz', 'Piotr', 'Jakub', 'Karol', 'Szymon', 'Filip', 'Jan', 'Adrian'
                      ],
                    'second': [
                        'Nowak', 'Kowalski', 'Wiśniewski', 'Dąbrowski', 'Lewandowski', 'Wójcik', 'Kamiński', 'Kowalczyk', 'Zieliński', 'Szymański',
                        'Woźniak', 'Kozłowski', 'Jankowski', 'Wojciechowski', 'Kwiatkowski', 'Kaczmarek', 'Mazur', 'Krawczyk', 'Piotrowski', 'Grabowski',
                        'Nowakowski', 'Pawłowski', 'Michalski', 'Nowicki', 'Adamczyk', 'Dudek', 'Zając', 'Wieczorek', 'Jabłoński', 'Król',
                        'Majewski', 'Olszewski', 'Jaworski', 'Wróbel', 'Malinowski', 'Pawlak', 'Witkowski', 'Walczak', 'Stępień', 'Górski',
                        'Rutkowski', 'Michalak', 'Sikora', 'Ostrowski', 'Baran', 'Duda', 'Szewczyk', 'Tomaszewski', 'Pająk', 'Szewczyk',
                        'Czarnecki', 'Kubiak', 'Brzeziński', 'Bednarek', 'Mazurek', 'Kołodziej', 'Bąk', 'Krajewski', 'Czerwiński', 'Kaczmarczyk',
                        'Makowski', 'Zalewski', 'Piasecki', 'Marciniak', 'Wróblewski', 'Dąbek', 'Stefaniak', 'Mikołajczyk', 'Szczepański', 'Tomczak',
                        'Kucharski', 'Kurowski', 'Ziółkowski', 'Cieślak', 'Kłos', 'Urban', 'Sokołowski', 'Łuczak', 'Kaczor', 'Nawrocki',
                        'Zakrzewski', 'Dziedzic', 'Krzeszowski', 'Głowacki', 'Sosnowski', 'Jasiński', 'Kaczorowski', 'Kacprzak', 'Wieczorkowski', 'Czech',
                        'Słowik', 'Przybylski', 'Jagodziński', 'Niemiec', 'Niemczyk', 'Kalinowski', 'Długosz', 'Stanisławski', 'Dobrowolski', 'Borkowski'
                      ]
                },
                'female': {
                    'first': [
                        'Anna', 'Maria', 'Katarzyna', 'Małgorzata', 'Agnieszka', 'Barbara', 'Krystyna', 'Ewa', 'Elżbieta', 'Joanna',
                        'Zofia', 'Jadwiga', 'Aleksandra', 'Teresa', 'Magdalena', 'Danuta', 'Urszula', 'Halina', 'Irena', 'Bożena',
                        'Wanda', 'Renata', 'Genowefa', 'Helena', 'Beata', 'Marianna', 'Kinga', 'Stanisława', 'Kazimiera', 'Jolanta',
                        'Natalia', 'Justyna', 'Monika', 'Lidia', 'Gabriela', 'Patrycja', 'Marta', 'Aneta', 'Anita', 'Dorota',
                        'Elwira', 'Agata', 'Wioletta', 'Krystyna', 'Alicja', 'Aurelia', 'Józefa', 'Róża', 'Iwona', 'Leokadia',
                        'Czesława', 'Emilia', 'Zuzanna', 'Hanna', 'Emilia', 'Liliana', 'Karolina', 'Renata', 'Marzena', 'Izabela',
                        'Dominika', 'Kamila', 'Paulina', 'Sylwia', 'Wiktoria', 'Ewelina', 'Nina', 'Marcelina', 'Klaudia', 'Edyta',
                        'Daria', 'Kornelia', 'Łucja', 'Katarzyna', 'Agnieszka', 'Jadwiga', 'Anna', 'Teresa', 'Karolina', 'Dorota',
                        'Marzena', 'Monika', 'Zuzanna', 'Ewa', 'Wioletta', 'Patrycja', 'Barbara', 'Natalia', 'Jolanta', 'Kinga',
                        'Magdalena', 'Alicja', 'Izabela', 'Kamila', 'Lidia', 'Aleksandra', 'Olga', 'Renata', 'Emilia', 'Oliwia'
                      ],
                    'second': [
                        'Nowak', 'Kowalski', 'Wiśniewski', 'Dąbrowski', 'Lewandowski', 'Wójcik', 'Kamińska', 'Kowalczyk', 'Zielińska', 'Szymańska',
                        'Woźniak', 'Kozłowska', 'Jankowska', 'Wojciechowska', 'Kwiatkowska', 'Kaczmarek', 'Mazur', 'Krawczyk', 'Piotrowska', 'Grabowska',
                        'Nowakowska', 'Pawłowska', 'Michalska', 'Nowicka', 'Adamczyk', 'Dudek', 'Zając', 'Wieczorek', 'Jabłońska', 'Król',
                        'Majewska', 'Olszewska', 'Jaworska', 'Wróbel', 'Malinowska', 'Pawlak', 'Witkowska', 'Walczak', 'Stępień', 'Górska',
                        'Rutkowska', 'Michalak', 'Sikora', 'Ostrowska', 'Baran', 'Duda', 'Szewczyk', 'Tomaszewska', 'Pająk', 'Szewczyk',
                        'Czarnecka', 'Kubiak', 'Brzezińska', 'Bednarek', 'Mazurek', 'Kołodziej', 'Bąk', 'Krajewska', 'Czerwińska', 'Kaczmarczyk',
                        'Makowska', 'Zalewska', 'Piasecka', 'Marciniak', 'Wróblewska', 'Dąbrowska', 'Stefaniak', 'Mikołajczyk', 'Szczepańska', 'Tomczak',
                        'Kucharska', 'Kurowska', 'Ziółkowska', 'Cieślak', 'Kłos', 'Urban', 'Sokołowska', 'Łuczak', 'Kaczor', 'Nawrocka',
                        'Zakrzewska', 'Dziedzic', 'Krzeszowska', 'Głowacka', 'Sosnowska', 'Jasińska', 'Kaczorowska', 'Kacprzak', 'Wieczorkowska', 'Czech',
                        'Słowik', 'Przybylska', 'Jagodzińska', 'Niemiec', 'Niemczyk', 'Kalinowska', 'Długosz', 'Stanisławska', 'Dobrowolska', 'Borkowska'
                      ],
                }
            }
        }, 'native': {
            'sex': {
                'male': {
                    'first': [
                        'Adam', 'Piotr', 'Krzysztof', 'Andrzej', 'Jan', 'Marek', 'Tomasz', 'Michał', 'Jerzy', 'Zbigniew',
                        'Ryszard', 'Kazimierz', 'Dariusz', 'Henryk', 'Edward', 'Grzegorz', 'Jacek', 'Mariusz', 'Włodzimierz', 'Robert',
                        'Stanisław', 'Mieczysław', 'Leszek', 'Witold', 'Maciej', 'Wojciech', 'Paweł', 'Zdzisław', 'Kamil', 'Bartłomiej',
                        'Józef', 'Kamil', 'Rafał', 'Bogdan', 'Aleksander', 'Mikołaj', 'Lech', 'Tadeusz', 'Władysław', 'Jarosław',
                        'Artur', 'Łukasz', 'Adrian', 'Janusz', 'Zygmunt', 'Roman', 'Czesław', 'Wiesław', 'Bogusław', 'Sławomir',
                        'Radosław', 'Dawid', 'Filip', 'Hubert', 'Bruno', 'Norbert', 'Sebastian', 'Mateusz', 'Maksymilian', 'Damian',
                        'Konrad', 'Karol', 'Marcin', 'Dawid', 'Arkadiusz', 'Dominik', 'Marek', 'Patryk', 'Radosław', 'Eryk',
                        'Karol', 'Marian', 'Bartosz', 'Konrad', 'Waldemar', 'Juliusz', 'Łukasz', 'Oskar', 'Paweł', 'Szymon',
                        'Kacper', 'Mikołaj', 'Igor', 'Tymoteusz', 'Olivier', 'Zbigniew', 'Rafał', 'Wojciech', 'Andrzej', 'Krzysztof',
                        'Łukasz', 'Bartosz', 'Mateusz', 'Piotr', 'Jakub', 'Karol', 'Szymon', 'Filip', 'Jan', 'Adrian'
                      ],
                    'second': [
                        'Nowak', 'Kowalski', 'Wiśniewski', 'Dąbrowski', 'Lewandowski', 'Wójcik', 'Kamiński', 'Kowalczyk', 'Zieliński', 'Szymański',
                        'Woźniak', 'Kozłowski', 'Jankowski', 'Wojciechowski', 'Kwiatkowski', 'Kaczmarek', 'Mazur', 'Krawczyk', 'Piotrowski', 'Grabowski',
                        'Nowakowski', 'Pawłowski', 'Michalski', 'Nowicki', 'Adamczyk', 'Dudek', 'Zając', 'Wieczorek', 'Jabłoński', 'Król',
                        'Majewski', 'Olszewski', 'Jaworski', 'Wróbel', 'Malinowski', 'Pawlak', 'Witkowski', 'Walczak', 'Stępień', 'Górski',
                        'Rutkowski', 'Michalak', 'Sikora', 'Ostrowski', 'Baran', 'Duda', 'Szewczyk', 'Tomaszewski', 'Pająk', 'Szewczyk',
                        'Czarnecki', 'Kubiak', 'Brzeziński', 'Bednarek', 'Mazurek', 'Kołodziej', 'Bąk', 'Krajewski', 'Czerwiński', 'Kaczmarczyk',
                        'Makowski', 'Zalewski', 'Piasecki', 'Marciniak', 'Wróblewski', 'Dąbek', 'Stefaniak', 'Mikołajczyk', 'Szczepański', 'Tomczak',
                        'Kucharski', 'Kurowski', 'Ziółkowski', 'Cieślak', 'Kłos', 'Urban', 'Sokołowski', 'Łuczak', 'Kaczor', 'Nawrocki',
                        'Zakrzewski', 'Dziedzic', 'Krzeszowski', 'Głowacki', 'Sosnowski', 'Jasiński', 'Kaczorowski', 'Kacprzak', 'Wieczorkowski', 'Czech',
                        'Słowik', 'Przybylski', 'Jagodziński', 'Niemiec', 'Niemczyk', 'Kalinowski', 'Długosz', 'Stanisławski', 'Dobrowolski', 'Borkowski'
                      ]
                },
                'female': {
                    'first': [
                        'Anna', 'Maria', 'Katarzyna', 'Małgorzata', 'Agnieszka', 'Barbara', 'Krystyna', 'Ewa', 'Elżbieta', 'Joanna',
                        'Zofia', 'Jadwiga', 'Aleksandra', 'Teresa', 'Magdalena', 'Danuta', 'Urszula', 'Halina', 'Irena', 'Bożena',
                        'Wanda', 'Renata', 'Genowefa', 'Helena', 'Beata', 'Marianna', 'Kinga', 'Stanisława', 'Kazimiera', 'Jolanta',
                        'Natalia', 'Justyna', 'Monika', 'Lidia', 'Gabriela', 'Patrycja', 'Marta', 'Aneta', 'Anita', 'Dorota',
                        'Elwira', 'Agata', 'Wioletta', 'Krystyna', 'Alicja', 'Aurelia', 'Józefa', 'Róża', 'Iwona', 'Leokadia',
                        'Czesława', 'Emilia', 'Zuzanna', 'Hanna', 'Emilia', 'Liliana', 'Karolina', 'Renata', 'Marzena', 'Izabela',
                        'Dominika', 'Kamila', 'Paulina', 'Sylwia', 'Wiktoria', 'Ewelina', 'Nina', 'Marcelina', 'Klaudia', 'Edyta',
                        'Daria', 'Kornelia', 'Łucja', 'Katarzyna', 'Agnieszka', 'Jadwiga', 'Anna', 'Teresa', 'Karolina', 'Dorota',
                        'Marzena', 'Monika', 'Zuzanna', 'Ewa', 'Wioletta', 'Patrycja', 'Barbara', 'Natalia', 'Jolanta', 'Kinga',
                        'Magdalena', 'Alicja', 'Izabela', 'Kamila', 'Lidia', 'Aleksandra', 'Olga', 'Renata', 'Emilia', 'Oliwia'
                      ],
                    'second': [
                        'Nowak', 'Kowalski', 'Wiśniewski', 'Dąbrowski', 'Lewandowski', 'Wójcik', 'Kamińska', 'Kowalczyk', 'Zielińska', 'Szymańska',
                        'Woźniak', 'Kozłowska', 'Jankowska', 'Wojciechowska', 'Kwiatkowska', 'Kaczmarek', 'Mazur', 'Krawczyk', 'Piotrowska', 'Grabowska',
                        'Nowakowska', 'Pawłowska', 'Michalska', 'Nowicka', 'Adamczyk', 'Dudek', 'Zając', 'Wieczorek', 'Jabłońska', 'Król',
                        'Majewska', 'Olszewska', 'Jaworska', 'Wróbel', 'Malinowska', 'Pawlak', 'Witkowska', 'Walczak', 'Stępień', 'Górska',
                        'Rutkowska', 'Michalak', 'Sikora', 'Ostrowska', 'Baran', 'Duda', 'Szewczyk', 'Tomaszewska', 'Pająk', 'Szewczyk',
                        'Czarnecka', 'Kubiak', 'Brzezińska', 'Bednarek', 'Mazurek', 'Kołodziej', 'Bąk', 'Krajewska', 'Czerwińska', 'Kaczmarczyk',
                        'Makowska', 'Zalewska', 'Piasecka', 'Marciniak', 'Wróblewska', 'Dąbrowska', 'Stefaniak', 'Mikołajczyk', 'Szczepańska', 'Tomczak',
                        'Kucharska', 'Kurowska', 'Ziółkowska', 'Cieślak', 'Kłos', 'Urban', 'Sokołowska', 'Łuczak', 'Kaczor', 'Nawrocka',
                        'Zakrzewska', 'Dziedzic', 'Krzeszowska', 'Głowacka', 'Sosnowska', 'Jasińska', 'Kaczorowska', 'Kacprzak', 'Wieczorkowska', 'Czech',
                        'Słowik', 'Przybylska', 'Jagodzińska', 'Niemiec', 'Niemczyk', 'Kalinowska', 'Długosz', 'Stanisławska', 'Dobrowolska', 'Borkowska'
                      ],
                }
            }
        }},
    'Portugal': { 
      'en': {
            'sex': {
                'male': {
                    'first': [
                        'António', 'João', 'José', 'Luís', 'Miguel', 'Carlos', 'Manuel', 'Paulo', 'Fernando', 'Rui',
                        'Pedro', 'André', 'Ricardo', 'Daniel', 'Nuno', 'Bruno', 'Jorge', 'Eduardo', 'Vítor', 'Alberto',
                        'Fábio', 'Sérgio', 'Gonçalo', 'Hugo', 'Artur', 'Jaime', 'Dinis', 'Leonardo', 'António', 'Rafael',
                        'Diogo', 'Mário', 'Francisco', 'Bernardo', 'Tomás', 'Gabriel', 'Alexandre', 'Rúben', 'Luis', 'José',
                        'Joaquim', 'Afonso', 'Nélson', 'David', 'Adriano', 'Júlio', 'Raul', 'Ivan', 'Renato', 'Amílcar',
                        'Simão', 'Gualter', 'Filipe', 'Salvador', 'Emanuel', 'Xavier', 'Gil', 'Ivo', 'Cristiano', 'Valentim',
                        'Narciso', 'Domingos', 'Abel', 'Teófilo', 'Eugénio', 'César', 'Elias', 'Gustavo', 'Octávio', 'Rodrigo',
                        'Aurélio', 'Júlio', 'Osvaldo', 'Lino', 'Sílvio', 'Virgílio', 'Nicolau', 'Aristides', 'Cândido', 'Estêvão',
                        'Félix', 'Isidro', 'Leandro', 'Renato', 'Zé', 'Bartolomeu', 'Ciro', 'Dário', 'Edgar', 'Frederico',
                        'Gastão', 'Honório', 'Ícaro', 'Joaquim', 'Kévim', 'Lázaro', 'Márcio', 'Noé', 'Oscar', 'Péricles'
                      ],
                    'second': [
                        'Silva', 'Santos', 'Oliveira', 'Pereira', 'Costa', 'Rodrigues', 'Martins', 'Ferreira', 'Almeida', 'Ribeiro',
                        'Pinto', 'Carvalho', 'Teixeira', 'Alves', 'Cunha', 'Mendes', 'Araújo', 'Dias', 'Castro', 'Gomes',
                        'Nunes', 'Lima', 'Barbosa', 'Fernandes', 'Marques', 'Gonçalves', 'Reis', 'Guimarães', 'Freitas', 'Sousa',
                        'Machado', 'Neves', 'Soares', 'Lourenço', 'Correia', 'Ramos', 'Jesus', 'Vieira', 'Monteiro', 'Cardoso',
                        'Grilo', 'Cruz', 'Gouveia', 'Baptista', 'Miranda', 'Faria', 'Madeira', 'Dantas', 'Vargas', 'Mesquita',
                        'Couto', 'Fonseca', 'Brito', 'Lopes', 'Pacheco', 'Leite', 'Peixoto', 'Antunes', 'Veiga', 'Abrantes',
                        'Maia', 'Guerreiro', 'Borges', 'Pestana', 'Quintana', 'Salgado', 'Andrade', 'Tavares', 'Rocha', 'Serra',
                        'Aguiar', 'Coelho', 'Cavalcanti', 'Carmo', 'Cabral', 'Bezerra', 'Barros', 'Vasconcelos', 'Xavier', 'Lacerda',
                        'Prado', 'Queirós', 'Fraga', 'Vieira', 'Mota', 'Valente', 'Dantas', 'Ximenes', 'Caldeira', 'Junqueira'
                      ]
                },
                'female': {
                    'first': [
                        'Ana', 'Maria', 'Joana', 'Isabel', 'Sofia', 'Carla', 'Helena', 'Margarida', 'Teresa', 'Rita',
                        'Catarina', 'Inês', 'Laura', 'Patrícia', 'Diana', 'Eva', 'Beatriz', 'Leonor', 'Lara', 'Cláudia',
                        'Daniela', 'Rosa', 'Andreia', 'Mónica', 'Marta', 'Fátima', 'Natália', 'Sílvia', 'Lúcia', 'Conceição',
                        'Paula', 'Silvana', 'Tânia', 'Mafalda', 'Ana Maria', 'Fernanda', 'Liliana', 'Elsa', 'Adriana', 'Gabriela',
                        'Vera', 'Carmo', 'Dalila', 'Iara', 'Marina', 'Sónia', 'Linda', 'Eunice', 'Carolina', 'Dulce',
                        'Filomena', 'Graciete', 'Rute', 'Luciana', 'Juliana', 'Vânia', 'Beatriz', 'Ema', 'Renata', 'Bianca',
                        'Sara', 'Cátia', 'Tatiana', 'Irina', 'Bárbara', 'Antónia', 'Amélia', 'Constança', 'Júlia', 'Zélia',
                        'Suzana', 'Elisa', 'Lurdes', 'Odete', 'Violeta', 'Alcina', 'Lucília', 'Marília', 'Áurea', 'Ofélia',
                        'Rosária', 'Teodora', 'Lisete', 'Jacinta', 'Valéria', 'Graça', 'Mara', 'Celeste', 'Hermínia', 'Isilda',
                        'Liana', 'Regina', 'Hélia', 'Célia', 'Luísa', 'Olívia', 'Rosa Maria', 'Simone', 'Ester', 'Henriqueta'
                      ],
                    'second': [
                        'Silva', 'Santos', 'Oliveira', 'Pereira', 'Costa', 'Rodrigues', 'Martins', 'Ferreira', 'Almeida', 'Ribeiro',
                        'Pinto', 'Carvalho', 'Teixeira', 'Alves', 'Cunha', 'Mendes', 'Araújo', 'Dias', 'Castro', 'Gomes',
                        'Nunes', 'Lima', 'Barbosa', 'Fernandes', 'Marques', 'Gonçalves', 'Reis', 'Guimarães', 'Freitas', 'Sousa',
                        'Machado', 'Neves', 'Soares', 'Lourenço', 'Correia', 'Ramos', 'Jesus', 'Vieira', 'Monteiro', 'Cardoso',
                        'Grilo', 'Cruz', 'Gouveia', 'Baptista', 'Miranda', 'Faria', 'Madeira', 'Dantas', 'Vargas', 'Mesquita',
                        'Couto', 'Fonseca', 'Brito', 'Lopes', 'Pacheco', 'Leite', 'Peixoto', 'Antunes', 'Veiga', 'Abrantes',
                        'Maia', 'Guerreiro', 'Borges', 'Pestana', 'Quintana', 'Salgado', 'Andrade', 'Tavares', 'Rocha', 'Serra',
                        'Aguiar', 'Coelho', 'Cavalcanti', 'Carmo', 'Cabral', 'Bezerra', 'Barros', 'Vasconcelos', 'Xavier', 'Lacerda',
                        'Prado', 'Queirós', 'Fraga', 'Vieira', 'Mota', 'Valente', 'Dantas', 'Ximenes', 'Caldeira', 'Junqueira'
                      ],
                }
            }
        }, 'native': {
            'sex': {
                'male': {
                    'first': [
                      'Afonso', 'André', 'Bernardo', 'Carlos', 'Daniel', 'Duarte', 'Eduardo', 'Fernando', 'Gonçalo', 'Henrique',
                      'Ivo', 'João', 'Luís', 'Manuel', 'Nuno', 'Óscar', 'Pedro', 'Quim', 'Ricardo', 'Sérgio',
                      'Tomás', 'Umberto', 'Vasco', 'Xavier', 'Yago', 'Zé', 'Adriano', 'Bruno', 'Cristiano', 'Dinis',
                      'Elias', 'Frederico', 'Gabriel', 'Hugo', 'Ivan', 'Joel', 'Leandro', 'Miguel', 'Nelson', 'Orlando',
                      'Paulo', 'Rafael', 'Simão', 'Tiago', 'Uriel', 'Valentim', 'Wilson', 'Yuri', 'Zacarias', 'Abel'
                  ],
                    'second': [
                      'Silva', 'Santos', 'Oliveira', 'Pereira', 'Costa', 'Rodrigues', 'Martins', 'Ferreira', 'Almeida', 'Ribeiro',
                      'Pinto', 'Carvalho', 'Teixeira', 'Alves', 'Cunha', 'Mendes', 'Araújo', 'Dias', 'Castro', 'Gomes',
                      'Nunes', 'Lima', 'Barbosa', 'Fernandes', 'Marques', 'Gonçalves', 'Reis', 'Guimarães', 'Freitas', 'Sousa',
                      'Machado', 'Neves', 'Soares', 'Lourenço', 'Correia', 'Ramos', 'Jesus', 'Vieira', 'Monteiro', 'Cardoso',
                      'Grilo', 'Cruz', 'Gouveia', 'Baptista', 'Miranda', 'Faria', 'Madeira', 'Dantas', 'Vargas', 'Mesquita',
                      'Couto', 'Fonseca', 'Brito', 'Lopes', 'Pacheco', 'Leite', 'Peixoto', 'Antunes', 'Veiga', 'Abrantes',
                      'Maia', 'Guerreiro', 'Borges', 'Pestana', 'Quintana', 'Salgado', 'Andrade', 'Tavares', 'Rocha', 'Serra',
                      'Aguiar', 'Coelho', 'Cavalcanti', 'Carmo', 'Cabral', 'Bezerra', 'Barros', 'Vasconcelos', 'Xavier', 'Lacerda',
                      'Prado', 'Queirós', 'Fraga', 'Vieira', 'Mota', 'Valente', 'Dantas', 'Ximenes', 'Caldeira', 'Junqueira'
                    ]
                },
                'female': {
                    'first': [
                      'Ana', 'Beatriz', 'Carolina', 'Daniela', 'Elisa', 'Fátima', 'Gabriela', 'Helena', 'Inês', 'Joana',
                      'Lara', 'Mariana', 'Natália', 'Olívia', 'Patrícia', 'Rita', 'Sofia', 'Teresa', 'Úrsula', 'Vânia',
                      'Xana', 'Yara', 'Zara', 'Andreia', 'Bianca', 'Clara', 'Débora', 'Érica', 'Filipa', 'Gisela',
                      'Heloísa', 'Íris', 'Jéssica', 'Kátia', 'Lúcia', 'Marta', 'Nádia', 'Ofélia', 'Paula', 'Quitéria',
                      'Raquel', 'Sara', 'Tânia', 'Úrsula', 'Vanda', 'Wanda', 'Xénia', 'Yasmin', 'Zélia', 'Adriana'
                  ],
                    'second': [
                      'Silva', 'Santos', 'Oliveira', 'Pereira', 'Costa', 'Rodrigues', 'Martins', 'Ferreira', 'Almeida', 'Ribeiro',
                      'Pinto', 'Carvalho', 'Teixeira', 'Alves', 'Cunha', 'Mendes', 'Araújo', 'Dias', 'Castro', 'Gomes',
                      'Nunes', 'Lima', 'Barbosa', 'Fernandes', 'Marques', 'Gonçalves', 'Reis', 'Guimarães', 'Freitas', 'Sousa',
                      'Machado', 'Neves', 'Soares', 'Lourenço', 'Correia', 'Ramos', 'Jesus', 'Vieira', 'Monteiro', 'Cardoso',
                      'Grilo', 'Cruz', 'Gouveia', 'Baptista', 'Miranda', 'Faria', 'Madeira', 'Dantas', 'Vargas', 'Mesquita',
                      'Couto', 'Fonseca', 'Brito', 'Lopes', 'Pacheco', 'Leite', 'Peixoto', 'Antunes', 'Veiga', 'Abrantes',
                      'Maia', 'Guerreiro', 'Borges', 'Pestana', 'Quintana', 'Salgado', 'Andrade', 'Tavares', 'Rocha', 'Serra',
                      'Aguiar', 'Coelho', 'Cavalcanti', 'Carmo', 'Cabral', 'Bezerra', 'Barros', 'Vasconcelos', 'Xavier', 'Lacerda',
                      'Prado', 'Queirós', 'Fraga', 'Vieira', 'Mota', 'Valente', 'Dantas', 'Ximenes', 'Caldeira', 'Junqueira'
                    ],
                }
            }
        }},
    'Romania': { 
      'en': {
            'sex': {
                'male': {
                    'first': [
                        'Ion', 'Mihai', 'Andrei', 'Florin', 'Cristian', 'Gabriel', 'Sorin', 'Adrian', 'Dorin', 'Bogdan',
                        'Constantin', 'Cătălin', 'Vladimir', 'Valentin', 'Eugen', 'Alexandru', 'Gheorghe', 'Cornel', 'Dumitru', 'Dorel',
                        'Vasile', 'Marian', 'Daniel', 'Nicolae', 'Răzvan', 'Viorel', 'Victor', 'Costel', 'Ciprian', 'Radu',
                        'Laurențiu', 'Lucian', 'Mihail', 'Bogdan', 'Tiberiu', 'Ștefan', 'Cristinel', 'George', 'Silvian', 'Marius',
                        'Valeriu', 'Doru', 'Sebastian', 'Cristea', 'Darian', 'Teodor', 'Octavian', 'Paul', 'Vlad', 'Horia',
                        'Cosmin', 'Ionel', 'Emilian', 'Alin', 'Nelu', 'Gelu', 'Eduard', 'Ionuț', 'Radu', 'Cezar',
                        'Dacian', 'Costin', 'Robert', 'Ovidiu', 'Ionuț', 'Valerian', 'Sergiu', 'Gavril', 'Valeriu', 'Zoltan',
                        'Valentin', 'Emil', 'Sabin', 'Corneliu', 'Alexandru', 'Darian', 'Sebastian', 'Viorel', 'Cristian', 'Ion',
                        'Mihai', 'Andrei', 'Laurențiu', 'Valentin', 'Răzvan', 'Dorin', 'Marian', 'Ciprian', 'Victor', 'Gabriel'
                      ],
                    'second': [
                        'Popescu', 'Ionescu', 'Popa', 'Dumitru', 'Stanciu', 'Pop', 'Dima', 'Georgescu', 'Constantin', 'Mihai',
                        'Dinu', 'Radu', 'Gheorghiu', 'Stan', 'Neagu', 'Bălan', 'Ioniță', 'Florea', 'Stoica', 'Voicu',
                        'Botez', 'Badea', 'Vasile', 'Cristescu', 'Cătănescu', 'Nistor', 'Florescu', 'Bălănescu', 'Andrei', 'Niculescu',
                        'Barbu', 'Istrate', 'Nicolae', 'Păun', 'Diaconu', 'Petrescu', 'Bucur', 'Iacob', 'Iordache', 'Lungu',
                        'Negoiță', 'Bogdan', 'Munteanu', 'Tudor', 'Enache', 'Gavril', 'Tănase', 'Vlad', 'Diaconescu', 'Sava',
                        'Petrovici', 'Ștefan', 'Moldovan', 'Dumitrache', 'Antonescu', 'Grosu', 'Grigorescu', 'Teodoru', 'Cîrțu', 'Bădulescu',
                        'Iancu', 'Pârvu', 'Mocanu', 'Zamfir', 'Șerban', 'Pascu', 'Năstase', 'Duca', 'Filip', 'Vlăduț',
                        'Cornea', 'Dobre', 'Istrate', 'Ungureanu', 'Bârsan', 'Frățilă', 'Toma', 'Bratu', 'Șandor', 'Iancu',
                        'Cazacu', 'Cristea', 'Pașca', 'Bota', 'Filipescu', 'Cristofor', 'Chiriac', 'Oprea', 'Stănescu', 'Pavel',
                        'Irimia', 'Călugăreanu', 'Dumitrescu', 'Mureșan', 'Gherman', 'Vlaicu', 'Țăranu', 'Ardeleanu', 'Rus', 'Biro'
                      ]
                },
                'female': {
                    'first': [
                        'Maria', 'Elena', 'Ioana', 'Ana', 'Cătălina', 'Larisa', 'Andreea', 'Elena', 'Mihaela', 'Liliana',
                        'Gabriela', 'Iulia', 'Raluca', 'Cristina', 'Simona', 'Alexandra', 'Daniela', 'Diana', 'Camelia', 'Felicia',
                        'Alina', 'Viorica', 'Luminița', 'Adina', 'Teodora', 'Florentina', 'Nicoleta', 'Oana', 'Monica', 'Gabriela',
                        'Georgiana', 'Eugenia', 'Adela', 'Denisa', 'Roxana', 'Anda', 'Magdalena', 'Claudia', 'Ema', 'Rozalia',
                        'Loredana', 'Ramona', 'Carmen', 'Violeta', 'Cristiana', 'Marina', 'Ionela', 'Anamaria', 'Corina', 'Ioana',
                        'Doina', 'Sorina', 'Elena', 'Valentina', 'Silvia', 'Livia', 'Cornelia', 'Ileana', 'Ecaterina', 'Irina',
                        'Dana', 'Lavinia', 'Stela', 'Gina', 'Iustina', 'Ancuța', 'Emilia', 'Dorina', 'Eugenia', 'Mirela',
                        'Ligia', 'Rozalia', 'Melania', 'Eliza', 'Lucia', 'Cristina', 'Victoria', 'Gabriela', 'Ana', 'Larisa',
                        'Elena', 'Alexandra', 'Liana', 'Mihaela', 'Andreea', 'Claudia', 'Teodora', 'Iulia', 'Sorina', 'Magdalena'
                      ],
                    'second': [
                        'Popescu', 'Ionescu', 'Popa', 'Dumitru', 'Stanciu', 'Pop', 'Dima', 'Georgescu', 'Constantin', 'Mihai',
                        'Dinu', 'Radu', 'Gheorghiu', 'Stan', 'Neagu', 'Bălan', 'Ioniță', 'Florea', 'Stoica', 'Voicu',
                        'Botez', 'Badea', 'Vasile', 'Cristescu', 'Cătănescu', 'Nistor', 'Florescu', 'Bălănescu', 'Andrei', 'Niculescu',
                        'Barbu', 'Istrate', 'Nicolae', 'Păun', 'Diaconu', 'Petrescu', 'Bucur', 'Iacob', 'Iordache', 'Lungu',
                        'Negoiță', 'Bogdan', 'Munteanu', 'Tudor', 'Enache', 'Gavril', 'Tănase', 'Vlad', 'Diaconescu', 'Sava',
                        'Petrovici', 'Ștefan', 'Moldovan', 'Dumitrache', 'Antonescu', 'Grosu', 'Grigorescu', 'Teodoru', 'Cîrțu', 'Bădulescu',
                        'Iancu', 'Pârvu', 'Mocanu', 'Zamfir', 'Șerban', 'Pascu', 'Năstase', 'Duca', 'Filip', 'Vlăduț',
                        'Cornea', 'Dobre', 'Istrate', 'Ungureanu', 'Bârsan', 'Frățilă', 'Toma', 'Bratu', 'Șandor', 'Iancu',
                        'Cazacu', 'Cristea', 'Pașca', 'Bota', 'Filipescu', 'Cristofor', 'Chiriac', 'Oprea', 'Stănescu', 'Pavel',
                        'Irimia', 'Călugăreanu', 'Dumitrescu', 'Mureșan', 'Gherman', 'Vlaicu', 'Țăranu', 'Ardeleanu', 'Rus', 'Biro'
                      ],
                }
            }
        }, 'native': {
            'sex': {
                'male': {
                    'first': [
                      "Andrei", "Alexandru", "Cristian", "Mihai", "Gabriel", 
                      "Daniel", "Ion", "Vasile", "Florin", "Ștefan", 
                      "Ioan", "George", "Radu", "Adrian", "Marian", 
                      "Paul", "Nicolae", "Bogdan", "Victor", "Cătălin",
                      "Sorin", "Claudiu", "Valentin", "Costin", "Nicu",
                      "Răzvan", "Iulian", "Lucian", "Dragoș", "Cornel",
                      "Constantin", "Dorin", "Eugen", "Gheorghe", "Horia",
                      "Iancu", "Liviu", "Marin", "Nelu"
                  ],
                    'second': [
                      "Popescu", "Ionescu", "Popa", "Dumitru", "Stoica",
                      "Stanciu", "Pavel", "Gheorghiu", "Constantin", "Bălan",
                      "Dumitrache", "Cojocaru", "Tudor", "Mihai", "Botez",
                      "Dragomir", "Marin", "Gavrilescu", "Munteanu", "Neacșu",
                      "Nistor", "Lazar", "Iordache", "Moldovan", "Barbu",
                      "Stănescu", "Alexandrescu", "Enescu", "Costache", "Diaconu",
                      "Florea", "Cristea", "Ioniță", "Antonescu", "Moise",
                      "Preda", "Șerban", "Pârvu", "Dima"
                  ]
                },
                'female': {
                    'first': [
                      "Maria", "Elena", "Ioana", "Gabriela", "Andreea", 
                      "Ana", "Cristina", "Mihaela", "Alina", "Roxana", 
                      "Diana", "Daniela", "Laura", "Silvia", "Raluca", 
                      "Alexandra", "Adriana", "Camelia", "Loredana", "Violeta",
                      "Nicoleta", "Mădălina", "Georgiana", "Irina", "Bianca",
                      "Oana", "Simona", "Carmen", "Raluca", "Iulia",
                      "Anca", "Denisa", "Elena", "Florencia", "Geta",
                      "Ilinca", "Jenica", "Lavinia", "Mara"
                  ],
                    'second': [
                      "Popescu", "Ionescu", "Popa", "Dumitru", "Stoica",
                      "Stanciu", "Pavel", "Gheorghiu", "Constantin", "Bălan",
                      "Dumitrache", "Cojocaru", "Tudor", "Mihai", "Botez",
                      "Dragomir", "Marin", "Gavrilescu", "Munteanu", "Neacșu",
                      "Nistor", "Lazar", "Iordache", "Moldovan", "Barbu",
                      "Stănescu", "Alexandrescu", "Enescu", "Costache", "Diaconu",
                      "Florea", "Cristea", "Ioniță", "Antonescu", "Moise",
                      "Preda", "Șerban", "Pârvu", "Dima"
                  ],
                }
            }
        }},
    'Saudi Arabia': { 'en': {
            'sex': {
                'male': {
                    'first': [
                        'Abdullah', 'Mohammed', 'Ahmed', 'Saud', 'Fahad', 'Khalid', 'Nasser', 'Salem', 'Majid', 'Bandar',
                        'Saad', 'Yousef', 'Ali', 'Omar', 'Turki', 'Hassan', 'Hussein', 'Abdulaziz', 'Sultan', 'Meshal',
                        'Faisal', 'Mansour', 'Riyad', 'Majed', 'Hamad', 'Khaled', 'Jaber', 'Abdulrahman', 'Nawaf', 'Abdulmajeed',
                        'Muteb', 'Talal', 'Abdulaziz', 'Mohammed', 'Abdullah', 'Fahad', 'Saud', 'Khalid', 'Ahmed', 'Majid', 'Salem',
                        'Bandar', 'Yousef', 'Saad', 'Ali', 'Omar', 'Turki', 'Hassan', 'Hussein', 'Sultan', 'Meshal',
                        'Faisal', 'Mansour', 'Riyad', 'Majed', 'Hamad', 'Khaled', 'Jaber', 'Abdulrahman', 'Nawaf', 'Abdulmajeed',
                        'Muteb', 'Talal', 'Abdulaziz', 'Mohammed', 'Abdullah', 'Fahad', 'Saud', 'Khalid', 'Ahmed', 'Majid', 'Salem',
                        'Bandar', 'Yousef', 'Saad', 'Ali', 'Omar', 'Turki', 'Hassan', 'Hussein', 'Abdulaziz', 'Sultan', 'Meshal',
                        'Faisal', 'Mansour', 'Riyad', 'Majed', 'Hamad', 'Khaled', 'Jaber', 'Abdulrahman', 'Nawaf', 'Abdulmajeed',
                        'Muteb', 'Talal'
                      ],
                    'second': [
                        'Al-Fahad', 'Al-Saud', 'Al-Mansoor', 'Al-Rashid', 'Al-Nasser', 'Al-Ahmadi', 'Al-Zamil', 'Al-Harbi', 'Al-Mutairi', 'Al-Majed',
                        'Al-Saleh', 'Al-Otaibi', 'Al-Dosari', 'Al-Dawood', 'Al-Shehri', 'Al-Abdullah', 'Al-Sharif', 'Al-Sulaiman', 'Al-Ghamdi', 'Al-Faraj',
                        'Al-Badr', 'Al-Jaber', 'Al-Qahtani', 'Al-Rajhi', 'Al-Dhaheri', 'Al-Muhanna', 'Al-Muhaidib', 'Al-Faisal', 'Al-Suwaidi', 'Al-Hussaini',
                        'Al-Abbas', 'Al-Hariri', 'Al-Khalaf', 'Al-Juhani', 'Al-Mashari', 'Al-Malik', 'Al-Shahrani', 'Al-Ruwaili', 'Al-Ghofaili', 'Al-Qassim',
                        'Al-Jomaih', 'Al-Subaie', 'Al-Mubarak', 'Al-Omair', 'Al-Sabti', 'Al-Tuwaijri', 'Al-Sufyan', 'Al-Ghazzawi', 'Al-Matouq', 'Al-Dafiri',
                        'Al-Dossary', 'Al-Jarallah', 'Al-Harithi', 'Al-Mutlaq', 'Al-Mughni', 'Al-Shangiti', 'Al-Sanea', 'Al-Saadi', 'Al-Dossari', 'Al-Ghurair',
                        'Al-Habib', 'Al-Jabr', "Al-Ma'arik", 'Al-Zahrani', 'Al-Salim', 'Al-Hazmi', 'Al-Ruwaili', 'Al-Musallam', 'Al-Mufarreh', 'Al-Shahrani',
                        'Al-Tamimi', 'Al-Ruwaili', 'Al-Ghanem', 'Al-Farid', 'Al-Faqih', 'Al-Jameel', 'Al-Mutlaq', 'Al-Suwaidan', 'Al-Mahjoub', 'Al-Dosari',
                        'Al-Suwailem', 'Al-Duhaim', 'Al-Sarhan', 'Al-Khayyal', 'Al-Tayyar', 'Al-Bassam', 'Al-Harazi', 'Al-Shammari', 'Al-Khudair', 'Al-Sadhan',
                        'Al-Jassim', 'Al-Tunsi', 'Al-Harthi', 'Al-Qaoud', 'Al-Turki', 'Al-Khaldi', 'Al-Ajmi', 'Al-Salem', 'Al-Khawaji', 'Al-Zahrani'
                      ]
                },
                'female': {
                    'first': [
                        'Fatimah', 'Aisha', 'Khadijah', 'Maryam', 'Sara', 'Noura', 'Hanan', 'Layla', 'Noor', 'Jawaher',
                        'Maha', 'Najla', 'Razan', 'Safia', 'Huda', 'Rawan', 'Hayat', 'Dalal', 'Amal', 'Saja',
                        'Lina', 'Asma', 'Reem', 'Lubna', 'Ghada', 'Amani', 'Faten', 'Samira', 'Nadia', 'Rana',
                        'Muna', 'Mai', 'Hessa', 'Abeer', 'Malak', 'Wafa', 'Zainab', 'Norah', 'Latifah', 'Safia',
                        'Khulood', 'Manal', 'Hadeel', 'Salma', 'Hanan', 'Dana', 'Rasha', 'Wijdan', 'Farida', 'Sawsan',
                        'Nisreen', 'Basmah', 'Asil', 'Maram', 'Lama', 'Ruwaida', 'Raghad', 'Hanan', 'Nahla', 'Mawaddah',
                        'Aseel', 'Maya', 'Buthaina', 'Afaf', 'Dima', 'Joud', 'Shaden', 'Ghaida', 'Hind', 'Fajr',
                        'Sabah', 'Samah', 'Rahaf', 'Joud', 'Nouf', 'Mashael', 'Nada', 'Eman', 'Amira', 'Haya',
                        'Dhoha', 'Rabab', 'Shayma', 'Afrah', 'Shaima', 'Hayam', 'Tahani', 'Sondos', 'Amjad', 'Nawal',
                        'Lubaba', 'Jihan', 'Fayza', 'Mai', 'Rula', 'Bushra', 'Layal', 'Ruwaida', 'Jumana', 'Habiba'
                      ],
                    'second': [
                        'Al-Fahad', 'Al-Saud', 'Al-Mansoor', 'Al-Rashid', 'Al-Nasser', 'Al-Ahmadi', 'Al-Zamil', 'Al-Harbi', 'Al-Mutairi', 'Al-Majed',
                        'Al-Saleh', 'Al-Otaibi', 'Al-Dosari', 'Al-Dawood', 'Al-Shehri', 'Al-Abdullah', 'Al-Sharif', 'Al-Sulaiman', 'Al-Ghamdi', 'Al-Faraj',
                        'Al-Badr', 'Al-Jaber', 'Al-Qahtani', 'Al-Rajhi', 'Al-Dhaheri', 'Al-Muhanna', 'Al-Muhaidib', 'Al-Faisal', 'Al-Suwaidi', 'Al-Hussaini',
                        'Al-Abbas', 'Al-Hariri', 'Al-Khalaf', 'Al-Juhani', 'Al-Mashari', 'Al-Malik', 'Al-Shahrani', 'Al-Ruwaili', 'Al-Ghofaili', 'Al-Qassim',
                        'Al-Jomaih', 'Al-Subaie', 'Al-Mubarak', 'Al-Omair', 'Al-Sabti', 'Al-Tuwaijri', 'Al-Sufyan', 'Al-Ghazzawi', 'Al-Matouq', 'Al-Dafiri',
                        'Al-Dossary', 'Al-Jarallah', 'Al-Harithi', 'Al-Mutlaq', 'Al-Mughni', 'Al-Shangiti', 'Al-Sanea', 'Al-Saadi', 'Al-Dossari', 'Al-Ghurair',
                        'Al-Habib', 'Al-Jabr', "Al-Ma'arik", 'Al-Zahrani', 'Al-Salim', 'Al-Hazmi', 'Al-Ruwaili', 'Al-Musallam', 'Al-Mufarreh', 'Al-Shahrani',
                        'Al-Tamimi', 'Al-Ruwaili', 'Al-Ghanem', 'Al-Farid', 'Al-Faqih', 'Al-Jameel', 'Al-Mutlaq', 'Al-Suwaidan', 'Al-Mahjoub', 'Al-Dosari',
                        'Al-Suwailem', 'Al-Duhaim', 'Al-Sarhan', 'Al-Khayyal', 'Al-Tayyar', 'Al-Bassam', 'Al-Harazi', 'Al-Shammari', 'Al-Khudair', 'Al-Sadhan',
                        'Al-Jassim', 'Al-Tunsi', 'Al-Harthi', 'Al-Qaoud', 'Al-Turki', 'Al-Khaldi', 'Al-Ajmi', 'Al-Salem', 'Al-Khawaji', 'Al-Zahrani'
                      ],
                }
            }
        }, 'native': {
            'sex': {
                'male': {
                    'first': [
                      "محمد", "أحمد", "علي", "يوسف", "عبدالله",
                      "عبدالرحمن", "عبدالعزيز", "عبدالله", "مصطفى", "خالد",
                      "سعيد", "محمود", "حسين", "محمد", "أحمد",
                      "علي", "يوسف", "عبدالله", "عبدالرحمن", "عبدالعزيز",
                      "عبدالله", "مصطفى", "خالد", "سعيد", "محمود",
                      "حسين", "محمد", "أحمد", "علي", "يوسف",
                      "عبدالله", "عبدالرحمن", "عبدالعزيز", "عبدالله", "مصطفى",
                      "خالد", "سعيد", "محمود", "حسين"
                  ],
                    'second': [
                      "المالكي", "العتيبي", "الشمري", "الغامدي", "القحطاني",
                      "الجهني", "الفهد", "العنزي", "المطيري", "السهلي",
                      "الدوسري", "المشعل", "الحربي", "العليان", "العنزي",
                      "العتيق", "الغفيلي", "الدخيل", "الخليفة", "العبدالله",
                      "السديري", "الحريري", "الحميدان", "السالم", "العمران",
                      "الدويش", "البقمي", "الشهراني", "العوفي", "العبيد",
                      "العقيل", "الشدي", "المطوع", "العيسى", "الصقر",
                      "المالك", "السلمان", "المقبل", "الصباح"
                  ]
                },
                'female': {
                    'first': [
                      "فاطمة", "خديجة", "عائشة", "زينب", "مريم",
                      "ليلى", "سارة", "نور", "رقية", "جميلة",
                      "أمل", "سلمى", "نجاة", "هدى", "عائشة",
                      "زهرة", "رانيا", "نورا", "لمى", "داليا",
                      "هالة", "فرح", "لينا", "ياسمين", "مها",
                      "سهى", "ريم", "دنيا", "فريدة", "جوانا",
                      "شهد", "ليلى", "زهراء", "رزان", "أميرة",
                      "رؤى", "سمية", "صفاء", "رحمة"
                  ],
                    'second': [
                      "المالكي", "العتيبي", "الشمري", "الغامدي", "القحطاني",
                      "الجهني", "الفهد", "العنزي", "المطيري", "السهلي",
                      "الدوسري", "المشعل", "الحربي", "العليان", "العنزي",
                      "العتيق", "الغفيلي", "الدخيل", "الخليفة", "العبدالله",
                      "السديري", "الحريري", "الحميدان", "السالم", "العمران",
                      "الدويش", "البقمي", "الشهراني", "العوفي", "العبيد",
                      "العقيل", "الشدي", "المطوع", "العيسى", "الصقر",
                      "المالك", "السلمان", "المقبل", "الصباح"
                  ],
                }
            }
        }},
    'Serbia': { 'en': {
            'sex': {
                'male': {
                    'first': [
                        'Nikola', 'Aleksandar', 'Stefan', 'Marko', 'Jovan', 'Luka', 'Dusan', 'Nemanja', 'Vuk', 'Filip',
                        'Andrija', 'Jovica', 'Milos', 'Djordje', 'Nikola', 'Strahinja', 'Uros', 'Vladimir', 'Stevan', 'Ognjen',
                        'Viktor', 'Bogdan', 'Mihajlo', 'Nenad', 'Igor', 'Nikola', 'Petar', 'Janko', 'Veselin', 'Sava',
                        'Vasilije', 'Aleksa', 'Branislav', 'Nikola', 'Dimitrije', 'Nikola', 'Dusan', 'Nikola', 'Rade', 'Slobodan',
                        'Marko', 'Nemanja', 'Nikola', 'Ilija', 'Milan', 'Nikola', 'Lazar', 'Nikola', 'Zoran', 'Nikola',
                        'Vojin', 'Vukasin', 'Ljubomir', 'Nikola', 'Rastko', 'Jovan', 'Nikola', 'Aleksandar', 'Dusan', 'Stefan',
                        'Nikola', 'Nikola', 'Zdravko', 'Borislav', 'Nikola', 'Obrad', 'Milivoje', 'Nikola', 'Nikola', 'Nikola',
                        'Vlada', 'Nikola', 'Mladen', 'Nikola', 'Ivica', 'Vuk', 'Branimir', 'Nikola', 'Nikola', 'Nikola',
                        'Jasmin', 'Stevan', 'Nikola', 'Dusko', 'Nebojsa', 'Nikola', 'Nikola', 'Vuk', 'Jovan', 'Nikola'
                      ],
                    'second': [
                        'Jovanović', 'Popović', 'Nikolić', 'Đorđević', 'Stojanović', 'Petrović', 'Marković', 'Đukić', 'Stanković', 'Ilić',
                        'Vukotić', 'Krstić', 'Milosavljević', 'Simić', 'Todorović', 'Milanović', 'Kovačević', 'Pavlović', 'Dimitrijević', 'Stefanović',
                        'Ivanović', 'Radovanović', 'Lukić', 'Ristić', 'Zlatković', 'Marinković', 'Stevanović', 'Obradović', 'Aleksić', 'Janković',
                        'Tomović', 'Nenadović', 'Nikolić', 'Gavrilović', 'Ostojić', 'Milić', 'Đorđević', 'Knežević', 'Veselinović', 'Tomić',
                        'Jevtović', 'Cvetković', 'Janković', 'Stanković', 'Đorđević', 'Pantić', 'Nikolić', 'Perić', 'Savić', 'Dabić',
                        'Vuković', 'Đorđević', 'Petković', 'Nikolić', 'Jovanović', 'Radović', 'Ilić', 'Nenadić', 'Ivanović', 'Stanojević',
                        'Bogdanović', 'Lazić', 'Milićević', 'Marković', 'Gajić', 'Krstić', 'Đorđević', 'Petrović', 'Lukić', 'Kostić',
                        'Nikolić', 'Pavlović', 'Vuković', 'Ilić', 'Stanković', 'Nikolić', 'Vukčević', 'Đorđević', 'Stevanović', 'Stojiljković',
                        'Petrović', 'Krsmanović', 'Marinković', 'Đorđević', 'Mitić', 'Ilić', 'Gavrilović', 'Kostić', 'Vukomanović', 'Tasić',
                        'Stanković', 'Vesić', 'Nikolić', 'Ilić', 'Vukotić', 'Petrović', 'Janković', 'Knežević', 'Stojiljković', 'Đorđević'
                      ]
                },
                'female': {
                    'first': [
                        'Ana', 'Jovana', 'Teodora', 'Katarina', 'Milica', 'Stefana', 'Marija', 'Ivana', 'Andjela', 'Tijana',
                        'Tamara', 'Natasa', 'Aleksandra', 'Dunja', 'Jelena', 'Ana', 'Kristina', 'Maja', 'Nina', 'Jovanka',
                        'Ivona', 'Ksenija', 'Tara', 'Sara', 'Ana', 'Jovana', 'Tamara', 'Jovanka', 'Katarina', 'Ivana',
                        'Stefana', 'Ksenija', 'Tijana', 'Teodora', 'Sofija', 'Ivanka', 'Ana', 'Jovana', 'Ivona', 'Nina',
                        'Marija', 'Tea', 'Milica', 'Maja', 'Aleksandra', 'Ana', 'Teodora', 'Katarina', 'Tijana', 'Jovanka',
                        'Ivana', 'Tamara', 'Stefana', 'Nina', 'Jelena', 'Andjela', 'Ivona', 'Ksenija', 'Sara', 'Teodora',
                        'Ana', 'Jovana', 'Milica', 'Kristina', 'Jovanka', 'Ivana', 'Tara', 'Maja', 'Ivona', 'Sofija',
                        'Ana', 'Jelena', 'Teodora', 'Katarina', 'Jovana', 'Aleksandra', 'Tamara', 'Ivona', 'Nina', 'Tijana',
                        'Stefana', 'Sara', 'Tea', 'Ana', 'Jovanka', 'Milica', 'Maja', 'Ivana', 'Sofija', 'Jovana', 'Teodora',
                        'Ana', 'Tijana', 'Stefana', 'Katarina', 'Ivona', 'Jelena', 'Aleksandra', 'Maja', 'Ivana', 'Nina'
                      ],
                    'second': [
                        'Jovanović', 'Popović', 'Nikolić', 'Đorđević', 'Stojanović', 'Petrović', 'Marković', 'Đukić', 'Stanković', 'Ilić',
                        'Vukotić', 'Krstić', 'Milosavljević', 'Simić', 'Todorović', 'Milanović', 'Kovačević', 'Pavlović', 'Dimitrijević', 'Stefanović',
                        'Ivanović', 'Radovanović', 'Lukić', 'Ristić', 'Zlatković', 'Marinković', 'Stevanović', 'Obradović', 'Aleksić', 'Janković',
                        'Tomović', 'Nenadović', 'Nikolić', 'Gavrilović', 'Ostojić', 'Milić', 'Đorđević', 'Knežević', 'Veselinović', 'Tomić',
                        'Jevtović', 'Cvetković', 'Janković', 'Stanković', 'Đorđević', 'Pantić', 'Nikolić', 'Perić', 'Savić', 'Dabić',
                        'Vuković', 'Đorđević', 'Petković', 'Nikolić', 'Jovanović', 'Radović', 'Ilić', 'Nenadić', 'Ivanović', 'Stanojević',
                        'Bogdanović', 'Lazić', 'Milićević', 'Marković', 'Gajić', 'Krstić', 'Đorđević', 'Petrović', 'Lukić', 'Kostić',
                        'Nikolić', 'Pavlović', 'Vuković', 'Ilić', 'Stanković', 'Nikolić', 'Vukčević', 'Đorđević', 'Stevanović', 'Stojiljković',
                        'Petrović', 'Krsmanović', 'Marinković', 'Đorđević', 'Mitić', 'Ilić', 'Gavrilović', 'Kostić', 'Vukomanović', 'Tasić',
                        'Stanković', 'Vesić', 'Nikolić', 'Ilić', 'Vukotić', 'Petrović', 'Janković', 'Knežević', 'Stojiljković', 'Đorđević'
                      ],
                }
            }
        }, 'native': {
            'sex': {
                'male': {
                    'first': [
                      "Марко", "Јован", "Никола", "Петар", "Милош",
                      "Александар", "Љубомир", "Владимир", "Драган", "Милан",
                      "Ненад", "Бојан", "Иван", "Стефан", "Душан",
                      "Живко", "Алекса", "Бранко", "Јасмињ", "Радослав",
                      "Мирослав", "Владан", "Вукашин", "Саша", "Лазар",
                      "Милоје", "Љубиша", "Војин", "Јовица", "Миодраг",
                      "Радивоје", "Божидар", "Мирослав", "Зоран", "Дејан",
                      "Јовица", "Велимир", "Небојша", "Борислав"
                  ],
                    'second': [
                      "Петровић", "Јанковић", "Николић", "Ивановић", "Васић",
                      "Милошевић", "Поповић", "Јовић", "Марковић", "Димитријевић",
                      "Станковић", "Павловић", "Ђорђевић", "Стефановић", "Зорић",
                      "Вукић", "Богдановић", "Давидовић", "Петковић", "Симић",
                      "Костић", "Радић", "Грујић", "Поповић", "Крстић",
                      "Тодоровић", "Алексић", "Милић", "Стојановић", "Васић",
                      "Живковић", "Андрић", "Матић", "Вуковић", "Мићић",
                      "Радовић", "Љубић", "Марић", "Симић"
                  ]
                },
                'female': {
                    'first': [
                      "Јелена", "Милица", "Ана", "Ивана", "Марија",
                      "Наташа", "Јасмина", "Милица", "Драгана", "Тамара",
                      "Нада", "Стефанија", "Љиљана", "Весна", "Наташа",
                      "Славица", "Татјана", "Драгица", "Лидија", "Александра",
                      "Биљана", "Гордана", "Милена", "Љубица", "Рада",
                      "Снежана", "Мирјана", "Десанка", "Вера", "Веселинка",
                      "Светлана", "Бранка", "Милослава", "Љиљанка", "Виолета",
                      "Зорица", "Весна", "Љиљана", "Драгица"
                  ],
                    'second': [
                      "Петровић", "Јанковић", "Николић", "Ивановић", "Васић",
                      "Милошевић", "Поповић", "Јовић", "Марковић", "Димитријевић",
                      "Станковић", "Павловић", "Ђорђевић", "Стефановић", "Зорић",
                      "Вукић", "Богдановић", "Давидовић", "Петковић", "Симић",
                      "Костић", "Радић", "Грујић", "Поповић", "Крстић",
                      "Тодоровић", "Алексић", "Милић", "Стојановић", "Васић",
                      "Живковић", "Андрић", "Матић", "Вуковић", "Мићић",
                      "Радовић", "Љубић", "Марић", "Симић"
                  ],
                }
            }
        }},
    'Slovakia': { 'en': {
            'sex': {
                'male': {
                    'first': [
                        'Lukáš', 'Michal', 'Martin', 'Ján', 'Peter', 'Tomáš', 'Marek', 'Ivan', 'Miroslav', 'Róbert',
                        'Richard', 'Milan', 'Mário', 'Štefan', 'Juraj', 'Patrik', 'Filip', 'Matus', 'David', 'Andrej',
                        'Jozef', 'Norbert', 'Daniel', 'Dominik', 'Rudolf', 'Matej', 'Erik', 'Vladimír', 'František', 'Kamil',
                        'Anton', 'Samuel', 'Dušan', 'Michal', 'Oliver', 'Pavol', 'Branislav', 'Ondrej', 'Karol', 'Adam',
                        'Emil', 'Ľubomír', 'Albert', 'Viktor', 'Boris', 'Slavomír', 'Denis', 'Dávid', 'Dalibor', 'Jozef',
                        'Ľuboš', 'Drahoslav', 'János', 'Ignác', 'Dominik', 'Tomáš', 'Šimon', 'Ferdinand', 'Maximilián', 'Valentín',
                        'Alexander', 'Mikuláš', 'Benedikt', 'Eduard', 'Dionýz', 'Cyril', 'Adrián', 'Adolf', 'Krištof', 'Alfréd',
                        'Lev', 'Viliam', 'Ľudovít', 'Žigmund', 'Richard', 'Benjamín', 'Noel', 'Arpád', 'Ľuboslav', 'Silvester',
                        'Vratislav', 'Klement', 'Sebastian', 'Leon', 'Vincent', 'Timotej', 'Oto', 'Bohumír', 'Albín', 'Samko',
                        'Boleslav', 'Nikola', 'Blažej', 'Pravoslav', 'Oleg', 'Taras', 'Damian', 'Teodor', 'Dezider', 'Víťazoslav'
                      ],
                    'second': [
                        'Novák', 'Horváth', 'Varga', 'Tóth', 'Nagy', 'Balogh', 'Simon', 'Kováč', 'Szabó', 'Farkas',
                        'Takács', 'Kis', 'Molnár', 'Papp', 'Mészáros', 'Németh', 'Fehér', 'Balázs', 'Csonka', 'Török',
                        'Péter', 'Krajčí', 'Kučera', 'Svoboda', 'Liška', 'Novotný', 'Procházka', 'Černý', 'Malý', 'Bartoš',
                        'Bílý', 'Čech', 'Dubček', 'Doležal', 'Král', 'Richter', 'Růžička', 'Sýkora', 'Veselý', 'Zeman',
                        'Čížek', 'Šimko', 'Gregor', 'Jankovič', 'Kuchár', 'Ondrejka', 'Štefančík', 'Valent', 'Vasilko', 'Zima',
                        'Beňo', 'Chovan', 'Danko', 'Fico', 'Gombár', 'Hruška', 'Koreň', 'Lipták', 'Majerčík', 'Nagy', 
                        'Ondruš', 'Pažitný', 'Rusnák', 'Sokol', 'Ščasný', 'Trančík', 'Urban', 'Varga', 'Záhorec', 'Žitný',
                        'Čikoš', 'Ďuriš', 'Ferko', 'Gál', 'Holub', 'Chudý', 'Imrich', 'Jurina', 'Kapusta', 'Králik',
                        'Molčányi', 'Nagy', 'Obert', 'Polák', 'Ryba', 'Stankovský', 'Ščasný', 'Ťok', 'Uhlík', 'Vadkerti',
                        'Záborský', 'Žúbor', 'Bielik', 'Cibuľa', 'Danko', 'Ferenc', 'Géci', 'Haluška', 'Chovanec', 'Kmet'
                      ]
                },
                'female': {
                    'first': [
                        'Eva', 'Anna', 'Mária', 'Jana', 'Zuzana', 'Michaela', 'Veronika', 'Katarína', 'Martina', 'Barbora',
                        'Lucia', 'Miroslava', 'Monika', 'Simona', 'Nina', 'Silvia', 'Tatiana', 'Dominika', 'Adriana', 'Denisa',
                        'Ľubica', 'Dana', 'Iveta', 'Gabriela', 'Natalia', 'Viktória', 'Lenka', 'Elena', 'Lívia', 'Patrícia',
                        'Miriam', 'Natália', 'Zdenka', 'Laura', 'Ivana', 'Anastázia', 'Olga', 'Tereza', 'Sofia', 'Tamara',
                        'Ema', 'Valéria', 'Viera', 'Jarmila', 'Božena', 'Hedviga', 'Izabela', 'Oľga', 'Romana', 'Emília',
                        'Júlia', 'Lýdia', 'Marta', 'Vanda', 'Jolana', 'Olena', 'Alexandra', 'Drahomíra', 'Bohuslava', 'Ružena',
                        'Agáta', 'Lujza', 'Renáta', 'Sára', 'Vanda', 'Zlatica', 'Regína', 'Rozália', 'Aneta', 'Alžbeta',
                        'Hana', 'Lea', 'Kamila', 'Linda', 'Xénia', 'Ľudomila', 'Marcela', 'Noemi', 'Ingrida', 'Johana',
                        'Dáša', 'Dorota', 'Henrieta', 'Juliana', 'Klára', 'Alena', 'Blanka', 'Galina', 'Larisa', 'Elvíra',
                        'Leontína', 'Frida', 'Izídora', 'Eulália', 'Amália', 'Karolína', 'Denisa', 'Adela', 'Margaréta', 'Priska'
                      ],
                    'second': [
                        'Nováková', 'Horváthová', 'Vargová', 'Tóthová', 'Nagyová', 'Baloghová', 'Simonová', 'Kováčová', 'Szabóová', 'Farkasová',
                        'Takácsová', 'Kisová', 'Molnárová', 'Pappová', 'Mészárosová', 'Némethová', 'Fehérová', 'Balázssová', 'Csonková', 'Töröková',
                        'Péterová', 'Krajčíová', 'Kučerová', 'Svobodová', 'Lišková', 'Novotná', 'Procházková', 'Černá', 'Malá', 'Bartošová',
                        'Bílá', 'Čechová', 'Dubčeková', 'Doležalová', 'Králová', 'Richterová', 'Růžičková', 'Sýkorová', 'Veselá', 'Zemanová',
                        'Čížková', 'Šimková', 'Gregorová', 'Jankovičová', 'Kuchárová', 'Ondrejková', 'Štefančíková', 'Valentová', 'Vasilková', 'Zimová',
                        'Beňová', 'Chovanová', 'Danková', 'Ficová', 'Gombárová', 'Hrušková', 'Koreňová', 'Liptáková', 'Majerčíková', 'Nagyová', 
                        'Ondrušová', 'Pažitná', 'Rusnáková', 'Sokolová', 'Ščasná', 'Trančíková', 'Urbanová', 'Vargová', 'Záhorecová', 'Žitná',
                        'Čikošová', 'Ďurišová', 'Ferková', 'Gálová', 'Holubová', 'Chudá', 'Imrichová', 'Jurinová', 'Kapustová', 'Králiková',
                        'Molčányiová', 'Nagyová', 'Obertová', 'Poláková', 'Rybová', 'Stankovská', 'Ščasná', 'Ťoková', 'Uhlíková', 'Vadkertiová',
                        'Záborská', 'Žúborová', 'Bieliková', 'Cibuľová', 'Danková', 'Ferencová', 'Géciová', 'Halušková', 'Chovanecová', 'Kmetová'
                      ],
                }
            }
        }, 'native': {
            'sex': {
                'male': {
                    'first': [
                      "Ján", "Peter", "Martin", "Michal", "Tomáš",
                      "Marek", "Miroslav", "Lukáš", "Juraj", "Matej",
                      "Milan", "Patrik", "Richard", "Andrej", "Jakub",
                      "Štefan", "Vladimír", "Róbert", "Filip", "Erik",
                      "Ivan", "Dávid", "Daniel", "Mário", "Dominik",
                      "Viktor", "Jozef", "František", "Rudolf", "Stanislav",
                      "Oliver", "Ondrej", "Karol", "Emil", "Adam",
                      "Marcel", "Samuel", "Ľubomír", "Anton"
                  ],
                    'second': [
                        'Novák', 'Horváth', 'Varga', 'Tóth', 'Nagy', 'Balogh', 'Simon', 'Kováč', 'Szabó', 'Farkas',
                        'Takács', 'Kis', 'Molnár', 'Papp', 'Mészáros', 'Németh', 'Fehér', 'Balázs', 'Csonka', 'Török',
                        'Péter', 'Krajčí', 'Kučera', 'Svoboda', 'Liška', 'Novotný', 'Procházka', 'Černý', 'Malý', 'Bartoš',
                        'Bílý', 'Čech', 'Dubček', 'Doležal', 'Král', 'Richter', 'Růžička', 'Sýkora', 'Veselý', 'Zeman',
                        'Čížek', 'Šimko', 'Gregor', 'Jankovič', 'Kuchár', 'Ondrejka', 'Štefančík', 'Valent', 'Vasilko', 'Zima',
                        'Beňo', 'Chovan', 'Danko', 'Fico', 'Gombár', 'Hruška', 'Koreň', 'Lipták', 'Majerčík', 'Nagy', 
                        'Ondruš', 'Pažitný', 'Rusnák', 'Sokol', 'Ščasný', 'Trančík', 'Urban', 'Varga', 'Záhorec', 'Žitný',
                        'Čikoš', 'Ďuriš', 'Ferko', 'Gál', 'Holub', 'Chudý', 'Imrich', 'Jurina', 'Kapusta', 'Králik',
                        'Molčányi', 'Nagy', 'Obert', 'Polák', 'Ryba', 'Stankovský', 'Ščasný', 'Ťok', 'Uhlík', 'Vadkerti',
                        'Záborský', 'Žúbor', 'Bielik', 'Cibuľa', 'Danko', 'Ferenc', 'Géci', 'Haluška', 'Chovanec', 'Kmet'
                      ]
                },
                'female': {
                    'first': [
                        'Eva', 'Anna', 'Mária', 'Jana', 'Zuzana', 'Michaela', 'Veronika', 'Katarína', 'Martina', 'Barbora',
                        'Lucia', 'Miroslava', 'Monika', 'Simona', 'Nina', 'Silvia', 'Tatiana', 'Dominika', 'Adriana', 'Denisa',
                        'Ľubica', 'Dana', 'Iveta', 'Gabriela', 'Natalia', 'Viktória', 'Lenka', 'Elena', 'Lívia', 'Patrícia',
                        'Miriam', 'Natália', 'Zdenka', 'Laura', 'Ivana', 'Anastázia', 'Olga', 'Tereza', 'Sofia', 'Tamara',
                        'Ema', 'Valéria', 'Viera', 'Jarmila', 'Božena', 'Hedviga', 'Izabela', 'Oľga', 'Romana', 'Emília',
                        'Júlia', 'Lýdia', 'Marta', 'Vanda', 'Jolana', 'Olena', 'Alexandra', 'Drahomíra', 'Bohuslava', 'Ružena',
                        'Agáta', 'Lujza', 'Renáta', 'Sára', 'Vanda', 'Zlatica', 'Regína', 'Rozália', 'Aneta', 'Alžbeta',
                        'Hana', 'Lea', 'Kamila', 'Linda', 'Xénia', 'Ľudomila', 'Marcela', 'Noemi', 'Ingrida', 'Johana',
                        'Dáša', 'Dorota', 'Henrieta', 'Juliana', 'Klára', 'Alena', 'Blanka', 'Galina', 'Larisa', 'Elvíra',
                        'Leontína', 'Frida', 'Izídora', 'Eulália', 'Amália', 'Karolína', 'Denisa', 'Adela', 'Margaréta', 'Priska'
                      ],
                    'second': [
                        'Nováková', 'Horváthová', 'Vargová', 'Tóthová', 'Nagyová', 'Baloghová', 'Simonová', 'Kováčová', 'Szabóová', 'Farkasová',
                        'Takácsová', 'Kisová', 'Molnárová', 'Pappová', 'Mészárosová', 'Némethová', 'Fehérová', 'Balázssová', 'Csonková', 'Töröková',
                        'Péterová', 'Krajčíová', 'Kučerová', 'Svobodová', 'Lišková', 'Novotná', 'Procházková', 'Černá', 'Malá', 'Bartošová',
                        'Bílá', 'Čechová', 'Dubčeková', 'Doležalová', 'Králová', 'Richterová', 'Růžičková', 'Sýkorová', 'Veselá', 'Zemanová',
                        'Čížková', 'Šimková', 'Gregorová', 'Jankovičová', 'Kuchárová', 'Ondrejková', 'Štefančíková', 'Valentová', 'Vasilková', 'Zimová',
                        'Beňová', 'Chovanová', 'Danková', 'Ficová', 'Gombárová', 'Hrušková', 'Koreňová', 'Liptáková', 'Majerčíková', 'Nagyová', 
                        'Ondrušová', 'Pažitná', 'Rusnáková', 'Sokolová', 'Ščasná', 'Trančíková', 'Urbanová', 'Vargová', 'Záhorecová', 'Žitná',
                        'Čikošová', 'Ďurišová', 'Ferková', 'Gálová', 'Holubová', 'Chudá', 'Imrichová', 'Jurinová', 'Kapustová', 'Králiková',
                        'Molčányiová', 'Nagyová', 'Obertová', 'Poláková', 'Rybová', 'Stankovská', 'Ščasná', 'Ťoková', 'Uhlíková', 'Vadkertiová',
                        'Záborská', 'Žúborová', 'Bieliková', 'Cibuľová', 'Danková', 'Ferencová', 'Géciová', 'Halušková', 'Chovanecová', 'Kmetová'
                      ],
                }
            }
        }},
    'Slovenia': { 'en': {
            'sex': {
                'male': {
                    'first': [
                        'Luka', 'Marko', 'Janez', 'Matej', 'Andrej', 'Tomaž', 'Simon', 'Miha', 'Martin', 'Niko',
                        'Jure', 'Žan', 'David', 'Aljaž', 'Jakob', 'Klemen', 'Nejc', 'Erik', 'Blaž', 'Rok',
                        'Gašper', 'Matija', 'Borut', 'Samo', 'Jernej', 'Matic', 'Jan', 'Primož', 'Anže', 'Lan',
                        'Benjamin', 'Tim', 'Jaka', 'Rok', 'Tilen', 'Gregor', 'Gal', 'Urban', 'Mitja', 'Nik',
                        'Denis', 'Domen', 'Aleš', 'Kristjan', 'Jernej', 'Žiga', 'Valentin', 'Lovro', 'Davor', 'Adrian',
                        'Ivan', 'Nino', 'Vid', 'Leon', 'Teo', 'Danijel', 'Alen', 'Edi', 'Filip', 'Emil',
                        'Matevž', 'Liam', 'Emir', 'Oskar', 'Lovrenc', 'Dominik', 'Bor', 'Lovro', 'Nikola', 'Fabian',
                        'Filip', 'Ožbej', 'Anej', 'Viktor', 'Lenart', 'Tian', 'Emilijan', 'Tadej', 'Ian', 'Max',
                        'Enej', 'Nace', 'Maks', 'Maxim', 'Vid', 'Aleksej', 'Jure', 'Tilen', 'Mark', 'Dominik',
                        'Patrik', 'Nikola', 'Eman', 'Eli', 'Nian', 'Jaris', 'Timotej', 'Nikolaj', 'Zakarija', 'Maksimilijan'
                      ],
                    'second': [
                        'Novak', 'Kovač', 'Horvat', 'Krajnc', 'Zupančič', 'Košir', 'Potočnik', 'Mlakar', 'Šuštar', 'Kastelic',
                        'Bizjak', 'Zupan', 'Lah', 'Zorman', 'Golob', 'Oblak', 'Hribar', 'Kotnik', 'Perko', 'Vidmar',
                        'Kumer', 'Kramar', 'Pavlič', 'Vrhovec', 'Koritnik', 'Rupnik', 'Bergant', 'Zalar', 'Jerman', 'Babič',
                        'Tratnik', 'Ribič', 'Jenko', 'Kocjančič', 'Kosmač', 'Furlan', 'Medved', 'Kolar', 'Možina', 'Kočevar',
                        'Rozman', 'Novak', 'Hrovat', 'Dolenc', 'Blažič', 'Korošec', 'Majcen', 'Mihelčič', 'Zajc', 'Ferjančič',
                        'Kos', 'Koprivnikar', 'Gorjup', 'Križaj', 'Bezjak', 'Černe', 'Lešnik', 'Jelen', 'Bavec', 'Kokalj',
                        'Pavlin', 'Čeh', 'Hočevar', 'Jurič', 'Pavšič', 'Lazar', 'Kotnik', 'Lavrič', 'Košak', 'Prešeren',
                        'Kramberger', 'Bogataj', 'Krajnčič', 'Polak', 'Bertoncelj', 'Petek', 'Hren', 'Avtar', 'Oman', 'Zorko',
                        'Šturm', 'Pavčič', 'Humar', 'Rus', 'Ivančič', 'Bevk', 'Bartol', 'Božič', 'Vasle', 'Čufer',
                        'Savić', 'Erjavec', 'Hribar', 'Štefančič', 'Vidic', 'Kostanjevec', 'Povše', 'Pibernik', 'Drofenik', 'Drev',
                        'Lavrin', 'Boršič', 'Pirc', 'Gajšek', 'Klobučar', 'Zalar', 'Miklavc', 'Tomažič', 'Hribar', 'Žagar'
                      ]
                },
                'female': {
                    'first': [
                        'Ana', 'Maja', 'Eva', 'Tina', 'Nina', 'Sara', 'Petra', 'Katarina', 'Manca', 'Barbara',
                        'Urška', 'Živa', 'Lara', 'Neža', 'Lucija', 'Tamara', 'Lea', 'Sofija', 'Tea', 'Mia',
                        'Hana', 'Lana', 'Pia', 'Lina', 'Klara', 'Nuša', 'Katja', 'Klara', 'Anja', 'Ajda',
                        'Ema', 'Laura', 'Zala', 'Taja', 'Nika', 'Iza', 'Staša', 'Ela', 'Naja', 'Natalija',
                        'Vita', 'Leja', 'Zara', 'Brina', 'Kaja', 'Lija', 'Ines', 'Zoja', 'Pika', 'Vidra',
                        'Ava', 'Evelin', 'Julija', 'Mila', 'Zoja', 'Iris', 'Alja', 'Tara', 'Hanna', 'Mina',
                        'Anastazija', 'Zoja', 'Maša', 'Melisa', 'Eli', 'Eva', 'Sofia', 'Zarja', 'Nela', 'Leja',
                        'Taja', 'Mina', 'Zoja', 'Lili', 'Iva', 'Vanja', 'Maja', 'Neža', 'Hana', 'Elena',
                        'Zoja', 'Taja', 'Zara', 'Nina', 'Luna', 'Sofia', 'Lana', 'Eva', 'Hanna', 'Vita',
                        'Ajda', 'Lara', 'Lija', 'Maja', 'Pika', 'Špela', 'Eva', 'Ana', 'Neža', 'Eva'
                      ],
                    'second': [
                        'Novakova', 'Kovačeva', 'Horvatova', 'Krajnčeva', 'Zupančičeva', 'Koširjeva', 'Potočnikova', 'Mlakarjeva', 'Šuštarjeva', 'Kastelicova',
                        'Bizjakova', 'Zupanova', 'Lahova', 'Zormanova', 'Golobova', 'Oblakova', 'Hribarjeva', 'Kotnikova', 'Perkova', 'Vidmarjeva',
                        'Kumerjeva', 'Kramarjeva', 'Pavličeva', 'Vrhovčeva', 'Koritnikova', 'Rupnikova', 'Bergantova', 'Zalarjeva', 'Jermanova', 'Babičeva',
                        'Tratnikova', 'Ribičeva', 'Jenkova', 'Kocjančičeva', 'Kosmačeva', 'Furlanova', 'Medvedova', 'Kolarjeva', 'Možinova', 'Kočevarjeva',
                        'Rozmanova', 'Novakova', 'Hrovatova', 'Dolencova', 'Blažičeva', 'Korošecova', 'Majcenova', 'Mihelčičeva', 'Zajcova', 'Ferjančičeva',
                        'Kosova', 'Koprivnikarova', 'Gorjupova', 'Križajeva', 'Bezjakova', 'Černeva', 'Lešnikova', 'Jelena', 'Bavčeva', 'Kokaljeva',
                        'Pavlinova', 'Čehova', 'Hočevarova', 'Juričeva', 'Pavšičeva', 'Lazarjeva', 'Kotnikova', 'Lavričeva', 'Košakova', 'Prešerenova',
                        'Krambergerjeva', 'Bogatajeva', 'Krajnčičeva', 'Polakova', 'Bertonceljeva', 'Petekova', 'Hrenova', 'Avtarjeva', 'Omanova', 'Zorkova',
                        'Šturmova', 'Pavčičeva', 'Humarova', 'Rusova', 'Ivančičeva', 'Bevkova', 'Bartolova', 'Božičeva', 'Vasleova', 'Čuferjeva',
                        'Savićeva', 'Erjavecova', 'Hribarjeva', 'Štefančičeva', 'Vidicova', 'Kostanjevčeva', 'Povšejeva', 'Pibernikova', 'Drofenikova', 'Drevova',
                        'Lavrinova', 'Boršičeva', 'Pircova', 'Gajšekova', 'Klobučarjeva', 'Zalarjeva', 'Miklavcova', 'Tomažičeva', 'Hribarjeva', 'Žagarjeva'
                      ],
                }
            }
        }, 'native': {
            'sex': {
                'male': {
                    'first': [
                        'Luka', 'Marko', 'Janez', 'Matej', 'Andrej', 'Tomaž', 'Simon', 'Miha', 'Martin', 'Niko',
                        'Jure', 'Žan', 'David', 'Aljaž', 'Jakob', 'Klemen', 'Nejc', 'Erik', 'Blaž', 'Rok',
                        'Gašper', 'Matija', 'Borut', 'Samo', 'Jernej', 'Matic', 'Jan', 'Primož', 'Anže', 'Lan',
                        'Benjamin', 'Tim', 'Jaka', 'Rok', 'Tilen', 'Gregor', 'Gal', 'Urban', 'Mitja', 'Nik',
                        'Denis', 'Domen', 'Aleš', 'Kristjan', 'Jernej', 'Žiga', 'Valentin', 'Lovro', 'Davor', 'Adrian',
                        'Ivan', 'Nino', 'Vid', 'Leon', 'Teo', 'Danijel', 'Alen', 'Edi', 'Filip', 'Emil',
                        'Matevž', 'Liam', 'Emir', 'Oskar', 'Lovrenc', 'Dominik', 'Bor', 'Lovro', 'Nikola', 'Fabian',
                        'Filip', 'Ožbej', 'Anej', 'Viktor', 'Lenart', 'Tian', 'Emilijan', 'Tadej', 'Ian', 'Max',
                        'Enej', 'Nace', 'Maks', 'Maxim', 'Vid', 'Aleksej', 'Jure', 'Tilen', 'Mark', 'Dominik',
                        'Patrik', 'Nikola', 'Eman', 'Eli', 'Nian', 'Jaris', 'Timotej', 'Nikolaj', 'Zakarija', 'Maksimilijan'
                      ],
                    'second': [
                        'Novak', 'Kovač', 'Horvat', 'Krajnc', 'Zupančič', 'Košir', 'Potočnik', 'Mlakar', 'Šuštar', 'Kastelic',
                        'Bizjak', 'Zupan', 'Lah', 'Zorman', 'Golob', 'Oblak', 'Hribar', 'Kotnik', 'Perko', 'Vidmar',
                        'Kumer', 'Kramar', 'Pavlič', 'Vrhovec', 'Koritnik', 'Rupnik', 'Bergant', 'Zalar', 'Jerman', 'Babič',
                        'Tratnik', 'Ribič', 'Jenko', 'Kocjančič', 'Kosmač', 'Furlan', 'Medved', 'Kolar', 'Možina', 'Kočevar',
                        'Rozman', 'Novak', 'Hrovat', 'Dolenc', 'Blažič', 'Korošec', 'Majcen', 'Mihelčič', 'Zajc', 'Ferjančič',
                        'Kos', 'Koprivnikar', 'Gorjup', 'Križaj', 'Bezjak', 'Černe', 'Lešnik', 'Jelen', 'Bavec', 'Kokalj',
                        'Pavlin', 'Čeh', 'Hočevar', 'Jurič', 'Pavšič', 'Lazar', 'Kotnik', 'Lavrič', 'Košak', 'Prešeren',
                        'Kramberger', 'Bogataj', 'Krajnčič', 'Polak', 'Bertoncelj', 'Petek', 'Hren', 'Avtar', 'Oman', 'Zorko',
                        'Šturm', 'Pavčič', 'Humar', 'Rus', 'Ivančič', 'Bevk', 'Bartol', 'Božič', 'Vasle', 'Čufer',
                        'Savić', 'Erjavec', 'Hribar', 'Štefančič', 'Vidic', 'Kostanjevec', 'Povše', 'Pibernik', 'Drofenik', 'Drev',
                        'Lavrin', 'Boršič', 'Pirc', 'Gajšek', 'Klobučar', 'Zalar', 'Miklavc', 'Tomažič', 'Hribar', 'Žagar'
                      ]
                },
                'female': {
                    'first': [
                        'Ana', 'Maja', 'Eva', 'Tina', 'Nina', 'Sara', 'Petra', 'Katarina', 'Manca', 'Barbara',
                        'Urška', 'Živa', 'Lara', 'Neža', 'Lucija', 'Tamara', 'Lea', 'Sofija', 'Tea', 'Mia',
                        'Hana', 'Lana', 'Pia', 'Lina', 'Klara', 'Nuša', 'Katja', 'Klara', 'Anja', 'Ajda',
                        'Ema', 'Laura', 'Zala', 'Taja', 'Nika', 'Iza', 'Staša', 'Ela', 'Naja', 'Natalija',
                        'Vita', 'Leja', 'Zara', 'Brina', 'Kaja', 'Lija', 'Ines', 'Zoja', 'Pika', 'Vidra',
                        'Ava', 'Evelin', 'Julija', 'Mila', 'Zoja', 'Iris', 'Alja', 'Tara', 'Hanna', 'Mina',
                        'Anastazija', 'Zoja', 'Maša', 'Melisa', 'Eli', 'Eva', 'Sofia', 'Zarja', 'Nela', 'Leja',
                        'Taja', 'Mina', 'Zoja', 'Lili', 'Iva', 'Vanja', 'Maja', 'Neža', 'Hana', 'Elena',
                        'Zoja', 'Taja', 'Zara', 'Nina', 'Luna', 'Sofia', 'Lana', 'Eva', 'Hanna', 'Vita',
                        'Ajda', 'Lara', 'Lija', 'Maja', 'Pika', 'Špela', 'Eva', 'Ana', 'Neža', 'Eva'
                      ],
                    'second': [
                        'Novakova', 'Kovačeva', 'Horvatova', 'Krajnčeva', 'Zupančičeva', 'Koširjeva', 'Potočnikova', 'Mlakarjeva', 'Šuštarjeva', 'Kastelicova',
                        'Bizjakova', 'Zupanova', 'Lahova', 'Zormanova', 'Golobova', 'Oblakova', 'Hribarjeva', 'Kotnikova', 'Perkova', 'Vidmarjeva',
                        'Kumerjeva', 'Kramarjeva', 'Pavličeva', 'Vrhovčeva', 'Koritnikova', 'Rupnikova', 'Bergantova', 'Zalarjeva', 'Jermanova', 'Babičeva',
                        'Tratnikova', 'Ribičeva', 'Jenkova', 'Kocjančičeva', 'Kosmačeva', 'Furlanova', 'Medvedova', 'Kolarjeva', 'Možinova', 'Kočevarjeva',
                        'Rozmanova', 'Novakova', 'Hrovatova', 'Dolencova', 'Blažičeva', 'Korošecova', 'Majcenova', 'Mihelčičeva', 'Zajcova', 'Ferjančičeva',
                        'Kosova', 'Koprivnikarova', 'Gorjupova', 'Križajeva', 'Bezjakova', 'Černeva', 'Lešnikova', 'Jelena', 'Bavčeva', 'Kokaljeva',
                        'Pavlinova', 'Čehova', 'Hočevarova', 'Juričeva', 'Pavšičeva', 'Lazarjeva', 'Kotnikova', 'Lavričeva', 'Košakova', 'Prešerenova',
                        'Krambergerjeva', 'Bogatajeva', 'Krajnčičeva', 'Polakova', 'Bertonceljeva', 'Petekova', 'Hrenova', 'Avtarjeva', 'Omanova', 'Zorkova',
                        'Šturmova', 'Pavčičeva', 'Humarova', 'Rusova', 'Ivančičeva', 'Bevkova', 'Bartolova', 'Božičeva', 'Vasleova', 'Čuferjeva',
                        'Savićeva', 'Erjavecova', 'Hribarjeva', 'Štefančičeva', 'Vidicova', 'Kostanjevčeva', 'Povšejeva', 'Pibernikova', 'Drofenikova', 'Drevova',
                        'Lavrinova', 'Boršičeva', 'Pircova', 'Gajšekova', 'Klobučarjeva', 'Zalarjeva', 'Miklavcova', 'Tomažičeva', 'Hribarjeva', 'Žagarjeva'
                      ],
                }
            }
        }},
    'Tunisia': { 'en': {
            'sex': {
                'male': {
                    'first': [
                        'Mohamed', 'Ahmed', 'Youssef', 'Anis', 'Hatem', 'Maher', 'Amine', 'Walid', 'Sami', 'Hassan',
                        'Khaled', 'Oussama', 'Rami', 'Nizar', 'Aymen', 'Fadi', 'Ridha', 'Wael', 'Karim', 'Jamel',
                        'Zied', 'Mohsen', 'Zakaria', 'Fares', 'Yassine', 'Nabil', 'Atef', 'Raouf', 'Belhassen', 'Tarek',
                        'Omar', 'Amar', 'Bassem', 'Hichem', 'Chaker', 'Adel', 'Ali', 'Nour', 'Jawhar', 'Marwan',
                        'Amir', 'Moez', 'Majdi', 'Achraf', 'Mehdi', 'Chedly', 'Wassim', 'Sofiene', 'Wassim', 'Moncef',
                        'Lotfi', 'Foued', 'Mokhtar', 'Elyes', 'Kais', 'Hedi', 'Imed', 'Kacem', 'Nidhal', 'Achref',
                        'Ammar', 'Kamel', 'Salem', 'Noureddine', 'Amine', 'Ridha', 'Fathi', 'Fayçal', 'Hamza', 'Walid',
                        'Mounir', 'Houssem', 'Anouar', 'Houssem', 'Jalel', 'Abdelaziz', 'Firas', 'Hafedh', 'Taha', 'Said',
                        'Taha', 'Ezzedine', 'Sami', 'Hazem', 'Zouhair', 'Bilel', 'Iyed', 'Zouheir', 'Sofien', 'Wajdi',
                        'Chedly', 'Majed', 'Badr', 'Anwar', 'Mohsen', 'Tarek', 'Chawki', 'Haythem', 'Mohammed', 'Wissem'
                      ],
                    'second': [
                        'Ben Salah', 'Ben Youssef', 'Ben Ammar', 'Mabrouk', 'Chaabane', 'Bouzid', 'Hammami', 'Rekik', 'Saidi', 'Sassi',
                        'Boujemaa', 'Jlassi', 'Khelifi', 'Ben Hassen', 'Belhaj', 'Gharbi', 'Ghozzi', 'Bouzidi', 'Khalfi', 'Nasri',
                        'Boukhris', 'Ferjani', 'Baccar', 'Ben Slimane', 'Ben Ayed', 'Boubaker', 'Ben Jemaa', 'Hajji', 'Cherif', 'Ben Dhia',
                        'Mejri', 'Belkhir', 'Ben Arfa', 'Ben Moussa', 'Kamoun', 'Miled', 'Bouziane', 'Gmati', 'Cherif', 'Najjar',
                        'Zoghlami', 'El May', 'Zribi', 'Makni', 'Jelassi', 'Toumi', 'Boussaid', 'Ben Miled', 'Boujelbene', 'Ben Ali',
                        'Masmoudi', 'Chatti', 'Hachicha', 'Ben Rhouma', 'Ayadi', 'Rejeb', 'Kacem', 'Guesmi', 'Ben Ismail', 'El Ouaer',
                        'Othmani', 'Salhi', 'Gharbi', 'Ben Naceur', 'Trabelsi', 'Mansour', 'Boulila', 'Khazri', 'Chelbi', 'Hannachi',
                        'Guediche', 'Khmiri', 'Gueddana', 'Boufarra', 'Ghariani', 'Zarrouk', 'Mabrouk', 'Ben Hedi', 'Rahmouni', 'Bouderbala',
                        'Fersi', 'Bouslama', 'Najar', 'Bousnina', 'Fekih', 'Mezghanni', 'Ghribi', 'El Materi', 'Jabnoun', 'Ben Miled',
                        'Kechiche', 'Boudali', 'Ben Sassi', 'Guenichi', 'Sboui', 'Gribaa', 'Kheriji', 'Ben Rekik', 'El Abassi', 'Ben Mansour'
                      ]
                },
                'female': {
                    'first': [
                        'Fatma', 'Houda', 'Sonia', 'Imene', 'Nour', 'Meriem', 'Aicha', 'Safa', 'Wafa', 'Ines',
                        'Rym', 'Yosra', 'Dorra', 'Asma', 'Mouna', 'Samar', 'Latifa', 'Nada', 'Salma', 'Hayet',
                        'Yasmine', 'Amina', 'Ahlem', 'Jihen', 'Raja', 'Faten', 'Nadia', 'Hajer', 'Oumaima', 'Ons',
                        'Amel', 'Zayneb', 'Khadija', 'Sabrine', 'Najla', 'Saida', 'Roua', 'Hana', 'Amani', 'Nermine',
                        'Lobna', 'Wided', 'Dina', 'Samar', 'Nada', 'Hiba', 'Sahar', 'Sana', 'Wiem', 'Nouha',
                        'Hager', 'Rouaa', 'Imen', 'Rahma', 'Roumaissa', 'Asma', 'Ryma', 'Asma', 'Arij', 'Kaouther',
                        'Zeineb', 'Lilia', 'Eya', 'Saida', 'Hend', 'Warda', 'Lina', 'Nihel', 'Oumayma', 'Ines',
                        'Nour', 'Sahar', 'Hiba', 'Aya', 'Houda', 'Lamia', 'Sana', 'Maha', 'Rim', 'Houda',
                        'Sara', 'Sana', 'Imen', 'Kaouther', 'Chaima', 'Asma', 'Hela', 'Rahma', 'Rania', 'Farah',
                        'Ahlem', 'Ichrak', 'Lobna', 'Amani', 'Nouha', 'Samiha', 'Hiba', 'Khouloud', 'Lina', 'Yara'
                      ],
                    'second': [
                        'Ben Salah', 'Ben Youssef', 'Ben Ammar', 'Mabrouk', 'Chaabane', 'Bouzid', 'Hammami', 'Rekik', 'Saidi', 'Sassi',
                        'Boujemaa', 'Jlassi', 'Khelifi', 'Ben Hassen', 'Belhaj', 'Gharbi', 'Ghozzi', 'Bouzidi', 'Khalfi', 'Nasri',
                        'Boukhris', 'Ferjani', 'Baccar', 'Ben Slimane', 'Ben Ayed', 'Boubaker', 'Ben Jemaa', 'Hajji', 'Cherif', 'Ben Dhia',
                        'Mejri', 'Belkhir', 'Ben Arfa', 'Ben Moussa', 'Kamoun', 'Miled', 'Bouziane', 'Gmati', 'Cherif', 'Najjar',
                        'Zoghlami', 'El May', 'Zribi', 'Makni', 'Jelassi', 'Toumi', 'Boussaid', 'Ben Miled', 'Boujelbene', 'Ben Ali',
                        'Masmoudi', 'Chatti', 'Hachicha', 'Ben Rhouma', 'Ayadi', 'Rejeb', 'Kacem', 'Guesmi', 'Ben Ismail', 'El Ouaer',
                        'Othmani', 'Salhi', 'Gharbi', 'Ben Naceur', 'Trabelsi', 'Mansour', 'Boulila', 'Khazri', 'Chelbi', 'Hannachi',
                        'Guediche', 'Khmiri', 'Gueddana', 'Boufarra', 'Ghariani', 'Zarrouk', 'Mabrouk', 'Ben Hedi', 'Rahmouni', 'Bouderbala',
                        'Fersi', 'Bouslama', 'Najar', 'Bousnina', 'Fekih', 'Mezghanni', 'Ghribi', 'El Materi', 'Jabnoun', 'Ben Miled',
                        'Kechiche', 'Boudali', 'Ben Sassi', 'Guenichi', 'Sboui', 'Gribaa', 'Kheriji', 'Ben Rekik', 'El Abassi', 'Ben Mansour'
                      ],
                }
            }
        }, 'native': {
            'sex': {
                'male': {
                    'first': [
                      "محمد", "أحمد", "علي", "يوسف", "محمود",
                      "حسن", "محسن", "عبد الله", "محمد علي", "منصف",
                      "محمد الأمين", "أيمن", "محمد ناجي", "رضا", "محمد لطفي",
                      "فتحي", "نبيل", "سامي", "سعيد", "نور الدين",
                      "رامي", "حاتم", "أسامة", "زياد", "كريم",
                      "سليم", "وسام", "عماد", "جمال", "مجدي",
                      "وليد", "فراس", "هشام", "ناجي", "عادل",
                      "محمد رضا", "عمر", "شكري", "رشيد"
                  ],
                    'second': [
                      "بن علي", "الطرابلسي", "العبيدي", "المغربي", "الشريف",
                      "الحمروني", "السويسي", "القاسمي", "البوزيدي", "السعدي",
                      "الحمودي", "المحمدي", "العمراني", "السكري", "الزغلامي",
                      "الخميسي", "العريبي", "القرمازي", "الزواري", "القناوي",
                      "العجيلي", "المالكي", "الزيتوني", "الشيباني", "الحساني",
                      "السحباني", "الجزيري", "العتيق", "العجيلي", "الطويل",
                      "القبيسي", "الغربي", "الحربي", "العتروسي", "الجوادي",
                      "المدني", "الكعبي", "البوعزيزي", "الدريدي"
                  ]
                },
                'female': {
                    'first': [
                      "فاطمة", "خديجة", "عائشة", "زينب", "مريم",
                      "سميرة", "سلمى", "نجاة", "رقية", "جميلة",
                      "أمينة", "نعيمة", "هالة", "سهام", "لطيفة",
                      "منال", "هناء", "ليلى", "نادية", "سنية",
                      "رحمة", "نسرين", "فريدة", "مها", "دلال",
                      "نور", "إيمان", "عبير", "عائلة", "زهرة",
                      "لينا", "سعاد", "عبد اللطيفة", "سهى", "نجية",
                      "سارة", "فاتن", "سماح", "درة"
                  ],
                    'second': [
                      "بن علي", "الطرابلسي", "العبيدي", "المغربي", "الشريف",
                      "الحمروني", "السويسي", "القاسمي", "البوزيدي", "السعدي",
                      "الحمودي", "المحمدي", "العمراني", "السكري", "الزغلامي",
                      "الخميسي", "العريبي", "القرمازي", "الزواري", "القناوي",
                      "العجيلي", "المالكي", "الزيتوني", "الشيباني", "الحساني",
                      "السحباني", "الجزيري", "العتيق", "العجيلي", "الطويل",
                      "القبيسي", "الغربي", "الحربي", "العتروسي", "الجوادي",
                      "المدني", "الكعبي", "البوعزيزي", "الدريدي"
                  ],
                }
            }
        }},
    'Türkiye': { 'en': {
            'sex': {
                'male': {
                    'first': [
                        'Ahmet', 'Mustafa', 'Mehmet', 'Ali', 'Hüseyin', 'Hasan', 'İbrahim', 'Ömer', 'Murat', 'Yusuf',
                        'Osman', 'İsmail', 'Fatih', 'Orhan', 'Kemal', 'Süleyman', 'Ahmet', 'Mehmet', 'Hüseyin', 'Yusuf',
                        'İsmail', 'Ali', 'Mustafa', 'Osman', 'Erdem', 'Oğuz', 'Cem', 'Emre', 'Can', 'Furkan',
                        'Burak', 'Yunus', 'Serkan', 'Gökhan', 'Barış', 'Berkay', 'Bora', 'Tolga', 'Umut', 'Kaan',
                        'Onur', 'Taha', 'Eren', 'Enes', 'Kerem', 'Yasin', 'Uğur', 'Selim', 'Deniz', 'Cihan',
                        'Emir', 'Emre', 'Ahmet', 'Mert', 'Kaan', 'Arda', 'Mehmet', 'Ali', 'Yusuf', 'Mustafa',
                        'Hüseyin', 'Oğuz', 'İsmail', 'Osman', 'Eren', 'Tolga', 'Kerem', 'Onur', 'Berkay', 'Burak',
                        'Can', 'Emir', 'Barış', 'Ege', 'Enes', 'Taha', 'Umut', 'Bora', 'Deniz', 'Gökhan',
                        'Uğur', 'Furkan', 'Koray', 'Orhan', 'Mert', 'Serkan', 'Yunus', 'Süleyman', 'İbrahim', 'Emre',
                        'Yasin', 'Batuhan', 'Cem', 'Erhan', 'Kemal', 'Bilge', 'Ozan', 'Emirhan', 'Sercan', 'Atakan'
                      ],
                    'second': [
                        'Yılmaz', 'Kaya', 'Demir', 'Şahin', 'Yıldırım', 'Çelik', 'Erdoğan', 'Yılmazer', 'Yalın', 'Acar',
                        'Arslan', 'Güneş', 'Koç', 'Erbay', 'Bulut', 'Türk', 'Toprak', 'Karahan', 'Eren', 'Altun',
                        'Kurt', 'Duran', 'Özdemir', 'Kılıç', 'Çetin', 'Göktürk', 'Karadeniz', 'Kaplan', 'Taş', 'Atalay',
                        'Başaran', 'Şen', 'Doğan', 'Yücel', 'Çiçek', 'Çakır', 'Aktaş', 'Yıldız', 'Karaman', 'Öztürk',
                        'Yavuz', 'Gürbüz', 'Türkoğlu', 'Kocaman', 'Ateş', 'Büyük', 'Küçük', 'Bilgin', 'Karakaş', 'Yener',
                        'Uysal', 'Kara', 'Aydın', 'Koyuncu', 'Kurtuluş', 'Demirtaş', 'Küçük', 'Aksu', 'Alkan', 'Gür',
                        'Şentürk', 'Karaer', 'Yiğit', 'Uzun', 'Sarıkaya', 'Akça', 'Oktay', 'Sönmez', 'Ceylan', 'Bayrak',
                        'Yalçın', 'Gökalp', 'Kazancı', 'Erdem', 'Coşkun', 'Akgün', 'Yılmaz', 'Arı', 'Karakaya', 'Gül',
                        'Özen', 'Kaptan', 'Emin', 'Karagöz', 'Aslan', 'Yazıcı', 'Yıldız', 'Özkan', 'Genç', 'Gönenç',
                        'Berk', 'Korkmaz', 'Kocaoğlu', 'Gürsoy', 'Sarı', 'Aydın', 'Gönül', 'Cemal', 'Çoban', 'Yüksel'
                      ]
                },
                'female': {
                    'first': [
                        'Ayşe', 'Fatma', 'Aysel', 'Zeynep', 'Emine', 'Hatice', 'Melek', 'Meryem', 'Ebru', 'Sevgi',
                        'Hülya', 'Seda', 'Duygu', 'Elif', 'Cemile', 'Gül', 'Nuray', 'Yasemin', 'Selin', 'Aslı',
                        'Esra', 'Ece', 'Ceren', 'Gizem', 'İrem', 'Şeyma', 'Merve', 'Sema', 'Leyla', 'Burcu',
                        'Rabia', 'Nihan', 'Fulya', 'Meltem', 'Gizem', 'Ezgi', 'Büşra', 'Yasmin', 'Ezgi', 'Yağmur',
                        'Pınar', 'Zehra', 'Zeliha', 'Elvan', 'Zümrüt', 'Hafize', 'Sibel', 'Sude', 'Süheyla', 'Leman',
                        'Aylin', 'Ebru', 'Dilek', 'Beren', 'Bilge', 'Esila', 'Gülşah', 'Nur', 'Elmas', 'Melike',
                        'Şule', 'Sedef', 'Gonca', 'Hande', 'Nurcan', 'Tuğba', 'Özlem', 'Selma', 'Sevil', 'Tuğçe',
                        'Gülizar', 'Nazlı', 'İlknur', 'Figen', 'Zara', 'Binnur', 'Oya', 'Cansu', 'Eylem', 'Buse',
                        'İlkay', 'Yelda', 'Hacer', 'Lale', 'Nilüfer', 'Ceyda', 'Züleyha', 'Duygu', 'Nihal', 'Rumeysa'
                      ],
                    'second': [
                        'Yılmaz', 'Kaya', 'Demir', 'Şahin', 'Yıldırım', 'Çelik', 'Erdoğan', 'Yılmazer', 'Yalın', 'Acar',
                        'Arslan', 'Güneş', 'Koç', 'Erbay', 'Bulut', 'Türk', 'Toprak', 'Karahan', 'Eren', 'Altun',
                        'Kurt', 'Duran', 'Özdemir', 'Kılıç', 'Çetin', 'Göktürk', 'Karadeniz', 'Kaplan', 'Taş', 'Atalay',
                        'Başaran', 'Şen', 'Doğan', 'Yücel', 'Çiçek', 'Çakır', 'Aktaş', 'Yıldız', 'Karaman', 'Öztürk',
                        'Yavuz', 'Gürbüz', 'Türkoğlu', 'Kocaman', 'Ateş', 'Büyük', 'Küçük', 'Bilgin', 'Karakaş', 'Yener',
                        'Uysal', 'Kara', 'Aydın', 'Koyuncu', 'Kurtuluş', 'Demirtaş', 'Küçük', 'Aksu', 'Alkan', 'Gür',
                        'Şentürk', 'Karaer', 'Yiğit', 'Uzun', 'Sarıkaya', 'Akça', 'Oktay', 'Sönmez', 'Ceylan', 'Bayrak',
                        'Yalçın', 'Gökalp', 'Kazancı', 'Erdem', 'Coşkun', 'Akgün', 'Yılmaz', 'Arı', 'Karakaya', 'Gül',
                        'Özen', 'Kaptan', 'Emin', 'Karagöz', 'Aslan', 'Yazıcı', 'Yıldız', 'Özkan', 'Genç', 'Gönenç',
                        'Berk', 'Korkmaz', 'Kocaoğlu', 'Gürsoy', 'Sarı', 'Aydın', 'Gönül', 'Cemal', 'Çoban', 'Yüksel'
                      ],
                }
            }
        }, 'native': {
            'sex': {
                'male': {
                    'first': [
                        'Ahmet', 'Mustafa', 'Mehmet', 'Ali', 'Hüseyin', 'Hasan', 'İbrahim', 'Ömer', 'Murat', 'Yusuf',
                        'Osman', 'İsmail', 'Fatih', 'Orhan', 'Kemal', 'Süleyman', 'Ahmet', 'Mehmet', 'Hüseyin', 'Yusuf',
                        'İsmail', 'Ali', 'Mustafa', 'Osman', 'Erdem', 'Oğuz', 'Cem', 'Emre', 'Can', 'Furkan',
                        'Burak', 'Yunus', 'Serkan', 'Gökhan', 'Barış', 'Berkay', 'Bora', 'Tolga', 'Umut', 'Kaan',
                        'Onur', 'Taha', 'Eren', 'Enes', 'Kerem', 'Yasin', 'Uğur', 'Selim', 'Deniz', 'Cihan',
                        'Emir', 'Emre', 'Ahmet', 'Mert', 'Kaan', 'Arda', 'Mehmet', 'Ali', 'Yusuf', 'Mustafa',
                        'Hüseyin', 'Oğuz', 'İsmail', 'Osman', 'Eren', 'Tolga', 'Kerem', 'Onur', 'Berkay', 'Burak',
                        'Can', 'Emir', 'Barış', 'Ege', 'Enes', 'Taha', 'Umut', 'Bora', 'Deniz', 'Gökhan',
                        'Uğur', 'Furkan', 'Koray', 'Orhan', 'Mert', 'Serkan', 'Yunus', 'Süleyman', 'İbrahim', 'Emre',
                        'Yasin', 'Batuhan', 'Cem', 'Erhan', 'Kemal', 'Bilge', 'Ozan', 'Emirhan', 'Sercan', 'Atakan'
                      ],
                    'second': [
                        'Yılmaz', 'Kaya', 'Demir', 'Şahin', 'Yıldırım', 'Çelik', 'Erdoğan', 'Yılmazer', 'Yalın', 'Acar',
                        'Arslan', 'Güneş', 'Koç', 'Erbay', 'Bulut', 'Türk', 'Toprak', 'Karahan', 'Eren', 'Altun',
                        'Kurt', 'Duran', 'Özdemir', 'Kılıç', 'Çetin', 'Göktürk', 'Karadeniz', 'Kaplan', 'Taş', 'Atalay',
                        'Başaran', 'Şen', 'Doğan', 'Yücel', 'Çiçek', 'Çakır', 'Aktaş', 'Yıldız', 'Karaman', 'Öztürk',
                        'Yavuz', 'Gürbüz', 'Türkoğlu', 'Kocaman', 'Ateş', 'Büyük', 'Küçük', 'Bilgin', 'Karakaş', 'Yener',
                        'Uysal', 'Kara', 'Aydın', 'Koyuncu', 'Kurtuluş', 'Demirtaş', 'Küçük', 'Aksu', 'Alkan', 'Gür',
                        'Şentürk', 'Karaer', 'Yiğit', 'Uzun', 'Sarıkaya', 'Akça', 'Oktay', 'Sönmez', 'Ceylan', 'Bayrak',
                        'Yalçın', 'Gökalp', 'Kazancı', 'Erdem', 'Coşkun', 'Akgün', 'Yılmaz', 'Arı', 'Karakaya', 'Gül',
                        'Özen', 'Kaptan', 'Emin', 'Karagöz', 'Aslan', 'Yazıcı', 'Yıldız', 'Özkan', 'Genç', 'Gönenç',
                        'Berk', 'Korkmaz', 'Kocaoğlu', 'Gürsoy', 'Sarı', 'Aydın', 'Gönül', 'Cemal', 'Çoban', 'Yüksel'
                      ]
                },
                'female': {
                    'first': [
                        'Ayşe', 'Fatma', 'Aysel', 'Zeynep', 'Emine', 'Hatice', 'Melek', 'Meryem', 'Ebru', 'Sevgi',
                        'Hülya', 'Seda', 'Duygu', 'Elif', 'Cemile', 'Gül', 'Nuray', 'Yasemin', 'Selin', 'Aslı',
                        'Esra', 'Ece', 'Ceren', 'Gizem', 'İrem', 'Şeyma', 'Merve', 'Sema', 'Leyla', 'Burcu',
                        'Rabia', 'Nihan', 'Fulya', 'Meltem', 'Gizem', 'Ezgi', 'Büşra', 'Yasmin', 'Ezgi', 'Yağmur',
                        'Pınar', 'Zehra', 'Zeliha', 'Elvan', 'Zümrüt', 'Hafize', 'Sibel', 'Sude', 'Süheyla', 'Leman',
                        'Aylin', 'Ebru', 'Dilek', 'Beren', 'Bilge', 'Esila', 'Gülşah', 'Nur', 'Elmas', 'Melike',
                        'Şule', 'Sedef', 'Gonca', 'Hande', 'Nurcan', 'Tuğba', 'Özlem', 'Selma', 'Sevil', 'Tuğçe',
                        'Gülizar', 'Nazlı', 'İlknur', 'Figen', 'Zara', 'Binnur', 'Oya', 'Cansu', 'Eylem', 'Buse',
                        'İlkay', 'Yelda', 'Hacer', 'Lale', 'Nilüfer', 'Ceyda', 'Züleyha', 'Duygu', 'Nihal', 'Rumeysa'
                      ],
                    'second': [
                        'Yılmaz', 'Kaya', 'Demir', 'Şahin', 'Yıldırım', 'Çelik', 'Erdoğan', 'Yılmazer', 'Yalın', 'Acar',
                        'Arslan', 'Güneş', 'Koç', 'Erbay', 'Bulut', 'Türk', 'Toprak', 'Karahan', 'Eren', 'Altun',
                        'Kurt', 'Duran', 'Özdemir', 'Kılıç', 'Çetin', 'Göktürk', 'Karadeniz', 'Kaplan', 'Taş', 'Atalay',
                        'Başaran', 'Şen', 'Doğan', 'Yücel', 'Çiçek', 'Çakır', 'Aktaş', 'Yıldız', 'Karaman', 'Öztürk',
                        'Yavuz', 'Gürbüz', 'Türkoğlu', 'Kocaman', 'Ateş', 'Büyük', 'Küçük', 'Bilgin', 'Karakaş', 'Yener',
                        'Uysal', 'Kara', 'Aydın', 'Koyuncu', 'Kurtuluş', 'Demirtaş', 'Küçük', 'Aksu', 'Alkan', 'Gür',
                        'Şentürk', 'Karaer', 'Yiğit', 'Uzun', 'Sarıkaya', 'Akça', 'Oktay', 'Sönmez', 'Ceylan', 'Bayrak',
                        'Yalçın', 'Gökalp', 'Kazancı', 'Erdem', 'Coşkun', 'Akgün', 'Yılmaz', 'Arı', 'Karakaya', 'Gül',
                        'Özen', 'Kaptan', 'Emin', 'Karagöz', 'Aslan', 'Yazıcı', 'Yıldız', 'Özkan', 'Genç', 'Gönenç',
                        'Berk', 'Korkmaz', 'Kocaoğlu', 'Gürsoy', 'Sarı', 'Aydın', 'Gönül', 'Cemal', 'Çoban', 'Yüksel'
                      ],
                }
            }
        }},
    'Finland': { 'en': {
            'sex': {
                'male': {
                    'first': [
                        'Aapo', 'Eero', 'Juho', 'Antti', 'Veikko', 'Matti', 'Olli', 'Tero', 'Kalle', 'Joonas',
                        'Lauri', 'Teemu', 'Ville', 'Markus', 'Ilmari', 'Sami', 'Otto', 'Topi', 'Heikki', 'Niko',
                        'Aleksi', 'Tuomas', 'Mikko', 'Jani', 'Jesse', 'Anton', 'Jukka', 'Henrik', 'Sebastian', 'Ilari',
                        'Eetu', 'Tommi', 'Timo', 'Veli', 'Petri', 'Tomi', 'Jarmo', 'Santtu', 'Juhani', 'Pekka',
                        'Kari', 'Janne', 'Aki', 'Akseli', 'Atte', 'Erkki', 'Esko', 'Väinö', 'Ilpo', 'Juhana',
                        'Aarne', 'Jari', 'Oskari', 'Panu', 'Tapani', 'Veli-Matti', 'Viljami', 'Jaakko', 'Heimo', 'Arto',
                        'Sampo', 'Kustaa', 'Risto', 'Taisto', 'Johannes', 'Jouni', 'Lasse', 'Pertti', 'Rauno', 'Jorma',
                        'Tapio', 'Reino', 'Antero', 'Sakari', 'Esko', 'Tero', 'Martti', 'Arvo', 'Jani', 'Sami',
                        'Akseli', 'Erkki', 'Teppo', 'Anton', 'Lauri', 'Onni', 'Eemeli', 'Arttu', 'Joel', 'Seppo',
                        'Valtteri', 'Tarmo', 'Mikael', 'Riku', 'Atte', 'Aleksi', 'Lauri', 'Ismo', 'Aimo', 'Eino'
                      ],
                    'second': [
                        'Virtanen', 'Korhonen', 'Mäkinen', 'Nieminen', 'Mäkelä', 'Hämäläinen', 'Laine', 'Heikkinen', 'Koskinen', 'Järvinen',
                        'Lehtonen', 'Lehtinen', 'Leppänen', 'Väisänen', 'Laitinen', 'Hietala', 'Miettinen', 'Saarinen', 'Karjalainen', 'Ollila',
                        'Rantanen', 'Lindholm', 'Laaksonen', 'Tikkanen', 'Salminen', 'Kallio', 'Kuusisto', 'Salmi', 'Väänänen', 'Lindström',
                        'Koivisto', 'Räsänen', 'Kinnunen', 'Lappalainen', 'Hietanen', 'Manninen', 'Koivula', 'Hakala', 'Sipilä', 'Aaltonen',
                        'Nenonen', 'Kallionpää', 'Kettunen', 'Lähteenmäki', 'Kokko', 'Suominen', 'Tervo', 'Kivilahti', 'Ruotsalainen', 'Laitila',
                        'Rautio', 'Salonen', 'Kuronen', 'Pulkkinen', 'Hakulinen', 'Kähkönen', 'Huttunen', 'Pakarinen', 'Koskela', 'Lahti',
                        'Kujala', 'Lammi', 'Viljanen', 'Haapanen', 'Tolonen', 'Hakkarainen', 'Pitkänen', 'Lindroos', 'Hautamäki', 'Savolainen',
                        'Mikkola', 'Soininen', 'Laakso', 'Tolvanen', 'Tervonen', 'Karhu', 'Koivunen', 'Korpi', 'Salo', 'Tanskanen',
                        'Lampinen', 'Laakio', 'Pasanen', 'Sarala', 'Pirinen', 'Niskanen', 'Kosonen', 'Tervo', 'Lämsä', 'Ikonen',
                        'Jokinen', 'Rautiainen', 'Heino', 'Tammela', 'Pietilä', 'Niemelä', 'Kortelainen', 'Luukkonen', 'Kivinen', 'Peltola'
                      ]
                },
                'female': {
                    'first': [
                        'Aino', 'Amanda', 'Anni', 'Helmi', 'Iida', 'Johanna', 'Lotta', 'Eeva', 'Hanna', 'Kaisa',
                        'Leena', 'Mari', 'Niina', 'Olivia', 'Pinja', 'Riikka', 'Sofia', 'Tuuli', 'Vilma', 'Emilia',
                        'Heli', 'Jasmin', 'Linda', 'Milja', 'Noora', 'Aada', 'Anna', 'Elina', 'Heidi', 'Katri',
                        'Lotta', 'Milla', 'Nelli', 'Oona', 'Saana', 'Tiia', 'Venla', 'Ilona', 'Sanni', 'Ella',
                        'Essi', 'Heta', 'Kerttu', 'Kerttu', 'Kylli', 'Laura', 'Nina', 'Oili', 'Pia', 'Rosa',
                        'Satu', 'Tanja', 'Veera', 'Aili', 'Anita', 'Emmi', 'Heta', 'Iina', 'Jenni', 'Kerttu',
                        'Kia', 'Maija', 'Noora', 'Outi', 'Riina', 'Susanna', 'Tiina', 'Ulla', 'Vieno', 'Aulikki',
                        'Elsa', 'Hilkka', 'Irja', 'Kaarina', 'Lempi', 'Maija-Liisa', 'Pirkko', 'Seija', 'Tellervo', 'Ursula',
                        'Vappu', 'Ylva', 'Aili', 'Aune', 'Inkeri', 'Kyllikki', 'Marja', 'Reeta', 'Sirkka', 'Tellervo',
                        'Ulpu', 'Valpuri', 'Annikki', 'Helka', 'Ilma', 'Kukka', 'Marjatta', 'Orvokki', 'Sisko', 'Taru'
                      ],
                    'second': [
                        'Virtanen', 'Korhonen', 'Mäkinen', 'Nieminen', 'Mäkelä', 'Hämäläinen', 'Laine', 'Heikkinen', 'Koskinen', 'Järvinen',
                        'Lehtonen', 'Lehtinen', 'Leppänen', 'Väisänen', 'Laitinen', 'Hietala', 'Miettinen', 'Saarinen', 'Karjalainen', 'Ollila',
                        'Rantanen', 'Lindholm', 'Laaksonen', 'Tikkanen', 'Salminen', 'Kallio', 'Kuusisto', 'Salmi', 'Väänänen', 'Lindström',
                        'Koivisto', 'Räsänen', 'Kinnunen', 'Lappalainen', 'Hietanen', 'Manninen', 'Koivula', 'Hakala', 'Sipilä', 'Aaltonen',
                        'Nenonen', 'Kallionpää', 'Kettunen', 'Lähteenmäki', 'Kokko', 'Suominen', 'Tervo', 'Kivilahti', 'Ruotsalainen', 'Laitila',
                        'Rautio', 'Salonen', 'Kuronen', 'Pulkkinen', 'Hakulinen', 'Kähkönen', 'Huttunen', 'Pakarinen', 'Koskela', 'Lahti',
                        'Kujala', 'Lammi', 'Viljanen', 'Haapanen', 'Tolonen', 'Hakkarainen', 'Pitkänen', 'Lindroos', 'Hautamäki', 'Savolainen',
                        'Mikkola', 'Soininen', 'Laakso', 'Tolvanen', 'Tervonen', 'Karhu', 'Koivunen', 'Korpi', 'Salo', 'Tanskanen',
                        'Lampinen', 'Laakio', 'Pasanen', 'Sarala', 'Pirinen', 'Niskanen', 'Kosonen', 'Tervo', 'Lämsä', 'Ikonen',
                        'Jokinen', 'Rautiainen', 'Heino', 'Tammela', 'Pietilä', 'Niemelä', 'Kortelainen', 'Luukkonen', 'Kivinen', 'Peltola'
                      ],
                }
            }
        }, 'native': {
            'sex': {
                'male': {
                    'first': [
                        'Aapo', 'Eero', 'Juho', 'Antti', 'Veikko', 'Matti', 'Olli', 'Tero', 'Kalle', 'Joonas',
                        'Lauri', 'Teemu', 'Ville', 'Markus', 'Ilmari', 'Sami', 'Otto', 'Topi', 'Heikki', 'Niko',
                        'Aleksi', 'Tuomas', 'Mikko', 'Jani', 'Jesse', 'Anton', 'Jukka', 'Henrik', 'Sebastian', 'Ilari',
                        'Eetu', 'Tommi', 'Timo', 'Veli', 'Petri', 'Tomi', 'Jarmo', 'Santtu', 'Juhani', 'Pekka',
                        'Kari', 'Janne', 'Aki', 'Akseli', 'Atte', 'Erkki', 'Esko', 'Väinö', 'Ilpo', 'Juhana',
                        'Aarne', 'Jari', 'Oskari', 'Panu', 'Tapani', 'Veli-Matti', 'Viljami', 'Jaakko', 'Heimo', 'Arto',
                        'Sampo', 'Kustaa', 'Risto', 'Taisto', 'Johannes', 'Jouni', 'Lasse', 'Pertti', 'Rauno', 'Jorma',
                        'Tapio', 'Reino', 'Antero', 'Sakari', 'Esko', 'Tero', 'Martti', 'Arvo', 'Jani', 'Sami',
                        'Akseli', 'Erkki', 'Teppo', 'Anton', 'Lauri', 'Onni', 'Eemeli', 'Arttu', 'Joel', 'Seppo',
                        'Valtteri', 'Tarmo', 'Mikael', 'Riku', 'Atte', 'Aleksi', 'Lauri', 'Ismo', 'Aimo', 'Eino'
                      ],
                    'second': [
                        'Virtanen', 'Korhonen', 'Mäkinen', 'Nieminen', 'Mäkelä', 'Hämäläinen', 'Laine', 'Heikkinen', 'Koskinen', 'Järvinen',
                        'Lehtonen', 'Lehtinen', 'Leppänen', 'Väisänen', 'Laitinen', 'Hietala', 'Miettinen', 'Saarinen', 'Karjalainen', 'Ollila',
                        'Rantanen', 'Lindholm', 'Laaksonen', 'Tikkanen', 'Salminen', 'Kallio', 'Kuusisto', 'Salmi', 'Väänänen', 'Lindström',
                        'Koivisto', 'Räsänen', 'Kinnunen', 'Lappalainen', 'Hietanen', 'Manninen', 'Koivula', 'Hakala', 'Sipilä', 'Aaltonen',
                        'Nenonen', 'Kallionpää', 'Kettunen', 'Lähteenmäki', 'Kokko', 'Suominen', 'Tervo', 'Kivilahti', 'Ruotsalainen', 'Laitila',
                        'Rautio', 'Salonen', 'Kuronen', 'Pulkkinen', 'Hakulinen', 'Kähkönen', 'Huttunen', 'Pakarinen', 'Koskela', 'Lahti',
                        'Kujala', 'Lammi', 'Viljanen', 'Haapanen', 'Tolonen', 'Hakkarainen', 'Pitkänen', 'Lindroos', 'Hautamäki', 'Savolainen',
                        'Mikkola', 'Soininen', 'Laakso', 'Tolvanen', 'Tervonen', 'Karhu', 'Koivunen', 'Korpi', 'Salo', 'Tanskanen',
                        'Lampinen', 'Laakio', 'Pasanen', 'Sarala', 'Pirinen', 'Niskanen', 'Kosonen', 'Tervo', 'Lämsä', 'Ikonen',
                        'Jokinen', 'Rautiainen', 'Heino', 'Tammela', 'Pietilä', 'Niemelä', 'Kortelainen', 'Luukkonen', 'Kivinen', 'Peltola'
                      ]
                },
                'female': {
                    'first': [
                        'Aino', 'Amanda', 'Anni', 'Helmi', 'Iida', 'Johanna', 'Lotta', 'Eeva', 'Hanna', 'Kaisa',
                        'Leena', 'Mari', 'Niina', 'Olivia', 'Pinja', 'Riikka', 'Sofia', 'Tuuli', 'Vilma', 'Emilia',
                        'Heli', 'Jasmin', 'Linda', 'Milja', 'Noora', 'Aada', 'Anna', 'Elina', 'Heidi', 'Katri',
                        'Lotta', 'Milla', 'Nelli', 'Oona', 'Saana', 'Tiia', 'Venla', 'Ilona', 'Sanni', 'Ella',
                        'Essi', 'Heta', 'Kerttu', 'Kerttu', 'Kylli', 'Laura', 'Nina', 'Oili', 'Pia', 'Rosa',
                        'Satu', 'Tanja', 'Veera', 'Aili', 'Anita', 'Emmi', 'Heta', 'Iina', 'Jenni', 'Kerttu',
                        'Kia', 'Maija', 'Noora', 'Outi', 'Riina', 'Susanna', 'Tiina', 'Ulla', 'Vieno', 'Aulikki',
                        'Elsa', 'Hilkka', 'Irja', 'Kaarina', 'Lempi', 'Maija-Liisa', 'Pirkko', 'Seija', 'Tellervo', 'Ursula',
                        'Vappu', 'Ylva', 'Aili', 'Aune', 'Inkeri', 'Kyllikki', 'Marja', 'Reeta', 'Sirkka', 'Tellervo',
                        'Ulpu', 'Valpuri', 'Annikki', 'Helka', 'Ilma', 'Kukka', 'Marjatta', 'Orvokki', 'Sisko', 'Taru'
                      ],
                    'second': [
                        'Virtanen', 'Korhonen', 'Mäkinen', 'Nieminen', 'Mäkelä', 'Hämäläinen', 'Laine', 'Heikkinen', 'Koskinen', 'Järvinen',
                        'Lehtonen', 'Lehtinen', 'Leppänen', 'Väisänen', 'Laitinen', 'Hietala', 'Miettinen', 'Saarinen', 'Karjalainen', 'Ollila',
                        'Rantanen', 'Lindholm', 'Laaksonen', 'Tikkanen', 'Salminen', 'Kallio', 'Kuusisto', 'Salmi', 'Väänänen', 'Lindström',
                        'Koivisto', 'Räsänen', 'Kinnunen', 'Lappalainen', 'Hietanen', 'Manninen', 'Koivula', 'Hakala', 'Sipilä', 'Aaltonen',
                        'Nenonen', 'Kallionpää', 'Kettunen', 'Lähteenmäki', 'Kokko', 'Suominen', 'Tervo', 'Kivilahti', 'Ruotsalainen', 'Laitila',
                        'Rautio', 'Salonen', 'Kuronen', 'Pulkkinen', 'Hakulinen', 'Kähkönen', 'Huttunen', 'Pakarinen', 'Koskela', 'Lahti',
                        'Kujala', 'Lammi', 'Viljanen', 'Haapanen', 'Tolonen', 'Hakkarainen', 'Pitkänen', 'Lindroos', 'Hautamäki', 'Savolainen',
                        'Mikkola', 'Soininen', 'Laakso', 'Tolvanen', 'Tervonen', 'Karhu', 'Koivunen', 'Korpi', 'Salo', 'Tanskanen',
                        'Lampinen', 'Laakio', 'Pasanen', 'Sarala', 'Pirinen', 'Niskanen', 'Kosonen', 'Tervo', 'Lämsä', 'Ikonen',
                        'Jokinen', 'Rautiainen', 'Heino', 'Tammela', 'Pietilä', 'Niemelä', 'Kortelainen', 'Luukkonen', 'Kivinen', 'Peltola'
                      ],
                }
            }
        }},
    'Croatia': { 'en': {
            'sex': {
                'male': {
                    'first': [
                        'Ivan', 'Marko', 'Josip', 'Ante', 'Petar', 'Matej', 'Tomislav', 'Nikola', 'Filip', 'Igor',
                        'Davor', 'Ivica', 'Zoran', 'Luka', 'Mario', 'Dario', 'Kristijan', 'Stjepan', 'Damir', 'Robert',
                        'Renato', 'Marin', 'Dražen', 'Boris', 'Domagoj', 'Sinisa', 'Ilija', 'Vladimir', 'Krunoslav', 'Miro',
                        'Siniša', 'Ivo', 'Hrvoje', 'Goran', 'Zvonimir', 'Josip', 'Dinko', 'Branimir', 'Dino', 'Jure',
                        'Željko', 'Karlo', 'Duje', 'Šime', 'Toni', 'Dalibor', 'Zdravko', 'Ivan', 'Darko', 'Franko',
                        'René', 'Stipe', 'Marino', 'Davorin', 'Dragan', 'Dinko', 'Ljudevit', 'Valentino', 'Zdravko', 'Ivano',
                        'Davor', 'Vedran', 'Alen', 'Matija', 'Bruno', 'Božidar', 'Jakov', 'Adrian', 'Nenad', 'Stanko',
                        'Emil', 'Vatroslav', 'Denis', 'Tomislav', 'Robert', 'Andrija', 'Karlo', 'Grgur', 'Kresimir', 'Neven',
                        'Tihomir', 'Sandro', 'Želimir', 'Dorian', 'Edi', 'Filip', 'Gabriel', 'Ilija', 'Janko', 'Karlo',
                        'Luka', 'Marin', 'Nino', 'Ognjen', 'Patrik', 'Roko', 'Teo', 'Viktor', 'Zvonimir', 'Zygmunt'
                      ],
                    'second': [
                        'Kovačić', 'Horvat', 'Babić', 'Jurić', 'Pavić', 'Novak', 'Marić', 'Ivanović', 'Kovač', 'Tomljanović',
                        'Vuković', 'Knežević', 'Perić', 'Kovačević', 'Radić', 'Matić', 'Blažević', 'Petrović', 'Marković', 'Vidović',
                        'Nikolić', 'Jovanović', 'Kos', 'Križanović', 'Pavlović', 'Lukić', 'Vlahović', 'Barišić', 'Šarić', 'Rukavina',
                        'Tomić', 'Martinović', 'Perković', 'Blažić', 'Varga', 'Milić', 'Ilić', 'Antunović', 'Zorić', 'Vukelić',
                        'Obradović', 'Klarić', 'Šimunović', 'Cindrić', 'Herceg', 'Šimić', 'Čuljak', 'Lovrić', 'Mišić', 'Župan',
                        'Katić', 'Vukman', 'Mišković', 'Jerković', 'Vučković', 'Maras', 'Čule', 'Ivančić', 'Blažičević', 'Pleško',
                        'Radišić', 'Mandić', 'Brezina', 'Valentić', 'Bukovac', 'Ivanković', 'Šošić', 'Bašić', 'Galić', 'Tadić',
                        'Dragović', 'Vlašić', 'Škrlec', 'Bogdanović', 'Pavlić', 'Lončarić', 'Zelić', 'Radoš', 'Kramarić', 'Crnčić',
                        'Grgić', 'Grubišić', 'Jukić', 'Čolak', 'Matković', 'Ledenko', 'Bralić', 'Španić', 'Ljubić', 'Majetić',
                        'Krznarić', 'Karačić', 'Medić', 'Špoljarić', 'Kovačić', 'Klisović', 'Bogdanić', 'Dadić', 'Fabić', 'Čavlek'
                      ]
                },
                'female': {
                    'first': [
                        'Ana', 'Iva', 'Martina', 'Elena', 'Petra', 'Lucija', 'Mia', 'Ivana', 'Marija', 'Kristina',
                        'Nina', 'Sara', 'Magdalena', 'Dora', 'Tina', 'Monika', 'Lana', 'Ema', 'Andrea', 'Dijana',
                        'Josipa', 'Katarina', 'Tamara', 'Antonija', 'Ana-Marija', 'Valentina', 'Laura', 'Barbara', 'Vesna', 'Jelena',
                        'Natalija', 'Lea', 'Nika', 'Viktorija', 'Ivana', 'Lucija', 'Lara', 'Tea', 'Vanja', 'Ivona',
                        'Ljiljana', 'Martina', 'Ines', 'Vanda', 'Klara', 'Marina', 'Ella', 'Ana', 'Ljubica', 'Mirjana',
                        'Tamara', 'Ivana', 'Nina', 'Monika', 'Kristina', 'Matea', 'Dora', 'Marija', 'Helena', 'Sandra',
                        'Diana', 'Dunja', 'Elena', 'Luna', 'Antonela', 'Neda', 'Adrijana', 'Eva', 'Karla', 'Nikolina',
                        'Ivanka', 'Jasna', 'Branka', 'Ana', 'Lejla', 'Vlatka', 'Ivana', 'Antonia', 'Magdalena', 'Ivanka',
                        'Klaudija', 'Ivona', 'Tamara', 'Marta', 'Renata', 'Sonja', 'Tamara', 'Tena', 'Matea', 'Mihaela',
                        'Nika', 'Petra', 'Sara', 'Tina', 'Valentina', 'Vesna', 'Zrinka', 'Anamarija', 'Dorotea', 'Josipa'
                      ],
                    'second': [
                        'Kovačić', 'Horvat', 'Babić', 'Jurić', 'Pavić', 'Novak', 'Marić', 'Ivanović', 'Kovač', 'Tomljanović',
                        'Vuković', 'Knežević', 'Perić', 'Kovačević', 'Radić', 'Matić', 'Blažević', 'Petrović', 'Marković', 'Vidović',
                        'Nikolić', 'Jovanović', 'Kos', 'Križanović', 'Pavlović', 'Lukić', 'Vlahović', 'Barišić', 'Šarić', 'Rukavina',
                        'Tomić', 'Martinović', 'Perković', 'Blažić', 'Varga', 'Milić', 'Ilić', 'Antunović', 'Zorić', 'Vukelić',
                        'Obradović', 'Klarić', 'Šimunović', 'Cindrić', 'Herceg', 'Šimić', 'Čuljak', 'Lovrić', 'Mišić', 'Župan',
                        'Katić', 'Vukman', 'Mišković', 'Jerković', 'Vučković', 'Maras', 'Čule', 'Ivančić', 'Blažičević', 'Pleško',
                        'Radišić', 'Mandić', 'Brezina', 'Valentić', 'Bukovac', 'Ivanković', 'Šošić', 'Bašić', 'Galić', 'Tadić',
                        'Dragović', 'Vlašić', 'Škrlec', 'Bogdanović', 'Pavlić', 'Lončarić', 'Zelić', 'Radoš', 'Kramarić', 'Crnčić',
                        'Grgić', 'Grubišić', 'Jukić', 'Čolak', 'Matković', 'Ledenko', 'Bralić', 'Španić', 'Ljubić', 'Majetić',
                        'Krznarić', 'Karačić', 'Medić', 'Špoljarić', 'Kovačić', 'Klisović', 'Bogdanić', 'Dadić', 'Fabić', 'Čavlek'
                      ],
                }
            }
        }, 'native': {
            'sex': {
                'male': {
                    'first': [
                        'Ivan', 'Marko', 'Josip', 'Ante', 'Petar', 'Matej', 'Tomislav', 'Nikola', 'Filip', 'Igor',
                        'Davor', 'Ivica', 'Zoran', 'Luka', 'Mario', 'Dario', 'Kristijan', 'Stjepan', 'Damir', 'Robert',
                        'Renato', 'Marin', 'Dražen', 'Boris', 'Domagoj', 'Sinisa', 'Ilija', 'Vladimir', 'Krunoslav', 'Miro',
                        'Siniša', 'Ivo', 'Hrvoje', 'Goran', 'Zvonimir', 'Josip', 'Dinko', 'Branimir', 'Dino', 'Jure',
                        'Željko', 'Karlo', 'Duje', 'Šime', 'Toni', 'Dalibor', 'Zdravko', 'Ivan', 'Darko', 'Franko',
                        'René', 'Stipe', 'Marino', 'Davorin', 'Dragan', 'Dinko', 'Ljudevit', 'Valentino', 'Zdravko', 'Ivano',
                        'Davor', 'Vedran', 'Alen', 'Matija', 'Bruno', 'Božidar', 'Jakov', 'Adrian', 'Nenad', 'Stanko',
                        'Emil', 'Vatroslav', 'Denis', 'Tomislav', 'Robert', 'Andrija', 'Karlo', 'Grgur', 'Kresimir', 'Neven',
                        'Tihomir', 'Sandro', 'Želimir', 'Dorian', 'Edi', 'Filip', 'Gabriel', 'Ilija', 'Janko', 'Karlo',
                        'Luka', 'Marin', 'Nino', 'Ognjen', 'Patrik', 'Roko', 'Teo', 'Viktor', 'Zvonimir', 'Zygmunt'
                      ],
                    'second': [
                        'Kovačić', 'Horvat', 'Babić', 'Jurić', 'Pavić', 'Novak', 'Marić', 'Ivanović', 'Kovač', 'Tomljanović',
                        'Vuković', 'Knežević', 'Perić', 'Kovačević', 'Radić', 'Matić', 'Blažević', 'Petrović', 'Marković', 'Vidović',
                        'Nikolić', 'Jovanović', 'Kos', 'Križanović', 'Pavlović', 'Lukić', 'Vlahović', 'Barišić', 'Šarić', 'Rukavina',
                        'Tomić', 'Martinović', 'Perković', 'Blažić', 'Varga', 'Milić', 'Ilić', 'Antunović', 'Zorić', 'Vukelić',
                        'Obradović', 'Klarić', 'Šimunović', 'Cindrić', 'Herceg', 'Šimić', 'Čuljak', 'Lovrić', 'Mišić', 'Župan',
                        'Katić', 'Vukman', 'Mišković', 'Jerković', 'Vučković', 'Maras', 'Čule', 'Ivančić', 'Blažičević', 'Pleško',
                        'Radišić', 'Mandić', 'Brezina', 'Valentić', 'Bukovac', 'Ivanković', 'Šošić', 'Bašić', 'Galić', 'Tadić',
                        'Dragović', 'Vlašić', 'Škrlec', 'Bogdanović', 'Pavlić', 'Lončarić', 'Zelić', 'Radoš', 'Kramarić', 'Crnčić',
                        'Grgić', 'Grubišić', 'Jukić', 'Čolak', 'Matković', 'Ledenko', 'Bralić', 'Španić', 'Ljubić', 'Majetić',
                        'Krznarić', 'Karačić', 'Medić', 'Špoljarić', 'Kovačić', 'Klisović', 'Bogdanić', 'Dadić', 'Fabić', 'Čavlek'
                      ]
                },
                'female': {
                    'first': [
                        'Ana', 'Iva', 'Martina', 'Elena', 'Petra', 'Lucija', 'Mia', 'Ivana', 'Marija', 'Kristina',
                        'Nina', 'Sara', 'Magdalena', 'Dora', 'Tina', 'Monika', 'Lana', 'Ema', 'Andrea', 'Dijana',
                        'Josipa', 'Katarina', 'Tamara', 'Antonija', 'Ana-Marija', 'Valentina', 'Laura', 'Barbara', 'Vesna', 'Jelena',
                        'Natalija', 'Lea', 'Nika', 'Viktorija', 'Ivana', 'Lucija', 'Lara', 'Tea', 'Vanja', 'Ivona',
                        'Ljiljana', 'Martina', 'Ines', 'Vanda', 'Klara', 'Marina', 'Ella', 'Ana', 'Ljubica', 'Mirjana',
                        'Tamara', 'Ivana', 'Nina', 'Monika', 'Kristina', 'Matea', 'Dora', 'Marija', 'Helena', 'Sandra',
                        'Diana', 'Dunja', 'Elena', 'Luna', 'Antonela', 'Neda', 'Adrijana', 'Eva', 'Karla', 'Nikolina',
                        'Ivanka', 'Jasna', 'Branka', 'Ana', 'Lejla', 'Vlatka', 'Ivana', 'Antonia', 'Magdalena', 'Ivanka',
                        'Klaudija', 'Ivona', 'Tamara', 'Marta', 'Renata', 'Sonja', 'Tamara', 'Tena', 'Matea', 'Mihaela',
                        'Nika', 'Petra', 'Sara', 'Tina', 'Valentina', 'Vesna', 'Zrinka', 'Anamarija', 'Dorotea', 'Josipa'
                      ],
                    'second': [
                        'Kovačić', 'Horvat', 'Babić', 'Jurić', 'Pavić', 'Novak', 'Marić', 'Ivanović', 'Kovač', 'Tomljanović',
                        'Vuković', 'Knežević', 'Perić', 'Kovačević', 'Radić', 'Matić', 'Blažević', 'Petrović', 'Marković', 'Vidović',
                        'Nikolić', 'Jovanović', 'Kos', 'Križanović', 'Pavlović', 'Lukić', 'Vlahović', 'Barišić', 'Šarić', 'Rukavina',
                        'Tomić', 'Martinović', 'Perković', 'Blažić', 'Varga', 'Milić', 'Ilić', 'Antunović', 'Zorić', 'Vukelić',
                        'Obradović', 'Klarić', 'Šimunović', 'Cindrić', 'Herceg', 'Šimić', 'Čuljak', 'Lovrić', 'Mišić', 'Župan',
                        'Katić', 'Vukman', 'Mišković', 'Jerković', 'Vučković', 'Maras', 'Čule', 'Ivančić', 'Blažičević', 'Pleško',
                        'Radišić', 'Mandić', 'Brezina', 'Valentić', 'Bukovac', 'Ivanković', 'Šošić', 'Bašić', 'Galić', 'Tadić',
                        'Dragović', 'Vlašić', 'Škrlec', 'Bogdanović', 'Pavlić', 'Lončarić', 'Zelić', 'Radoš', 'Kramarić', 'Crnčić',
                        'Grgić', 'Grubišić', 'Jukić', 'Čolak', 'Matković', 'Ledenko', 'Bralić', 'Španić', 'Ljubić', 'Majetić',
                        'Krznarić', 'Karačić', 'Medić', 'Špoljarić', 'Kovačić', 'Klisović', 'Bogdanić', 'Dadić', 'Fabić', 'Čavlek'
                      ],
                }
            }
        }},
    'Czech': { 'en': {
            'sex': {
                'male': {
                    'first': [
                        'Jan', 'Jakub', 'Tomáš', 'Adam', 'Matěj', 'Filip', 'Ondřej', 'Vojtěch', 'David', 'Lukáš',
                        'Martin', 'Petr', 'Daniel', 'Jiří', 'Michal', 'Karel', 'Erik', 'Josef', 'Pavel', 'Aleš',
                        'Marek', 'Václav', 'Štěpán', 'Tadeáš', 'Dominik', 'Ján', 'Radek', 'Robert', 'Antonín', 'Dalibor',
                        'Filip', 'Hynek', 'Viktor', 'Richard', 'Eduard', 'Igor', 'František', 'Jaroslav', 'Jindřich', 'Leoš',
                        'Luboš', 'Oldřich', 'Radim', 'Bohumil', 'Bronislav', 'Ctirad', 'Drahomír', 'Emil', 'Gabriel', 'Hugo',
                        'Ignác', 'Kvido', 'Leopold', 'Matouš', 'Nikolas', 'Oskar', 'Patrik', 'Quido', 'Rostislav', 'Řehoř',
                        'Slavomír', 'Tobiáš', 'Urban', 'Vladan', 'Xaver', 'Yanek', 'Zbyněk', 'Žan', 'Cyril', 'Davídek',
                        'Felix', 'Gustav', 'Hynek', 'Ivan', 'Jáchym', 'Kristián', 'Ladislav', 'Mikuláš', 'Norbert', 'Oleg',
                        'Pravoslav', 'Quirin', 'Roman', 'Svatopluk', 'Taras', 'Urh', 'Vlastislav', 'Vítězslav', 'Walter', 'Xenofont',
                        'Yaroslav', 'Zdeněk', 'Alois', 'Břetislav', 'Czeslaw', 'Dimitrij', 'Emanuel', 'Florián', 'Gideon', 'Hermann'
                      ],
                    'second': [
                        'Novák', 'Svoboda', 'Novotný', 'Dvořák', 'Černý', 'Procházka', 'Kučera', 'Veselý', 'Horák', 'Marek',
                        'Jelínek', 'Hájek', 'Krejčí', 'Růžička', 'Beneš', 'Fišer', 'Sedláček', 'Kovář', 'Vaněk', 'Urban',
                        'Polák', 'Bartoš', 'Fiala', 'Pospíšil', 'Kopecký', 'Němec', 'Mach', 'Konečný', 'Král', 'Richter',
                        'Kolář', 'Bárta', 'Šimek', 'Sýkora', 'Havel', 'Blažek', 'Mazánek', 'Bílý', 'Štěpánek', 'Kubíček',
                        'Švec', 'Bláha', 'Hruška', 'Bártek', 'Koutný', 'Mareček', 'Tichý', 'Holub', 'Dohnal', 'Nosek',
                        'Šebek', 'Ryba', 'Tomeš', 'Zeman', 'Pekárek', 'Zábranský', 'Krejča', 'Sedlák', 'Havlíček', 'Ludvík',
                        'Čížek', 'Chalupa', 'Míček', 'Zajíc', 'Šimánek', 'Dušek', 'Vlček', 'Janda', 'Rybář', 'Štolba',
                        'Vesely', 'Prokeš', 'Rozsypal', 'Kuchař', 'Bárta', 'Pospíchal', 'Tesař', 'Vlček', 'Kotrba', 'Jiránek',
                        'Kočí', 'Slavík', 'Jaroš', 'Štěpán', 'Kolman', 'Moravec', 'Pavlíček', 'Štěpánek', 'Holeček', 'Sokol',
                        'Marek', 'Pícha', 'Fuchs', 'Štefan', 'Jindra', 'Košťál', 'Bouška', 'Hříbal', 'Ferenc', 'Kuchař'
                      ]
                },
                'female': {
                    'first': [
                        'Eva', 'Tereza', 'Anna', 'Lucie', 'Karolína', 'Petra', 'Kateřina', 'Veronika', 'Barbora', 'Markéta',
                        'Kristýna', 'Zuzana', 'Hana', 'Jana', 'Nela', 'Lenka', 'Viktoria', 'Sofie', 'Marie', 'Alžběta',
                        'Klára', 'Adéla', 'Nikola', 'Gabriela', 'Simona', 'Denisa', 'Linda', 'Kamila', 'Monika', 'Mia',
                        'Eliška', 'Laura', 'Patricie', 'Natalie', 'Martina', 'Adriana', 'Jitka', 'Diana', 'Elen', 'Natálie',
                        'Aneta', 'Iva', 'Lena', 'Nina', 'Nela', 'Olga', 'Vendula', 'Dominika', 'Terezie', 'Anna',
                        'Miroslava', 'Dita', 'Romana', 'Helena', 'Lýdie', 'Božena', 'Anežka', 'Irena', 'Ludmila', 'Věra',
                        'Květa', 'Žaneta', 'Xenie', 'Yveta', 'Zdenka', 'Iveta', 'Ilona', 'Vlasta', 'Wanda', 'Xaverie',
                        'Yvetta', 'Zlata', 'Alica', 'Berta', 'Cecílie', 'Dagmar', 'Ema', 'Františka', 'Gita', 'Hedvika',
                        'Izabela', 'Jaroslava', 'Klimentina', 'Leona', 'Magdaléna', 'Naděžda', 'Oktávie', 'Pavlína', 'Quinta', 'Radmila',
                        'Sylva', 'Táňa', 'Uršula', 'Valerie', 'Vlastimila', 'Waltera', 'Xandra', 'Yara', 'Zina', 'Šárka'
                      ],
                    'second': [
                        'Nováková', 'Svobodová', 'Novotná', 'Dvořáková', 'Černá', 'Procházková', 'Kučerová', 'Veselá', 'Horáková', 'Marková',
                        'Jelínková', 'Hájková', 'Krejčíová', 'Růžičková', 'Benešová', 'Fišerová', 'Sedláčková', 'Kovářová', 'Vaněková', 'Urbanová',
                        'Poláková', 'Bartošová', 'Fialová', 'Pospíšilová', 'Kopecká', 'Němcová', 'Machová', 'Konečná', 'Králová', 'Richterová',
                        'Kolářová', 'Bártová', 'Šimková', 'Sýkorová', 'Havelová', 'Blažková', 'Mazánková', 'Bílá', 'Štěpánková', 'Kubíčková',
                        'Švecová', 'Bláhová', 'Hrušková', 'Bárková', 'Koutná', 'Marečková', 'Tichá', 'Holubová', 'Dohnalová', 'Noseková',
                        'Šebková', 'Rybová', 'Tomešová', 'Zemanová', 'Pekárková', 'Zábranská', 'Krejčová', 'Sedláková', 'Havlíčková', 'Ludvíková',
                        'Čížková', 'Chalupová', 'Míčková', 'Zajičková', 'Šimánková', 'Dušková', 'Vlčková', 'Jandová', 'Rybářová', 'Štolbová',
                        'Veselá', 'Prokešová', 'Rozsypalová', 'Kuchařová', 'Bártová', 'Pospíchalová', 'Tesařová', 'Vlčková', 'Kotrbová', 'Jiránková',
                        'Kočová', 'Slavíková', 'Jarošová', 'Štěpánová', 'Kolmanová', 'Moravcová', 'Pavlíčková', 'Štěpánková', 'Holečková', 'Sokolová',
                        'Marková', 'Píchová', 'Fuchsová', 'Štefanová', 'Jindrová', 'Košťálová', 'Boušková', 'Hříbalová', 'Ferencová', 'Kuchařová'
                      ],
                }
            }
        }, 'native': {
            'sex': {
                'male': {
                    'first': [
                        'Jan', 'Jakub', 'Tomáš', 'Adam', 'Matěj', 'Filip', 'Ondřej', 'Vojtěch', 'David', 'Lukáš',
                        'Martin', 'Petr', 'Daniel', 'Jiří', 'Michal', 'Karel', 'Erik', 'Josef', 'Pavel', 'Aleš',
                        'Marek', 'Václav', 'Štěpán', 'Tadeáš', 'Dominik', 'Ján', 'Radek', 'Robert', 'Antonín', 'Dalibor',
                        'Filip', 'Hynek', 'Viktor', 'Richard', 'Eduard', 'Igor', 'František', 'Jaroslav', 'Jindřich', 'Leoš',
                        'Luboš', 'Oldřich', 'Radim', 'Bohumil', 'Bronislav', 'Ctirad', 'Drahomír', 'Emil', 'Gabriel', 'Hugo',
                        'Ignác', 'Kvido', 'Leopold', 'Matouš', 'Nikolas', 'Oskar', 'Patrik', 'Quido', 'Rostislav', 'Řehoř',
                        'Slavomír', 'Tobiáš', 'Urban', 'Vladan', 'Xaver', 'Yanek', 'Zbyněk', 'Žan', 'Cyril', 'Davídek',
                        'Felix', 'Gustav', 'Hynek', 'Ivan', 'Jáchym', 'Kristián', 'Ladislav', 'Mikuláš', 'Norbert', 'Oleg',
                        'Pravoslav', 'Quirin', 'Roman', 'Svatopluk', 'Taras', 'Urh', 'Vlastislav', 'Vítězslav', 'Walter', 'Xenofont',
                        'Yaroslav', 'Zdeněk', 'Alois', 'Břetislav', 'Czeslaw', 'Dimitrij', 'Emanuel', 'Florián', 'Gideon', 'Hermann'
                      ],
                    'second': [
                        'Novák', 'Svoboda', 'Novotný', 'Dvořák', 'Černý', 'Procházka', 'Kučera', 'Veselý', 'Horák', 'Marek',
                        'Jelínek', 'Hájek', 'Krejčí', 'Růžička', 'Beneš', 'Fišer', 'Sedláček', 'Kovář', 'Vaněk', 'Urban',
                        'Polák', 'Bartoš', 'Fiala', 'Pospíšil', 'Kopecký', 'Němec', 'Mach', 'Konečný', 'Král', 'Richter',
                        'Kolář', 'Bárta', 'Šimek', 'Sýkora', 'Havel', 'Blažek', 'Mazánek', 'Bílý', 'Štěpánek', 'Kubíček',
                        'Švec', 'Bláha', 'Hruška', 'Bártek', 'Koutný', 'Mareček', 'Tichý', 'Holub', 'Dohnal', 'Nosek',
                        'Šebek', 'Ryba', 'Tomeš', 'Zeman', 'Pekárek', 'Zábranský', 'Krejča', 'Sedlák', 'Havlíček', 'Ludvík',
                        'Čížek', 'Chalupa', 'Míček', 'Zajíc', 'Šimánek', 'Dušek', 'Vlček', 'Janda', 'Rybář', 'Štolba',
                        'Vesely', 'Prokeš', 'Rozsypal', 'Kuchař', 'Bárta', 'Pospíchal', 'Tesař', 'Vlček', 'Kotrba', 'Jiránek',
                        'Kočí', 'Slavík', 'Jaroš', 'Štěpán', 'Kolman', 'Moravec', 'Pavlíček', 'Štěpánek', 'Holeček', 'Sokol',
                        'Marek', 'Pícha', 'Fuchs', 'Štefan', 'Jindra', 'Košťál', 'Bouška', 'Hříbal', 'Ferenc', 'Kuchař'
                      ]
                },
                'female': {
                    'first': [
                        'Eva', 'Tereza', 'Anna', 'Lucie', 'Karolína', 'Petra', 'Kateřina', 'Veronika', 'Barbora', 'Markéta',
                        'Kristýna', 'Zuzana', 'Hana', 'Jana', 'Nela', 'Lenka', 'Viktoria', 'Sofie', 'Marie', 'Alžběta',
                        'Klára', 'Adéla', 'Nikola', 'Gabriela', 'Simona', 'Denisa', 'Linda', 'Kamila', 'Monika', 'Mia',
                        'Eliška', 'Laura', 'Patricie', 'Natalie', 'Martina', 'Adriana', 'Jitka', 'Diana', 'Elen', 'Natálie',
                        'Aneta', 'Iva', 'Lena', 'Nina', 'Nela', 'Olga', 'Vendula', 'Dominika', 'Terezie', 'Anna',
                        'Miroslava', 'Dita', 'Romana', 'Helena', 'Lýdie', 'Božena', 'Anežka', 'Irena', 'Ludmila', 'Věra',
                        'Květa', 'Žaneta', 'Xenie', 'Yveta', 'Zdenka', 'Iveta', 'Ilona', 'Vlasta', 'Wanda', 'Xaverie',
                        'Yvetta', 'Zlata', 'Alica', 'Berta', 'Cecílie', 'Dagmar', 'Ema', 'Františka', 'Gita', 'Hedvika',
                        'Izabela', 'Jaroslava', 'Klimentina', 'Leona', 'Magdaléna', 'Naděžda', 'Oktávie', 'Pavlína', 'Quinta', 'Radmila',
                        'Sylva', 'Táňa', 'Uršula', 'Valerie', 'Vlastimila', 'Waltera', 'Xandra', 'Yara', 'Zina', 'Šárka'
                      ],
                    'second': [
                        'Nováková', 'Svobodová', 'Novotná', 'Dvořáková', 'Černá', 'Procházková', 'Kučerová', 'Veselá', 'Horáková', 'Marková',
                        'Jelínková', 'Hájková', 'Krejčíová', 'Růžičková', 'Benešová', 'Fišerová', 'Sedláčková', 'Kovářová', 'Vaněková', 'Urbanová',
                        'Poláková', 'Bartošová', 'Fialová', 'Pospíšilová', 'Kopecká', 'Němcová', 'Machová', 'Konečná', 'Králová', 'Richterová',
                        'Kolářová', 'Bártová', 'Šimková', 'Sýkorová', 'Havelová', 'Blažková', 'Mazánková', 'Bílá', 'Štěpánková', 'Kubíčková',
                        'Švecová', 'Bláhová', 'Hrušková', 'Bárková', 'Koutná', 'Marečková', 'Tichá', 'Holubová', 'Dohnalová', 'Noseková',
                        'Šebková', 'Rybová', 'Tomešová', 'Zemanová', 'Pekárková', 'Zábranská', 'Krejčová', 'Sedláková', 'Havlíčková', 'Ludvíková',
                        'Čížková', 'Chalupová', 'Míčková', 'Zajičková', 'Šimánková', 'Dušková', 'Vlčková', 'Jandová', 'Rybářová', 'Štolbová',
                        'Veselá', 'Prokešová', 'Rozsypalová', 'Kuchařová', 'Bártová', 'Pospíchalová', 'Tesařová', 'Vlčková', 'Kotrbová', 'Jiránková',
                        'Kočová', 'Slavíková', 'Jarošová', 'Štěpánová', 'Kolmanová', 'Moravcová', 'Pavlíčková', 'Štěpánková', 'Holečková', 'Sokolová',
                        'Marková', 'Píchová', 'Fuchsová', 'Štefanová', 'Jindrová', 'Košťálová', 'Boušková', 'Hříbalová', 'Ferencová', 'Kuchařová'
                      ],
                }
            }
        }},
    'Switzerland': { 'en': {
            'sex': {
                'male': {
                    'first': [
                        'Lukas', 'Daniel', 'Thomas', 'Michael', 'Andreas', 'David', 'Markus', 'Patrick', 'Stefan', 'Martin',
                        'Peter', 'Simon', 'Florian', 'Christian', 'Marco', 'Dominik', 'Philipp', 'Adrian', 'Kevin', 'Manuel',
                        'Nicolas', 'Jan', 'Fabian', 'Sebastian', 'Johannes', 'Raphael', 'Elias', 'Samuel', 'Nico', 'Luca',
                        'Alexander', 'Fabio', 'Jonathan', 'Pascal', 'Sandro', 'Benjamin', 'Noah', 'Dario', 'Joel', 'Cédric',
                        'Marc', 'Flavio', 'Jeremy', 'Cyrill', 'Yannick', 'Jason', 'Leon', 'Valentin', 'Tim', 'Aaron',
                        'Justin', 'Silvan', 'Sven', 'Tobias', 'Patrick', 'Yanis', 'Reto', 'Finn', 'Maximilian', 'Jonas',
                        'Alessio', 'Jérôme', 'Niklas', 'Fabrice', 'Julian', 'Ivan', 'Emanuel', 'Raphael', 'Leandro', 'Felix',
                        'Levi', 'Nicola', 'Livio', 'Loris', 'Liam', 'Marius', 'Janik', 'Kai', 'Lionel', 'Levin',
                        'Noël', 'Damian', 'Noé', 'Linus', 'Lorenz', 'Mario', 'Jannis', 'Elio', 'Nathan', 'Quentin',
                        'Louis', 'Clemens', 'Timon', 'Erik', 'Vincent', 'Elia', 'Elías', 'Leonard', 'Elie', 'Leano'
                      ],
                    'second': [
                        'Müller', 'Schmidt', 'Meier', 'Schneider', 'Fischer', 'Weber', 'Wyss', 'Schmid', 'Keller', 'Schwarz',
                        'Jäger', 'Brunner', 'Baumann', 'Egger', 'Kuhn', 'Roth', 'Widmer', 'Zimmermann', 'Hofmann', 'Koch',
                        'Vogt', 'Hess', 'Moser', 'Bachmann', 'Kunz', 'Bühler', 'Kaufmann', 'Kurt', 'Schär', 'Oberholzer',
                        'Rey', 'Steiner', 'Huber', 'Rüegg', 'Rüti', 'Lüscher', 'Maurer', 'Suter', 'Ritter', 'Hug',
                        'Blaser', 'Lutz', 'Wagner', 'Bischof', 'Lang', 'Frei', 'Kägi', 'Graf', 'Schweizer', 'Bieri',
                        'Schürmann', 'Amrein', 'Kessler', 'Burri', 'Studer', 'Favre', 'Aebi', 'Marti', 'Gerber', 'Stalder',
                        'Scherrer', 'Schärer', 'Wyler', 'Bolliger', 'Hauri', 'Frey', 'Gasser', 'Ruf', 'Rohrer', 'Koller',
                        'Schumacher', 'Bucher', 'Stucki', 'Feldmann', 'Wirth', 'Aeschlimann', 'Rohner', 'Zürcher', 'Heiniger', 'Ott',
                        'Grob', 'Schweizer', 'Streit', 'Zürcher', 'Bach', 'Stähli', 'Leuthold', 'Bieri', 'Weidmann', 'Schnyder',
                        'Weidmann', 'Künzli', 'Kaufmann', 'Ziegler', 'Müller', 'Eichenberger', 'Egger', 'Häfliger', 'Hunziker', 'Rohrer'
                      ]
                },
                'female': {
                    'first': [
                        'Sophie', 'Lara', 'Lina', 'Lea', 'Emma', 'Nina', 'Elena', 'Julia', 'Laura', 'Sarah',
                        'Maria', 'Céline', 'Sofia', 'Anna', 'Selina', 'Isabella', 'Amélie', 'Olivia', 'Livia', 'Emilia',
                        'Eva', 'Nora', 'Lisa', 'Mia', 'Elina', 'Jana', 'Luna', 'Maya', 'Chiara', 'Alessia',
                        'Mila', 'Melina', 'Ava', 'Alina', 'Leonie', 'Lara', 'Hannah', 'Alisa', 'Ella', 'Jasmin',
                        'Valentina', 'Zoe', 'Lena', 'Vanessa', 'Elena', 'Lara', 'Joline', 'Sophia', 'Elisa', 'Leila',
                        'Leona', 'Laura', 'Livia', 'Anna', 'Luisa', 'Mila', 'Emma', 'Amelia', 'Lara', 'Sophie',
                        'Elena', 'Lina', 'Lea', 'Olivia', 'Ava', 'Nina', 'Emma', 'Lara', 'Sophia', 'Amelia',
                        'Lina', 'Mia', 'Leila', 'Ella', 'Jasmin', 'Livia', 'Maya', 'Hannah', 'Eva', 'Sophie',
                        'Lara', 'Alina', 'Chiara', 'Olivia', 'Leona', 'Lina', 'Elina', 'Jana', 'Lara', 'Mia',
                        'Sofia', 'Ella', 'Emma', 'Amelia', 'Livia', 'Eva', 'Sophia', 'Lara', 'Anna', 'Olivia'
                      ],
                    'second': [
                        'Müller', 'Schmidt', 'Meier', 'Schneider', 'Fischer', 'Weber', 'Wyss', 'Schmid', 'Keller', 'Schwarz',
                        'Jäger', 'Brunner', 'Baumann', 'Egger', 'Kuhn', 'Roth', 'Widmer', 'Zimmermann', 'Hofmann', 'Koch',
                        'Vogt', 'Hess', 'Moser', 'Bachmann', 'Kunz', 'Bühler', 'Kaufmann', 'Kurt', 'Schär', 'Oberholzer',
                        'Rey', 'Steiner', 'Huber', 'Rüegg', 'Rüti', 'Lüscher', 'Maurer', 'Suter', 'Ritter', 'Hug',
                        'Blaser', 'Lutz', 'Wagner', 'Bischof', 'Lang', 'Frei', 'Kägi', 'Graf', 'Schweizer', 'Bieri',
                        'Schürmann', 'Amrein', 'Kessler', 'Burri', 'Studer', 'Favre', 'Aebi', 'Marti', 'Gerber', 'Stalder',
                        'Scherrer', 'Schärer', 'Wyler', 'Bolliger', 'Hauri', 'Frey', 'Gasser', 'Ruf', 'Rohrer', 'Koller',
                        'Schumacher', 'Bucher', 'Stucki', 'Feldmann', 'Wirth', 'Aeschlimann', 'Rohner', 'Zürcher', 'Heiniger', 'Ott',
                        'Grob', 'Schweizer', 'Streit', 'Zürcher', 'Bach', 'Stähli', 'Leuthold', 'Bieri', 'Weidmann', 'Schnyder',
                        'Weidmann', 'Künzli', 'Kaufmann', 'Ziegler', 'Müller', 'Eichenberger', 'Egger', 'Häfliger', 'Hunziker', 'Rohrer'
                      ],
                }
            }
        }, 'native': {
            'sex': {
                'male': {
                    'first': [
                        'Lukas', 'Daniel', 'Thomas', 'Michael', 'Andreas', 'David', 'Markus', 'Patrick', 'Stefan', 'Martin',
                        'Peter', 'Simon', 'Florian', 'Christian', 'Marco', 'Dominik', 'Philipp', 'Adrian', 'Kevin', 'Manuel',
                        'Nicolas', 'Jan', 'Fabian', 'Sebastian', 'Johannes', 'Raphael', 'Elias', 'Samuel', 'Nico', 'Luca',
                        'Alexander', 'Fabio', 'Jonathan', 'Pascal', 'Sandro', 'Benjamin', 'Noah', 'Dario', 'Joel', 'Cédric',
                        'Marc', 'Flavio', 'Jeremy', 'Cyrill', 'Yannick', 'Jason', 'Leon', 'Valentin', 'Tim', 'Aaron',
                        'Justin', 'Silvan', 'Sven', 'Tobias', 'Patrick', 'Yanis', 'Reto', 'Finn', 'Maximilian', 'Jonas',
                        'Alessio', 'Jérôme', 'Niklas', 'Fabrice', 'Julian', 'Ivan', 'Emanuel', 'Raphael', 'Leandro', 'Felix',
                        'Levi', 'Nicola', 'Livio', 'Loris', 'Liam', 'Marius', 'Janik', 'Kai', 'Lionel', 'Levin',
                        'Noël', 'Damian', 'Noé', 'Linus', 'Lorenz', 'Mario', 'Jannis', 'Elio', 'Nathan', 'Quentin',
                        'Louis', 'Clemens', 'Timon', 'Erik', 'Vincent', 'Elia', 'Elías', 'Leonard', 'Elie', 'Leano'
                      ],
                    'second': [
                        'Müller', 'Schmidt', 'Meier', 'Schneider', 'Fischer', 'Weber', 'Wyss', 'Schmid', 'Keller', 'Schwarz',
                        'Jäger', 'Brunner', 'Baumann', 'Egger', 'Kuhn', 'Roth', 'Widmer', 'Zimmermann', 'Hofmann', 'Koch',
                        'Vogt', 'Hess', 'Moser', 'Bachmann', 'Kunz', 'Bühler', 'Kaufmann', 'Kurt', 'Schär', 'Oberholzer',
                        'Rey', 'Steiner', 'Huber', 'Rüegg', 'Rüti', 'Lüscher', 'Maurer', 'Suter', 'Ritter', 'Hug',
                        'Blaser', 'Lutz', 'Wagner', 'Bischof', 'Lang', 'Frei', 'Kägi', 'Graf', 'Schweizer', 'Bieri',
                        'Schürmann', 'Amrein', 'Kessler', 'Burri', 'Studer', 'Favre', 'Aebi', 'Marti', 'Gerber', 'Stalder',
                        'Scherrer', 'Schärer', 'Wyler', 'Bolliger', 'Hauri', 'Frey', 'Gasser', 'Ruf', 'Rohrer', 'Koller',
                        'Schumacher', 'Bucher', 'Stucki', 'Feldmann', 'Wirth', 'Aeschlimann', 'Rohner', 'Zürcher', 'Heiniger', 'Ott',
                        'Grob', 'Schweizer', 'Streit', 'Zürcher', 'Bach', 'Stähli', 'Leuthold', 'Bieri', 'Weidmann', 'Schnyder',
                        'Weidmann', 'Künzli', 'Kaufmann', 'Ziegler', 'Müller', 'Eichenberger', 'Egger', 'Häfliger', 'Hunziker', 'Rohrer'
                      ]
                },
                'female': {
                    'first': [
                        'Sophie', 'Lara', 'Lina', 'Lea', 'Emma', 'Nina', 'Elena', 'Julia', 'Laura', 'Sarah',
                        'Maria', 'Céline', 'Sofia', 'Anna', 'Selina', 'Isabella', 'Amélie', 'Olivia', 'Livia', 'Emilia',
                        'Eva', 'Nora', 'Lisa', 'Mia', 'Elina', 'Jana', 'Luna', 'Maya', 'Chiara', 'Alessia',
                        'Mila', 'Melina', 'Ava', 'Alina', 'Leonie', 'Lara', 'Hannah', 'Alisa', 'Ella', 'Jasmin',
                        'Valentina', 'Zoe', 'Lena', 'Vanessa', 'Elena', 'Lara', 'Joline', 'Sophia', 'Elisa', 'Leila',
                        'Leona', 'Laura', 'Livia', 'Anna', 'Luisa', 'Mila', 'Emma', 'Amelia', 'Lara', 'Sophie',
                        'Elena', 'Lina', 'Lea', 'Olivia', 'Ava', 'Nina', 'Emma', 'Lara', 'Sophia', 'Amelia',
                        'Lina', 'Mia', 'Leila', 'Ella', 'Jasmin', 'Livia', 'Maya', 'Hannah', 'Eva', 'Sophie',
                        'Lara', 'Alina', 'Chiara', 'Olivia', 'Leona', 'Lina', 'Elina', 'Jana', 'Lara', 'Mia',
                        'Sofia', 'Ella', 'Emma', 'Amelia', 'Livia', 'Eva', 'Sophia', 'Lara', 'Anna', 'Olivia'
                      ],
                    'second': [
                        'Müller', 'Schmidt', 'Meier', 'Schneider', 'Fischer', 'Weber', 'Wyss', 'Schmid', 'Keller', 'Schwarz',
                        'Jäger', 'Brunner', 'Baumann', 'Egger', 'Kuhn', 'Roth', 'Widmer', 'Zimmermann', 'Hofmann', 'Koch',
                        'Vogt', 'Hess', 'Moser', 'Bachmann', 'Kunz', 'Bühler', 'Kaufmann', 'Kurt', 'Schär', 'Oberholzer',
                        'Rey', 'Steiner', 'Huber', 'Rüegg', 'Rüti', 'Lüscher', 'Maurer', 'Suter', 'Ritter', 'Hug',
                        'Blaser', 'Lutz', 'Wagner', 'Bischof', 'Lang', 'Frei', 'Kägi', 'Graf', 'Schweizer', 'Bieri',
                        'Schürmann', 'Amrein', 'Kessler', 'Burri', 'Studer', 'Favre', 'Aebi', 'Marti', 'Gerber', 'Stalder',
                        'Scherrer', 'Schärer', 'Wyler', 'Bolliger', 'Hauri', 'Frey', 'Gasser', 'Ruf', 'Rohrer', 'Koller',
                        'Schumacher', 'Bucher', 'Stucki', 'Feldmann', 'Wirth', 'Aeschlimann', 'Rohner', 'Zürcher', 'Heiniger', 'Ott',
                        'Grob', 'Schweizer', 'Streit', 'Zürcher', 'Bach', 'Stähli', 'Leuthold', 'Bieri', 'Weidmann', 'Schnyder',
                        'Weidmann', 'Künzli', 'Kaufmann', 'Ziegler', 'Müller', 'Eichenberger', 'Egger', 'Häfliger', 'Hunziker', 'Rohrer'
                      ],
                }
            }
        }},
    'Sweden': { 'en': {
            'sex': {
                'male': {
                    'first': [
                        'Erik', 'Anders', 'Karl', 'Johan', 'Lars', 'Nils', 'Per', 'Göran', 'Bengt', 'Mats',
                        'Sven', 'Jan', 'Olof', 'Hans', 'Gunnar', 'Peter', 'Fredrik', 'Thomas', 'Henrik', 'Ulf',
                        'Jonas', 'Mikael', 'Martin', 'Åke', 'Stefan', 'Daniel', 'Marcus', 'Magnus', 'Lennart', 'Stig',
                        'Robert', 'Joakim', 'Christian', 'Rolf', 'Roger', 'Björn', 'Pontus', 'Arne', 'Olle', 'Anton',
                        'Ludvig', 'Alexander', 'David', 'Simon', 'Felix', 'Emil', 'William', 'Oscar', 'Isak', 'Gustav',
                        'Elias', 'Albin', 'Victor', 'Axel', 'Sebastian', 'Niklas', 'Kjell', 'Eskil', 'Jörgen', 'Ivar',
                        'Linus', 'Adam', 'Jens', 'Jörgen', 'Viktor', 'Håkan', 'Rasmus', 'Hugo', 'Vilhelm', 'Carl',
                        'Tobias', 'Edvard', 'Mårten', 'Emanuel', 'Johannes', 'Kristoffer', 'Oskar', 'Joel', 'Sigurd', 'Aron',
                        'Leif', 'Egon', 'Evald', 'Gustaf', 'Kurt', 'Lauri', 'Niklas', 'Ragnar', 'Tommy', 'Wilhelm',
                        'Yngve', 'Åke', 'Bertil', 'Curt', 'Folke', 'Hans', 'Ingvar', 'Johan', 'Kjell', 'Lars'
                      ],
                    'second': [
                        'Andersson', 'Johansson', 'Karlsson', 'Nilsson', 'Eriksson', 'Larsson', 'Olsson', 'Persson', 'Svensson', 'Gustafsson',
                        'Pettersson', 'Jonsson', 'Jansson', 'Hansson', 'Berg', 'Berglund', 'Lindberg', 'Lindström', 'Lundqvist', 'Lundgren',
                        'Söderström', 'Ahlgren', 'Ekström', 'Engström', 'Forsberg', 'Gunnarsson', 'Hedlund', 'Holm', 'Isaksson', 'Jakobsson',
                        'Lind', 'Månsson', 'Nordström', 'Olofsson', 'Palm', 'Petersson', 'Qvist', 'Rosenqvist', 'Sandberg', 'Ström',
                        'Viklund', 'Wallin', 'Åberg', 'Öberg', 'Östberg', 'Nyström', 'Björk', 'Dahl', 'Eklund', 'Fransson',
                        'Göransson', 'Haglund', 'Ingemarsson', 'Jung', 'Kronqvist', 'Lundin', 'Magnusson', 'Norberg', 'Oskarsson', 'Persdotter',
                        'Rydberg', 'Sjöberg', 'Törnqvist', 'Ullberg', 'Vikström', 'Westerberg', 'Yngvesson', 'Zetterberg', 'Åkesson', 'Ängström',
                        'Åström', 'Öhman', 'Öhrn', 'Borg', 'Dahlberg', 'Edlund', 'Falk', 'Gustavsson', 'Höglund', 'Ivarsson',
                        'Johannesson', 'Kling', 'Löfgren', 'Mattsson', 'Nordberg', 'Oliver', 'Pålsson', 'Quist', 'Ryberg', 'Stenberg',
                        'Thorsell', 'Ulrich', 'Vallgren', 'Wijk', 'Xavier', 'Ylitalo', 'Zandén', 'Ågren', 'Ängqvist', 'Östman'
                      ]
                },
                'female': {
                    'first': [
                        'Anna', 'Eva', 'Maria', 'Karin', 'Lena', 'Ingrid', 'Johanna', 'Sofia', 'Emma', 'Malin',
                        'Linda', 'Kristina', 'Hanna', 'Sara', 'Camilla', 'Maja', 'Helena', 'Cecilia', 'Margareta', 'Linnéa',
                        'Elisabeth', 'Lisa', 'Charlotte', 'Monica', 'Josefin', 'Victoria', 'Caroline', 'Therese', 'Birgitta', 'Agnes',
                        'Emelie', 'Louise', 'Lovisa', 'Amanda', 'Julia', 'Isabella', 'Kerstin', 'Marianne', 'Annika', 'Yvonne',
                        'Elin', 'Rebecca', 'Ellen', 'Agneta', 'Greta', 'Elsa', 'Linnea', 'Natalie', 'Anneli', 'Ida',
                        'Sandra', 'Elinor', 'Anita', 'Ann', 'Astrid', 'Frida', 'Matilda', 'Ebba', 'Inga', 'Olga',
                        'Emma', 'Gunnel', 'Gunilla', 'Hedvig', 'Hilda', 'Hilma', 'Isabelle', 'Jenny', 'Klara', 'Liselotte',
                        'Lotta', 'Madeleine', 'Magdalena', 'Marie', 'Märta', 'Sofie', 'Tilda', 'Ulla', 'Vanessa', 'Vera',
                        'Wilma', 'Åsa', 'Beatrice', 'Berit', 'Diana', 'Elvira', 'Emilia', 'Erika', 'Gabriella', 'Hedda',
                        'Irene', 'Jasmine', 'Jessica', 'Joanna', 'Karolina', 'Leila', 'Linn', 'Malou', 'Nina', 'Olivia'
                      ],
                    'second': [
                        'Andersson', 'Johansson', 'Karlsson', 'Nilsson', 'Eriksson', 'Larsson', 'Olsson', 'Persson', 'Svensson', 'Gustafsson',
                        'Pettersson', 'Jonsson', 'Jansson', 'Hansson', 'Berg', 'Berglund', 'Lindberg', 'Lindström', 'Lundqvist', 'Lundgren',
                        'Söderström', 'Ahlgren', 'Ekström', 'Engström', 'Forsberg', 'Gunnarsson', 'Hedlund', 'Holm', 'Isaksson', 'Jakobsson',
                        'Lind', 'Månsson', 'Nordström', 'Olofsson', 'Palm', 'Petersson', 'Qvist', 'Rosenqvist', 'Sandberg', 'Ström',
                        'Viklund', 'Wallin', 'Åberg', 'Öberg', 'Östberg', 'Nyström', 'Björk', 'Dahl', 'Eklund', 'Fransson',
                        'Göransson', 'Haglund', 'Ingemarsson', 'Jung', 'Kronqvist', 'Lundin', 'Magnusson', 'Norberg', 'Oskarsson', 'Persdotter',
                        'Rydberg', 'Sjöberg', 'Törnqvist', 'Ullberg', 'Vikström', 'Westerberg', 'Yngvesson', 'Zetterberg', 'Åkesson', 'Ängström',
                        'Åström', 'Öhman', 'Öhrn', 'Borg', 'Dahlberg', 'Edlund', 'Falk', 'Gustavsson', 'Höglund', 'Ivarsson',
                        'Johannesson', 'Kling', 'Löfgren', 'Mattsson', 'Nordberg', 'Oliver', 'Pålsson', 'Quist', 'Ryberg', 'Stenberg',
                        'Thorsell', 'Ulrich', 'Vallgren', 'Wijk', 'Xavier', 'Ylitalo', 'Zandén', 'Ågren', 'Ängqvist', 'Östman'
                      ],
                }
            }
        }, 'native': {
            'sex': {
                'male': {
                    'first': [
                        'Erik', 'Anders', 'Karl', 'Johan', 'Lars', 'Nils', 'Per', 'Göran', 'Bengt', 'Mats',
                        'Sven', 'Jan', 'Olof', 'Hans', 'Gunnar', 'Peter', 'Fredrik', 'Thomas', 'Henrik', 'Ulf',
                        'Jonas', 'Mikael', 'Martin', 'Åke', 'Stefan', 'Daniel', 'Marcus', 'Magnus', 'Lennart', 'Stig',
                        'Robert', 'Joakim', 'Christian', 'Rolf', 'Roger', 'Björn', 'Pontus', 'Arne', 'Olle', 'Anton',
                        'Ludvig', 'Alexander', 'David', 'Simon', 'Felix', 'Emil', 'William', 'Oscar', 'Isak', 'Gustav',
                        'Elias', 'Albin', 'Victor', 'Axel', 'Sebastian', 'Niklas', 'Kjell', 'Eskil', 'Jörgen', 'Ivar',
                        'Linus', 'Adam', 'Jens', 'Jörgen', 'Viktor', 'Håkan', 'Rasmus', 'Hugo', 'Vilhelm', 'Carl',
                        'Tobias', 'Edvard', 'Mårten', 'Emanuel', 'Johannes', 'Kristoffer', 'Oskar', 'Joel', 'Sigurd', 'Aron',
                        'Leif', 'Egon', 'Evald', 'Gustaf', 'Kurt', 'Lauri', 'Niklas', 'Ragnar', 'Tommy', 'Wilhelm',
                        'Yngve', 'Åke', 'Bertil', 'Curt', 'Folke', 'Hans', 'Ingvar', 'Johan', 'Kjell', 'Lars'
                      ],
                    'second': [
                        'Andersson', 'Johansson', 'Karlsson', 'Nilsson', 'Eriksson', 'Larsson', 'Olsson', 'Persson', 'Svensson', 'Gustafsson',
                        'Pettersson', 'Jonsson', 'Jansson', 'Hansson', 'Berg', 'Berglund', 'Lindberg', 'Lindström', 'Lundqvist', 'Lundgren',
                        'Söderström', 'Ahlgren', 'Ekström', 'Engström', 'Forsberg', 'Gunnarsson', 'Hedlund', 'Holm', 'Isaksson', 'Jakobsson',
                        'Lind', 'Månsson', 'Nordström', 'Olofsson', 'Palm', 'Petersson', 'Qvist', 'Rosenqvist', 'Sandberg', 'Ström',
                        'Viklund', 'Wallin', 'Åberg', 'Öberg', 'Östberg', 'Nyström', 'Björk', 'Dahl', 'Eklund', 'Fransson',
                        'Göransson', 'Haglund', 'Ingemarsson', 'Jung', 'Kronqvist', 'Lundin', 'Magnusson', 'Norberg', 'Oskarsson', 'Persdotter',
                        'Rydberg', 'Sjöberg', 'Törnqvist', 'Ullberg', 'Vikström', 'Westerberg', 'Yngvesson', 'Zetterberg', 'Åkesson', 'Ängström',
                        'Åström', 'Öhman', 'Öhrn', 'Borg', 'Dahlberg', 'Edlund', 'Falk', 'Gustavsson', 'Höglund', 'Ivarsson',
                        'Johannesson', 'Kling', 'Löfgren', 'Mattsson', 'Nordberg', 'Oliver', 'Pålsson', 'Quist', 'Ryberg', 'Stenberg',
                        'Thorsell', 'Ulrich', 'Vallgren', 'Wijk', 'Xavier', 'Ylitalo', 'Zandén', 'Ågren', 'Ängqvist', 'Östman'
                      ]
                },
                'female': {
                    'first': [
                        'Anna', 'Eva', 'Maria', 'Karin', 'Lena', 'Ingrid', 'Johanna', 'Sofia', 'Emma', 'Malin',
                        'Linda', 'Kristina', 'Hanna', 'Sara', 'Camilla', 'Maja', 'Helena', 'Cecilia', 'Margareta', 'Linnéa',
                        'Elisabeth', 'Lisa', 'Charlotte', 'Monica', 'Josefin', 'Victoria', 'Caroline', 'Therese', 'Birgitta', 'Agnes',
                        'Emelie', 'Louise', 'Lovisa', 'Amanda', 'Julia', 'Isabella', 'Kerstin', 'Marianne', 'Annika', 'Yvonne',
                        'Elin', 'Rebecca', 'Ellen', 'Agneta', 'Greta', 'Elsa', 'Linnea', 'Natalie', 'Anneli', 'Ida',
                        'Sandra', 'Elinor', 'Anita', 'Ann', 'Astrid', 'Frida', 'Matilda', 'Ebba', 'Inga', 'Olga',
                        'Emma', 'Gunnel', 'Gunilla', 'Hedvig', 'Hilda', 'Hilma', 'Isabelle', 'Jenny', 'Klara', 'Liselotte',
                        'Lotta', 'Madeleine', 'Magdalena', 'Marie', 'Märta', 'Sofie', 'Tilda', 'Ulla', 'Vanessa', 'Vera',
                        'Wilma', 'Åsa', 'Beatrice', 'Berit', 'Diana', 'Elvira', 'Emilia', 'Erika', 'Gabriella', 'Hedda',
                        'Irene', 'Jasmine', 'Jessica', 'Joanna', 'Karolina', 'Leila', 'Linn', 'Malou', 'Nina', 'Olivia'
                      ],
                    'second': [
                        'Andersson', 'Johansson', 'Karlsson', 'Nilsson', 'Eriksson', 'Larsson', 'Olsson', 'Persson', 'Svensson', 'Gustafsson',
                        'Pettersson', 'Jonsson', 'Jansson', 'Hansson', 'Berg', 'Berglund', 'Lindberg', 'Lindström', 'Lundqvist', 'Lundgren',
                        'Söderström', 'Ahlgren', 'Ekström', 'Engström', 'Forsberg', 'Gunnarsson', 'Hedlund', 'Holm', 'Isaksson', 'Jakobsson',
                        'Lind', 'Månsson', 'Nordström', 'Olofsson', 'Palm', 'Petersson', 'Qvist', 'Rosenqvist', 'Sandberg', 'Ström',
                        'Viklund', 'Wallin', 'Åberg', 'Öberg', 'Östberg', 'Nyström', 'Björk', 'Dahl', 'Eklund', 'Fransson',
                        'Göransson', 'Haglund', 'Ingemarsson', 'Jung', 'Kronqvist', 'Lundin', 'Magnusson', 'Norberg', 'Oskarsson', 'Persdotter',
                        'Rydberg', 'Sjöberg', 'Törnqvist', 'Ullberg', 'Vikström', 'Westerberg', 'Yngvesson', 'Zetterberg', 'Åkesson', 'Ängström',
                        'Åström', 'Öhman', 'Öhrn', 'Borg', 'Dahlberg', 'Edlund', 'Falk', 'Gustavsson', 'Höglund', 'Ivarsson',
                        'Johannesson', 'Kling', 'Löfgren', 'Mattsson', 'Nordberg', 'Oliver', 'Pålsson', 'Quist', 'Ryberg', 'Stenberg',
                        'Thorsell', 'Ulrich', 'Vallgren', 'Wijk', 'Xavier', 'Ylitalo', 'Zandén', 'Ågren', 'Ängqvist', 'Östman'
                      ],
                }
            }
        }}, 
    'Estonia': { 'en': {
            'sex': {
                'male': {
                    'first': [
                        'Tõnis', 'Jaan', 'Andres', 'Mati', 'Mart', 'Peeter', 'Toomas', 'Mihkel', 'Indrek', 'Siim',
                        'Rasmus', 'Henrik', 'Markus', 'Erik', 'Kaur', 'Jüri', 'Kristjan', 'Karl', 'Ants', 'Artur',
                        'Erki', 'Viktor', 'Aivar', 'Tarmo', 'Ivar', 'Alo', 'Raivo', 'Rein', 'Ahti', 'Aleksandr',
                        'Oskar', 'Ilmar', 'Mikk', 'Valdek', 'Villem', 'Tarmo', 'Raul', 'Rain', 'Enn', 'Endel',
                        'Kuido', 'Urmas', 'Sven', 'Elmar', 'Heino', 'Alar', 'Toivo', 'Väino', 'Evald', 'Kalju',
                        'Hendrik', 'Risto', 'Olev', 'Margus', 'Taavi', 'Janek', 'Rando', 'Kaspar', 'Raimo', 'Priit',
                        'Ernst', 'Aarne', 'Juhan', 'Vello', 'Uno', 'Ragnar', 'Andrus', 'Arvo', 'Georg', 'Vahur',
                        'Ivo', 'Toivo', 'Jarmo', 'Voldemar', 'Peep', 'Mairo', 'Tarvo', 'Sulev', 'Anton', 'Joosep',
                        'Rivo', 'Ralf', 'Lauri', 'Alo', 'Teet', 'Valmar', 'Margo', 'Priidik', 'Kaarel', 'Marek',
                        'Mait', 'Artjom', 'Kaido', 'Jorma', 'Henno', 'Ervin', 'Heiti', 'Gert', 'Madis', 'Ott'
                      ],
                    'second': [
                        'Tamm', 'Mägi', 'Rebane', 'Lepp', 'Liiv', 'Kask', 'Kukk', 'Põder', 'Koppel', 'Kallas',
                        'Toom', 'Lepik', 'Allik', 'Lille', 'Karu', 'Kala', 'Kivi', 'Paju', 'Aas', 'Mets',
                        'Laane', 'Veski', 'Koppel', 'Ruutel', 'Künnapuu', 'Järv', 'Külm', 'Põld', 'Metsis', 'Oja',
                        'Teder', 'Eensaar', 'Kangur', 'Aavik', 'Männik', 'Raud', 'Ploom', 'Tammsaar', 'Nurk', 'Puusepp',
                        'Rand', 'Kont', 'Veskimägi', 'Saar', 'Laur', 'Sarapik', 'Kull', 'Mänd', 'Nõmm', 'Ots',
                        'Uusküla', 'Purje', 'Tiik', 'Ainsoo', 'Sepp', 'Liiva', 'Aav', 'Raag', 'Maasikas', 'Aasmaa',
                        'Vaino', 'Muru', 'Nurm', 'Rõõmussaar', 'Tõnisson', 'Lääne', 'Jõgi', 'Oks', 'Lembitu', 'Riis',
                        'Masing', 'Vaher', 'Metsla', 'Uus', 'Teder', 'Pikas', 'Nõmmik', 'Jalakas', 'Pärn', 'Kirsipuu',
                        'Nael', 'Meier', 'Läänemets', 'Kuklane', 'Pungas', 'Roos', 'Tuulik', 'Pääsuke', 'Ratas', 'Kald',
                        'Liivak', 'Teder', 'Tulviste', 'Olesk', 'Tammik', 'Kilp', 'Lippus', 'Järve', 'Metsalu', 'Kask'
                      ]
                },
                'female': {
                    'first': [
                        'Anu', 'Eve', 'Liis', 'Mari', 'Kadri', 'Piret', 'Maret', 'Kai', 'Reet', 'Eliis',
                        'Laine', 'Kertu', 'Kersti', 'Sirje', 'Helen', 'Triin', 'Tuuli', 'Marianne', 'Tiina', 'Ülle',
                        'Pille', 'Anne', 'Maarja', 'Heli', 'Signe', 'Ave', 'Riina', 'Lea', 'Jana', 'Inga',
                        'Kairi', 'Siiri', 'Merle', 'Evelin', 'Ester', 'Ruth', 'Ene', 'Liina', 'Mirjam', 'Marika',
                        'Liisi', 'Triinu', 'Kadri', 'Kaia', 'Astrid', 'Anneli', 'Lembi', 'Mai', 'Helin', 'Maire',
                        'Grete', 'Aili', 'Maike', 'Silja', 'Katri', 'Hanna', 'Laura', 'Diana', 'Kadi', 'Ave',
                        'Liisi', 'Eleri', 'Triinu', 'Janne', 'Kadi', 'Helena', 'Kirsti', 'Elle', 'Johanna', 'Hedvig',
                        'Kaie', 'Kerli', 'Anette', 'Marleen', 'Päivi', 'Pille', 'Eva', 'Terje', 'Margit', 'Daisy',
                        'Marit', 'Merike', 'Grete', 'Mairi', 'Eve', 'Ursula', 'Maris', 'Piret', 'Ester', 'Eva',
                        'Merilin', 'Silvia', 'Triin', 'Liisa', 'Katrin', 'Kärt', 'Ingrid', 'Triinu', 'Kädi', 'Eva'
                      ],
                    'second': [
                        'Tamm', 'Mägi', 'Rebane', 'Lepp', 'Liiv', 'Kask', 'Kukk', 'Põder', 'Koppel', 'Kallas',
                        'Toom', 'Lepik', 'Allik', 'Lille', 'Karu', 'Kala', 'Kivi', 'Paju', 'Aas', 'Mets',
                        'Laane', 'Veski', 'Koppel', 'Ruutel', 'Künnapuu', 'Järv', 'Külm', 'Põld', 'Metsis', 'Oja',
                        'Teder', 'Eensaar', 'Kangur', 'Aavik', 'Männik', 'Raud', 'Ploom', 'Tammsaar', 'Nurk', 'Puusepp',
                        'Rand', 'Kont', 'Veskimägi', 'Saar', 'Laur', 'Sarapik', 'Kull', 'Mänd', 'Nõmm', 'Ots',
                        'Uusküla', 'Purje', 'Tiik', 'Ainsoo', 'Sepp', 'Liiva', 'Aav', 'Raag', 'Maasikas', 'Aasmaa',
                        'Vaino', 'Muru', 'Nurm', 'Rõõmussaar', 'Tõnisson', 'Lääne', 'Jõgi', 'Oks', 'Lembitu', 'Riis',
                        'Masing', 'Vaher', 'Metsla', 'Uus', 'Teder', 'Pikas', 'Nõmmik', 'Jalakas', 'Pärn', 'Kirsipuu',
                        'Nael', 'Meier', 'Läänemets', 'Kuklane', 'Pungas', 'Roos', 'Tuulik', 'Pääsuke', 'Ratas', 'Kald',
                        'Liivak', 'Teder', 'Tulviste', 'Olesk', 'Tammik', 'Kilp', 'Lippus', 'Järve', 'Metsalu', 'Kask'
                      ],
                }
            }
        }, 'native': {
            'sex': {
                'male': {
                    'first': [
                        'Tõnis', 'Jaan', 'Andres', 'Mati', 'Mart', 'Peeter', 'Toomas', 'Mihkel', 'Indrek', 'Siim',
                        'Rasmus', 'Henrik', 'Markus', 'Erik', 'Kaur', 'Jüri', 'Kristjan', 'Karl', 'Ants', 'Artur',
                        'Erki', 'Viktor', 'Aivar', 'Tarmo', 'Ivar', 'Alo', 'Raivo', 'Rein', 'Ahti', 'Aleksandr',
                        'Oskar', 'Ilmar', 'Mikk', 'Valdek', 'Villem', 'Tarmo', 'Raul', 'Rain', 'Enn', 'Endel',
                        'Kuido', 'Urmas', 'Sven', 'Elmar', 'Heino', 'Alar', 'Toivo', 'Väino', 'Evald', 'Kalju',
                        'Hendrik', 'Risto', 'Olev', 'Margus', 'Taavi', 'Janek', 'Rando', 'Kaspar', 'Raimo', 'Priit',
                        'Ernst', 'Aarne', 'Juhan', 'Vello', 'Uno', 'Ragnar', 'Andrus', 'Arvo', 'Georg', 'Vahur',
                        'Ivo', 'Toivo', 'Jarmo', 'Voldemar', 'Peep', 'Mairo', 'Tarvo', 'Sulev', 'Anton', 'Joosep',
                        'Rivo', 'Ralf', 'Lauri', 'Alo', 'Teet', 'Valmar', 'Margo', 'Priidik', 'Kaarel', 'Marek',
                        'Mait', 'Artjom', 'Kaido', 'Jorma', 'Henno', 'Ervin', 'Heiti', 'Gert', 'Madis', 'Ott'
                      ],
                    'second': [
                        'Tamm', 'Mägi', 'Rebane', 'Lepp', 'Liiv', 'Kask', 'Kukk', 'Põder', 'Koppel', 'Kallas',
                        'Toom', 'Lepik', 'Allik', 'Lille', 'Karu', 'Kala', 'Kivi', 'Paju', 'Aas', 'Mets',
                        'Laane', 'Veski', 'Koppel', 'Ruutel', 'Künnapuu', 'Järv', 'Külm', 'Põld', 'Metsis', 'Oja',
                        'Teder', 'Eensaar', 'Kangur', 'Aavik', 'Männik', 'Raud', 'Ploom', 'Tammsaar', 'Nurk', 'Puusepp',
                        'Rand', 'Kont', 'Veskimägi', 'Saar', 'Laur', 'Sarapik', 'Kull', 'Mänd', 'Nõmm', 'Ots',
                        'Uusküla', 'Purje', 'Tiik', 'Ainsoo', 'Sepp', 'Liiva', 'Aav', 'Raag', 'Maasikas', 'Aasmaa',
                        'Vaino', 'Muru', 'Nurm', 'Rõõmussaar', 'Tõnisson', 'Lääne', 'Jõgi', 'Oks', 'Lembitu', 'Riis',
                        'Masing', 'Vaher', 'Metsla', 'Uus', 'Teder', 'Pikas', 'Nõmmik', 'Jalakas', 'Pärn', 'Kirsipuu',
                        'Nael', 'Meier', 'Läänemets', 'Kuklane', 'Pungas', 'Roos', 'Tuulik', 'Pääsuke', 'Ratas', 'Kald',
                        'Liivak', 'Teder', 'Tulviste', 'Olesk', 'Tammik', 'Kilp', 'Lippus', 'Järve', 'Metsalu', 'Kask'
                      ]
                },
                'female': {
                    'first': [
                        'Anu', 'Eve', 'Liis', 'Mari', 'Kadri', 'Piret', 'Maret', 'Kai', 'Reet', 'Eliis',
                        'Laine', 'Kertu', 'Kersti', 'Sirje', 'Helen', 'Triin', 'Tuuli', 'Marianne', 'Tiina', 'Ülle',
                        'Pille', 'Anne', 'Maarja', 'Heli', 'Signe', 'Ave', 'Riina', 'Lea', 'Jana', 'Inga',
                        'Kairi', 'Siiri', 'Merle', 'Evelin', 'Ester', 'Ruth', 'Ene', 'Liina', 'Mirjam', 'Marika',
                        'Liisi', 'Triinu', 'Kadri', 'Kaia', 'Astrid', 'Anneli', 'Lembi', 'Mai', 'Helin', 'Maire',
                        'Grete', 'Aili', 'Maike', 'Silja', 'Katri', 'Hanna', 'Laura', 'Diana', 'Kadi', 'Ave',
                        'Liisi', 'Eleri', 'Triinu', 'Janne', 'Kadi', 'Helena', 'Kirsti', 'Elle', 'Johanna', 'Hedvig',
                        'Kaie', 'Kerli', 'Anette', 'Marleen', 'Päivi', 'Pille', 'Eva', 'Terje', 'Margit', 'Daisy',
                        'Marit', 'Merike', 'Grete', 'Mairi', 'Eve', 'Ursula', 'Maris', 'Piret', 'Ester', 'Eva',
                        'Merilin', 'Silvia', 'Triin', 'Liisa', 'Katrin', 'Kärt', 'Ingrid', 'Triinu', 'Kädi', 'Eva'
                      ],
                    'second': [
                        'Tamm', 'Mägi', 'Rebane', 'Lepp', 'Liiv', 'Kask', 'Kukk', 'Põder', 'Koppel', 'Kallas',
                        'Toom', 'Lepik', 'Allik', 'Lille', 'Karu', 'Kala', 'Kivi', 'Paju', 'Aas', 'Mets',
                        'Laane', 'Veski', 'Koppel', 'Ruutel', 'Künnapuu', 'Järv', 'Külm', 'Põld', 'Metsis', 'Oja',
                        'Teder', 'Eensaar', 'Kangur', 'Aavik', 'Männik', 'Raud', 'Ploom', 'Tammsaar', 'Nurk', 'Puusepp',
                        'Rand', 'Kont', 'Veskimägi', 'Saar', 'Laur', 'Sarapik', 'Kull', 'Mänd', 'Nõmm', 'Ots',
                        'Uusküla', 'Purje', 'Tiik', 'Ainsoo', 'Sepp', 'Liiva', 'Aav', 'Raag', 'Maasikas', 'Aasmaa',
                        'Vaino', 'Muru', 'Nurm', 'Rõõmussaar', 'Tõnisson', 'Lääne', 'Jõgi', 'Oks', 'Lembitu', 'Riis',
                        'Masing', 'Vaher', 'Metsla', 'Uus', 'Teder', 'Pikas', 'Nõmmik', 'Jalakas', 'Pärn', 'Kirsipuu',
                        'Nael', 'Meier', 'Läänemets', 'Kuklane', 'Pungas', 'Roos', 'Tuulik', 'Pääsuke', 'Ratas', 'Kald',
                        'Liivak', 'Teder', 'Tulviste', 'Olesk', 'Tammik', 'Kilp', 'Lippus', 'Järve', 'Metsalu', 'Kask'
                      ],
                }
            }
        }},
    'Ukraine': { 'en': {
            'sex': {
                'male': {
                    'first': [
                        'Oleksandr', 'Andrii', 'Mykola', 'Volodymyr', 'Ivan', 'Yurii', 'Serhii', 'Petro', 'Dmytro', 'Oleh',
                        'Oksana', 'Artem', 'Vitalii', 'Hryhorii', 'Viktor', 'Yaroslav', 'Bogdan', 'Taras', 'Roman', 'Denys',
                        'Orest', 'Oleksii', 'Bohdan', 'Anatolii', 'Kyrylo', 'Ihor', 'Serhiy', 'Volodymyr', 'Yevhen', 'Andriy',
                        'Vladyslav', 'Maksym', 'Oleksandr', 'Danylo', 'Ostap', 'Kostiantyn', 'Mykhailo', 'Heorhii', 'Yaroslav', 'Dmytro',
                        'Serhii', 'Yevhen', 'Pavlo', 'Mykola', 'Yurii', 'Oleksii', 'Artem', 'Viktor', 'Oleh', 'Bogdan',
                        'Anatolii', 'Denys', 'Kyrylo', 'Ivan', 'Vitalii', 'Orest', 'Bohdan', 'Ihor', 'Andriy', 'Hryhorii',
                        'Taras', 'Oksana', 'Volodymyr', 'Serhiy', 'Maksym', 'Danylo', 'Yaroslav', 'Roman', 'Ostap', 'Heorhii',
                        'Kostiantyn', 'Pavlo', 'Vladyslav', 'Mykhailo', 'Yevhen', 'Mykola', 'Oleksandr', 'Yurii', 'Viktor', 'Artem',
                        'Serhii', 'Andriy', 'Oleh', 'Denys', 'Bohdan', 'Kyrylo', 'Ivan', 'Bogdan', 'Dmytro', 'Orest',
                        'Vitalii', 'Hryhorii', 'Taras', 'Yaroslav', 'Ihor', 'Mykola', 'Maksym', 'Pavlo', 'Yevhen', 'Vladyslav'
                      ],
                    'second': [
                        'Ivanenko', 'Petrenko', 'Tkachenko', 'Bondarenko', 'Shevchenko', 'Kovalenko', 'Kozlov', 'Pavlenko', 'Gavrilov', 'Sidorov',
                        'Kravchenko', 'Kovalchuk', 'Mykhailenko', 'Melnik', 'Kuznetsov', 'Ostapenko', 'Dovzhenko', 'Polishchuk', 'Lysenko', 'Shcherbak',
                        'Chernyshov', 'Popov', 'Morozov', 'Fedorov', 'Tkachuk', 'Bilous', 'Vlasenko', 'Rusnak', 'Lukashenko', 'Sydorenko',
                        'Ovcharenko', 'Goncharov', 'Dmitrenko', 'Ilyin', 'Oliynyk', 'Zakharov', 'Babenko', 'Vorobiov', 'Mykhailov', 'Khomenko',
                        'Fedorchenko', 'Nesterov', 'Bilokon', 'Zaytsev', 'Zhyhailo', 'Ponomarenko', 'Marchenko', 'Osipov', 'Korol', 'Shapovalov',
                        'Popova', 'Soloviov', 'Romanenko', 'Yermak', 'Stepanenko', 'Kucherenko', 'Antonov', 'Demchuk', 'Sokolov', 'Kosovan',
                        'Savchenko', 'Borisenko', 'Lukyanenko', 'Bilyk', 'Ovcharov', 'Zhdanova', 'Lytvyn', 'Yakovlev', 'Makarov', 'Vasyliev',
                        'Goncharenko', 'Babich', 'Hrebenyuk', 'Rudenko', 'Kotenko', 'Khomyak', 'Davydov', 'Voloshin', 'Yefremov', 'Zakharchenko',
                        'Stetsenko', 'Ivanchenko', 'Shulga', 'Kovalev', 'Moroz', 'Sydorov', 'Yakovenko', 'Pavlov', 'Vasilenko', 'Yuriev',
                        'Frolov', 'Yevtushenko', 'Kolesnikov', 'Kryvtsun', 'Trofimov', 'Bilous', 'Gryshchenko', 'Vakulenko', 'Savchuk', 'Kuzmenko'
                      ]
                },
                'female': {
                    'first': [
                        'Olena', 'Nataliia', 'Yuliia', 'Mariia', 'Kateryna', 'Iryna', 'Anna', 'Viktoriia', 'Tetiana', 'Valeriia',
                        'Yana', 'Dariia', 'Oksana', 'Olha', 'Oleksandra', 'Anastasiia', 'Ivanna', 'Ivanka', 'Alina', 'Yaroslava',
                        'Liudmyla', 'Karina', 'Nina', 'Zlata', 'Polina', 'Sofia', 'Mariana', 'Iuliia', 'Iveta', 'Liliia',
                        'Olesia', 'Anhelina', 'Angelina', 'Diana', 'Vira', 'Olesia', 'Hanna', 'Marina', 'Oksana', 'Bohdana',
                        'Ivanna', 'Nadiia', 'Svitlana', 'Valentyna', 'Nataliia', 'Nina', 'Irina', 'Nelia', 'Kateryna', 'Olena',
                        'Solomiia', 'Zoryana', 'Yarina', 'Mariia', 'Veronika', 'Khrystyna', 'Tamara', 'Tetiana', 'Anastasiia', 'Valeriia',
                        'Vira', 'Zhanna', 'Ruslana', 'Valentyna', 'Tetiana', 'Yuliia', 'Liudmyla', 'Olha', 'Iryna', 'Oleksandra',
                        'Anna', 'Sofiia', 'Karina', 'Dariia', 'Alina', 'Kateryna', 'Anastasiia', 'Viktoriia', 'Nataliia', 'Olena',
                        'Tetiana', 'Iuliia', 'Ivanna', 'Yana', 'Oksana', 'Mariia', 'Diana', 'Svitlana', 'Olesia', 'Nina',
                        'Olena', 'Irina', 'Liliia', 'Karina', 'Zlata', 'Olha', 'Nataliia', 'Alina', 'Iveta', 'Liudmyla'
                      ],
                    'second': [
                        'Ivanenko', 'Petrenko', 'Tkachenko', 'Bondarenko', 'Shevchenko', 'Kovalenko', 'Kozlova', 'Pavlenko', 'Gavrilova', 'Sidorova',
                        'Kravchenko', 'Kovalchuk', 'Mykhailenko', 'Melnik', 'Kuznetsova', 'Ostapenko', 'Dovzhenko', 'Polishchuk', 'Lysenko', 'Shcherbak',
                        'Chernyshova', 'Popova', 'Morozova', 'Fedorova', 'Tkachuk', 'Bilous', 'Vlasenko', 'Rusnak', 'Lukashenko', 'Sydorenko',
                        'Ovcharenko', 'Goncharova', 'Dmitrenko', 'Ilyina', 'Oliynyk', 'Zakharova', 'Babenko', 'Vorobiova', 'Mykhailova', 'Khomenko',
                        'Fedorchenko', 'Nesterova', 'Bilokon', 'Zaytseva', 'Zhyhailo', 'Ponomarenko', 'Marchenko', 'Osipova', 'Korol', 'Shapovalova',
                        'Soloviova', 'Romanenko', 'Yermak', 'Stepanenko', 'Kucherenko', 'Antonova', 'Demchuk', 'Sokolova', 'Kosovan', 'Savchenko',
                        'Borisenko', 'Lukyanenko', 'Bilyk', 'Ovcharova', 'Zhdanova', 'Lytvyn', 'Yakovleva', 'Makarova', 'Vasylieva', 'Goncharenko',
                        'Babich', 'Hrebenyuk', 'Rudenko', 'Kotenko', 'Khomyak', 'Davydova', 'Voloshina', 'Yefremova', 'Zakharchenko', 'Stetsenko',
                        'Ivanchenko', 'Shulga', 'Kovaleva', 'Moroz', 'Sydorova', 'Yakovenko', 'Pavlova', 'Vasilenko', 'Yurieva', 'Frolova',
                        'Yevtushenko', 'Kolesnikova', 'Kryvtsun', 'Trofimova', 'Bilous', 'Gryshchenko', 'Vakulenko', 'Savchuk', 'Kuzmenko'
                      ],
                }
            }
        }, 'native': {
            'sex': {
                'male': {
                    'first': [
                      "Олександр", "Андрій", "Сергій", "Михайло", "Іван",
                      "Володимир", "Олег", "Віталій", "Петро", "Дмитро",
                      "Ярослав", "Богдан", "Василь", "Артем", "Вадим",
                      "Юрій", "Олексій", "Роман", "Станіслав", "Максим",
                      "Тарас", "Анатолій", "Костянтин", "Микола", "Олесь",
                      "Валерій", "Борис", "Владислав", "Ігор", "Антон",
                      "Денис", "Віктор", "Руслан", "Валентин", "Георгій",
                      "Зеновій", "Святослав", "Арсен", "Данило", "Євген",
                      "Захар", "Маркіян", "Мар'ян", "Марко", "Мирослав",
                      "Назар", "Ростислав", "Семен", "Тимофій"
                  ],
                    'second': [
                      'Іваненко', 'Петренко', 'Ткаченко', 'Бондаренко', 'Шевченко', 'Коваленко', 'Козлов', 'Павленко', 'Гаврилов', 'Сидоров',
                      'Кравченко', 'Ковальчук', 'Михайленко', 'Мельник', 'Кузнєцов', 'Остапенко', 'Довженко', 'Поліщук', 'Лисенко', 'Щербак',
                      'Чернишов', 'Попов', 'Морозов', 'Федоров', 'Ткачук', 'Білоус', 'Власенко', 'Руснак', 'Лукашенко', 'Сидоренко',
                      'Овчаренко', 'Гончаров', 'Дмитренко', 'Іллін', 'Олійник', 'Захаров', 'Бабенко', 'Воробйов', 'Михайлов', 'Хоменко',
                      'Федорченко', 'Нестеров', 'Білоконь', 'Зайцев', 'Жигайло', 'Пономаренко', 'Марченко', 'Осипов', 'Король', 'Шаповалов',
                      'Попова', 'Соловйов', 'Романенко', 'Єрмак', 'Степаненко', 'Кучеренко', 'Антонов', 'Демчук', 'Соколов', 'Косован',
                      'Савченко', 'Борисенко', "Лук'яненко", 'Білик', 'Овчаров', 'Жданова', 'Литвин', 'Яковлєв', 'Макаров', 'Васильєв',
                      'Гончаренко', 'Бабич', 'Гребенюк', 'Руденко', 'Котенко', "Хом'як", 'Давидов', 'Волошин', 'Єфремов', 'Захарченко',
                      'Степаненко', 'Іванченко', 'Шульга', 'Ковальов', 'Мороз', 'Сидоров', 'Яковенко', 'Павлов', 'Василенко', "Юр'єв",
                      'Фролов', 'Євтушенко', 'Колесников', 'Кривцун', 'Трофимов', 'Білоус', 'Грищенко', 'Вакуленко', 'Савчук', 'Кузьменко'
                    ]
                },
                'female': {
                    'first': [
                      "Олена", "Наталія", "Тетяна", "Ірина", "Марія",
                      "Анна", "Вікторія", "Оксана", "Світлана", "Юлія",
                      "Людмила", "Катерина", "Валентина", "Лілія", "Дарина",
                      "Василина", "Марина", "Алла", "Анастасія", "Маргарита",
                      "Лариса", "Галина", "Віра", "Марта", "Надія",
                      "Лідія", "Раїса", "Руслана", "Ольга", "Софія",
                      "Єлизавета", "Діана", "Зоряна", "Вероніка", "Христина",
                      "Зінаїда", "Злата", "Любов", "Альона", "Тамара",
                      "Аліна", "Емілія", "Віолетта", "Єва", "Євгенія",
                      "Ксенія", "Ніна", "Олександра"
                  ],
                    'second': [
                      'Іваненко', 'Петренко', 'Ткаченко', 'Бондаренко', 'Шевченко', 'Коваленко', 'Козлова', 'Павленко', 'Гаврилова', 'Сидорова',
                      'Кравченко', 'Ковальчук', 'Михайленко', 'Мельник', 'Кузнєцова', 'Остапенко', 'Довженко', 'Поліщук', 'Лисенко', 'Щербак',
                      'Чернишова', 'Попова', 'Морозова', 'Федорова', 'Ткачук', 'Білоус', 'Власенко', 'Руснак', 'Лукашенко', 'Сидоренко',
                      'Овчаренко', 'Гончарова', 'Дмитренко', 'Ілліна', 'Олійник', 'Захарова', 'Бабенко', 'Воробйова', 'Михайлова', 'Хоменко',
                      'Федорченко', 'Нестерова', 'Білоконь', 'Зайцева', 'Жигайло', 'Пономаренко', 'Марченко', 'Осипова', 'Король', 'Шаповалова',
                      'Соловйова', 'Романенко', 'Єрмак', 'Степаненко', 'Кучеренко', 'Антонова', 'Демчук', 'Соколова', 'Косован', 'Савченко',
                      'Борисенко', "Лук'яненко", 'Білик', 'Овчарова', 'Жданова', 'Литвин', 'Яковлєва', 'Макарова', 'Васильєва', 'Гончаренко',
                      'Бабич', 'Гребенюк', 'Руденко', 'Котенко', "Хом'як", 'Давидова', 'Волошина', 'Єфремова', 'Захарченко', 'Степаненко',
                      'Іванченко', 'Шульга', 'Ковалева', 'Мороз', 'Сидорова', 'Яковенко', 'Павлова', 'Василенко', "Юр'єва", 'Фролова',
                      'Євтушенко', 'Колесникова', 'Кривцун', 'Трофимова', 'Білоус', 'Грищенко', 'Вакуленко', 'Савчук', 'Кузьменко'
                    ],
                }
            }
        }},
    'Belarus': { 'en': {
            'sex': {
                'male': {
                    'first': [
                        'Ivan', 'Mikalai', 'Aliaksandr', 'Yauhen', 'Viktar', 'Dzmitry', 'Artsiom', 'Pavel', 'Yury', 'Andrei',
                        'Siarhei', 'Uladzimir', 'Maksim', 'Anton', 'Yaraslau', 'Vitali', 'Aleh', 'Raman', 'Aliaksei',
                        'Piotr', 'Ihar', 'Stanislau', 'Aliaksandr', 'Aliaksandar', 'Dzianis', 'Kanstantsin', 'Artsiom', 'Yahor', 'Yury',
                        'Mikhail', 'Mikalai', 'Siarhei', 'Aliaksandr', 'Raman', 'Pavel', 'Dzmitry', 'Andrei', 'Yauhen', 'Viktar',
                        'Vitali', 'Aliaksei', 'Maksim', 'Uladzimir', 'Ivan', 'Ihar', 'Yaraslau', 'Stanislau', 'Aliaksandar',
                        'Dzianis', 'Kanstantsin', 'Artsiom', 'Aliaksandr', 'Yahor', 'Mikhail', 'Mikalai', 'Siarhei', 'Raman', 'Pavel',
                        'Dzmitry', 'Andrei', 'Yauhen', 'Viktar', 'Vitali', 'Aliaksei', 'Maksim', 'Uladzimir', 'Ivan',
                        'Ihar', 'Yaraslau', 'Stanislau', 'Aliaksandar', 'Dzianis', 'Kanstantsin', 'Artsiom', 'Aliaksandr', 'Yahor', 'Mikhail',
                        'Mikalai', 'Siarhei', 'Raman', 'Pavel', 'Dzmitry', 'Andrei', 'Yauhen', 'Viktar', 'Vitali', 'Aliaksei',
                        'Maksim', 'Uladzimir', 'Ivan', 'Ihar', 'Yaraslau', 'Stanislau', 'Aliaksandar', 'Dzianis', 'Kanstantsin'
                      ],
                    'second': [
                        'Ivanou', 'Mikalayeu', 'Aliaksandrou', 'Yauhenau', 'Viktarou', 'Dzmitryeu', 'Artsiomau', 'Pavelau', 'Yuryeu', 'Andreieu',
                        'Siarheieu', 'Uladzimirou', 'Maksimau', 'Antonau', 'Yaraslau', 'Katsiaryn', 'Vitalieau', 'Alehau', 'Ramanau', 'Aliakseieu',
                        'Piotrau', 'Iharau', 'Stanislau', 'Aliaksandrau', 'Aliaksandarou', 'Dzianisau', 'Kanstantsinau', 'Artsiomau', 'Yahorau', 'Yuryeu',
                        'Mikhailau', 'Mikalayeu', 'Siarheieu', 'Aliaksandrau', 'Ramanau', 'Pavelau', 'Dzmitryeu', 'Andreieu', 'Yauhenau', 'Viktarou',
                        'Vitalieau', 'Aliakseieu', 'Maksimau', 'Uladzimirou', 'Ivanau', 'Katsiaryn', 'Iharau', 'Yaraslau', 'Stanislau', 'Aliaksandarou',
                        'Dzianisau', 'Kanstantsinau', 'Artsiomau', 'Aliaksandrau', 'Yahorau', 'Mikhailau', 'Mikalayeu', 'Siarheieu', 'Ramanau', 'Pavelau',
                        'Dzmitryeu', 'Andreieu', 'Yauhenau', 'Viktarou', 'Vitalieau', 'Aliakseieu', 'Maksimau', 'Uladzimirou', 'Ivanau', 'Katsiaryn',
                        'Iharau', 'Yaraslau', 'Stanislau', 'Aliaksandarou', 'Dzianisau', 'Kanstantsinau', 'Artsiomau', 'Aliaksandrau', 'Yahorau', 'Mikhailau',
                        'Mikalayeu', 'Siarheieu', 'Ramanau', 'Pavelau', 'Dzmitryeu', 'Andreieu', 'Yauhenau', 'Viktarou', 'Vitalieau', 'Aliakseieu',
                        'Maksimau', 'Uladzimirou', 'Ivanau', 'Katsiaryn', 'Iharau', 'Yaraslau', 'Stanislau', 'Aliaksandarou', 'Dzianisau', 'Kanstantsinau'
                      ]
                },
                'female': {
                    'first': [
                        'Nastassia', 'Maryia', 'Aliaksandra', 'Katsiaryna', 'Yuliya', 'Darya', 'Hanna', 'Volha', 'Sviatlana', 'Alena',
                        'Anastasiya', 'Iryna', 'Tatsiana', 'Viktoriya', 'Nataliya', 'Yelena', 'Anastasiya', 'Yuliya', 'Karina', 'Palina',
                        'Veranika', 'Kseniya', 'Arina', 'Valiantsina', 'Tatsiana', 'Karina', 'Maryna', 'Zinaida', 'Yana', 'Irina',
                        'Aksana', 'Alyona', 'Tatsiana', 'Anastasiya', 'Yelizaveta', 'Aksana', 'Arina', 'Karina', 'Yuliya', 'Anastasiya',
                        'Yelizaveta', 'Karina', 'Maryna', 'Nina', 'Aliaksandra', 'Karina', 'Nataliya', 'Yelena', 'Iryna', 'Maryia',
                        'Veranika', 'Zinaida', 'Iryna', 'Alena', 'Alina', 'Arina', 'Hanna', 'Anastasiya', 'Yuliya', 'Viktoriya',
                        'Karina', 'Tatsiana', 'Valiantsina', 'Katsiaryna', 'Maryia', 'Yuliya', 'Darya', 'Karina', 'Tatsiana', 'Anastasiya',
                        'Yuliya', 'Maryna', 'Alyona', 'Karina', 'Valeryia', 'Anastasiya', 'Yuliya', 'Viktoriya', 'Maryia', 'Aksana',
                        'Arina', 'Karina', 'Nina', 'Yuliya', 'Anastasiya', 'Alena', 'Hanna', 'Maryna', 'Arina', 'Yuliya',
                        'Nina', 'Alyona', 'Maryia', 'Anastasiya', 'Viktoriya', 'Darya', 'Tatsiana', 'Karina', 'Karina', 'Yuliya'
                      ],
                    'second': [
                        'Ivanova', 'Mikalayeva', 'Aliaksandrova', 'Yauhenava', 'Viktara', 'Dzmitryeva', 'Artsiomava', 'Pavelava', 'Yuryeva', 'Andreieva',
                        'Siarheyeva', 'Uladzimirova', 'Maksimava', 'Antonava', 'Yaraslava', 'Katsiaryna', 'Vitalieva', 'Alekhava', 'Ramanoava', 'Aliakseyeva',
                        'Piotraeva', 'Iharava', 'Stanislava', 'Aliaksandrau', 'Aliaksandarova', 'Dzianisava', 'Kanstantsinau', 'Artsiomava', 'Yahorava', 'Yuryeva',
                        'Mikhailava', 'Mikalayeva', 'Siarheyeva', 'Aliaksandrau', 'Ramanava', 'Pavelava', 'Dzmitryeva', 'Andreieva', 'Yauhenava', 'Viktara',
                        'Vitalieva', 'Aliakseyeva', 'Maksimava', 'Uladzimirova', 'Ivanova', 'Katsiaryna', 'Iharava', 'Yaraslava', 'Stanislava', 'Aliaksandarova',
                        'Dzianisava', 'Kanstantsinau', 'Artsiomava', 'Aliaksandrau', 'Yahorava', 'Mikhailava', 'Mikalayeva', 'Siarheyeva', 'Ramanava', 'Pavelava',
                        'Dzmitryeva', 'Andreieva', 'Yauhenava', 'Viktara', 'Vitalieva', 'Aliakseyeva', 'Maksimava', 'Uladzimirova', 'Ivanova', 'Katsiaryna',
                        'Iharava', 'Yaraslava', 'Stanislava', 'Aliaksandarova', 'Dzianisava', 'Kanstantsinau', 'Artsiomava', 'Aliaksandrau', 'Yahorava', 'Mikhailava',
                        'Mikalayeva', 'Siarheyeva', 'Ramanava', 'Pavelava', 'Dzmitryeva', 'Andreieva', 'Yauhenava', 'Viktara', 'Vitalieva', 'Aliakseyeva',
                        'Maksimava', 'Uladzimirova', 'Ivanova', 'Katsiaryna', 'Iharava', 'Yaraslava', 'Stanislava', 'Aliaksandarova', 'Dzianisava', 'Kanstantsinau'
                      ],
                }
            }
        }, 'native': {
            'sex': {
                'male': {
                    'first': [
                      "Іван", "Мікалай", "Аляксандр", "Яўген", "Віктар", "Дзмітрый", "Арцём", "Павел", "Юрый", "Андрэй",
                      "Сяргей", "Уладзімір", "Максім", "Антон", "Яраслаў", "Віталь", "Алег", "Раман", "Аляксей",
                      "Пётр", "Ігар", "Станіслаў", "Аляксандр", "Аляксандар", "Дзяніс", "Канстанцін", "Арцём", "Ягор", "Юрый",
                      "Міхаіл", "Мікалай", "Сяргей", "Аляксандр", "Раман", "Павел", "Дзмітрый", "Андрэй", "Яўген", "Віктар",
                      "Віталь", "Аляксей", "Максім", "Уладзімір", "Іван", "Ігар", "Яраслаў", "Станіслаў", "Аляксандар",
                      "Дзяніс", "Канстанцін", "Арцём", "Аляксандр", "Ягор", "Міхаіл", "Мікалай", "Сяргей", "Раман", "Павел",
                      "Дзмітрый", "Андрэй", "Яўген", "Віктар", "Віталь", "Аляксей", "Максім", "Уладзімір", "Іван",
                      "Ігар", "Яраслаў", "Станіслаў", "Аляксандар", "Дзяніс", "Канстанцін", "Арцём", "Аляксандр", "Ягор", "Міхаіл",
                      "Мікалай", "Сяргей", "Раман", "Павел", "Дзмітрый", "Андрэй", "Яўген", "Віктар", "Віталь", "Аляксей",
                      "Максім", "Уладзімір", "Іван", "Ігар", "Яраслаў", "Станіслаў", "Аляксандар", "Дзяніс", "Канстанцін"
                    ],
                    'second': [
                        'Ivanou', 'Mikalayeu', 'Aliaksandrou', 'Yauhenau', 'Viktarou', 'Dzmitryeu', 'Artsiomau', 'Pavelau', 'Yuryeu', 'Andreieu',
                        'Siarheieu', 'Uladzimirou', 'Maksimau', 'Antonau', 'Yaraslau', 'Katsiaryn', 'Vitalieau', 'Alehau', 'Ramanau', 'Aliakseieu',
                        'Piotrau', 'Iharau', 'Stanislau', 'Aliaksandrau', 'Aliaksandarou', 'Dzianisau', 'Kanstantsinau', 'Artsiomau', 'Yahorau', 'Yuryeu',
                        'Mikhailau', 'Mikalayeu', 'Siarheieu', 'Aliaksandrau', 'Ramanau', 'Pavelau', 'Dzmitryeu', 'Andreieu', 'Yauhenau', 'Viktarou',
                        'Vitalieau', 'Aliakseieu', 'Maksimau', 'Uladzimirou', 'Ivanau', 'Katsiaryn', 'Iharau', 'Yaraslau', 'Stanislau', 'Aliaksandarou',
                        'Dzianisau', 'Kanstantsinau', 'Artsiomau', 'Aliaksandrau', 'Yahorau', 'Mikhailau', 'Mikalayeu', 'Siarheieu', 'Ramanau', 'Pavelau',
                        'Dzmitryeu', 'Andreieu', 'Yauhenau', 'Viktarou', 'Vitalieau', 'Aliakseieu', 'Maksimau', 'Uladzimirou', 'Ivanau', 'Katsiaryn',
                        'Iharau', 'Yaraslau', 'Stanislau', 'Aliaksandarou', 'Dzianisau', 'Kanstantsinau', 'Artsiomau', 'Aliaksandrau', 'Yahorau', 'Mikhailau',
                        'Mikalayeu', 'Siarheieu', 'Ramanau', 'Pavelau', 'Dzmitryeu', 'Andreieu', 'Yauhenau', 'Viktarou', 'Vitalieau', 'Aliakseieu',
                        'Maksimau', 'Uladzimirou', 'Ivanau', 'Katsiaryn', 'Iharau', 'Yaraslau', 'Stanislau', 'Aliaksandarou', 'Dzianisau', 'Kanstantsinau'
                      ]
                },
                'female': {
                    'first': [
                      "Настасся", "Марыя", "Аляксандра", "Кацярына", "Юлія", "Дар'я", "Ганна", "Вольга", "Святлана", "Алена",
                      "Анастасія", "Ірына", "Таццяна", "Вікторыя", "Наталля", "Ялена", "Анастасія", "Юлія", "Карына", "Паліна",
                      "Вераніка", "Ксенія", "Арына", "Валянціна", "Таццяна", "Карына", "Марына", "Зінаіда", "Яна", "Ірына",
                      "Аксана", "Алена", "Таццяна", "Анастасія", "Лізавета", "Аксана", "Арына", "Карына", "Юлія", "Анастасія",
                      "Лізавета", "Карына", "Марына", "Ніна", "Аляксандра", "Карына", "Наталля", "Ялена", "Ірына", "Марыя",
                      "Вераніка", "Зінаіда", "Ірына", "Алена", "Аліна", "Арына", "Ганна", "Анастасія", "Юлія", "Вікторыя",
                      "Карына", "Таццяна", "Валянціна", "Кацярына", "Марыя", "Юлія", "Дар'я", "Карына", "Таццяна", "Анастасія",
                      "Юлія", "Марына", "Алена", "Карына", "Валерыя", "Анастасія", "Юлія", "Вікторыя", "Марыя", "Аксана",
                      "Арына", "Карына", "Ніна", "Юлія", "Анастасія", "Алена", "Ганна", "Марына", "Арына", "Юлія",
                      "Ніна", "Алена", "Марыя", "Анастасія", "Вікторыя", "Дар'я", "Таццяна", "Карына", "Карына", "Юлія"
                  ],
                    'second': [
                        'Ivanova', 'Mikalayeva', 'Aliaksandrova', 'Yauhenava', 'Viktara', 'Dzmitryeva', 'Artsiomava', 'Pavelava', 'Yuryeva', 'Andreieva',
                        'Siarheyeva', 'Uladzimirova', 'Maksimava', 'Antonava', 'Yaraslava', 'Katsiaryna', 'Vitalieva', 'Alekhava', 'Ramanoava', 'Aliakseyeva',
                        'Piotraeva', 'Iharava', 'Stanislava', 'Aliaksandrau', 'Aliaksandarova', 'Dzianisava', 'Kanstantsinau', 'Artsiomava', 'Yahorava', 'Yuryeva',
                        'Mikhailava', 'Mikalayeva', 'Siarheyeva', 'Aliaksandrau', 'Ramanava', 'Pavelava', 'Dzmitryeva', 'Andreieva', 'Yauhenava', 'Viktara',
                        'Vitalieva', 'Aliakseyeva', 'Maksimava', 'Uladzimirova', 'Ivanova', 'Katsiaryna', 'Iharava', 'Yaraslava', 'Stanislava', 'Aliaksandarova',
                        'Dzianisava', 'Kanstantsinau', 'Artsiomava', 'Aliaksandrau', 'Yahorava', 'Mikhailava', 'Mikalayeva', 'Siarheyeva', 'Ramanava', 'Pavelava',
                        'Dzmitryeva', 'Andreieva', 'Yauhenava', 'Viktara', 'Vitalieva', 'Aliakseyeva', 'Maksimava', 'Uladzimirova', 'Ivanova', 'Katsiaryna',
                        'Iharava', 'Yaraslava', 'Stanislava', 'Aliaksandarova', 'Dzianisava', 'Kanstantsinau', 'Artsiomava', 'Aliaksandrau', 'Yahorava', 'Mikhailava',
                        'Mikalayeva', 'Siarheyeva', 'Ramanava', 'Pavelava', 'Dzmitryeva', 'Andreieva', 'Yauhenava', 'Viktara', 'Vitalieva', 'Aliakseyeva',
                        'Maksimava', 'Uladzimirova', 'Ivanova', 'Katsiaryna', 'Iharava', 'Yaraslava', 'Stanislava', 'Aliaksandarova', 'Dzianisava', 'Kanstantsinau'
                      ],
                }
            }
        }},
    'USA': { 'en': {
            'sex': {
                'male': {
                    'first': [
                        'James', 'John', 'Robert', 'Michael', 'William', 'David', 'Richard', 'Joseph', 'Thomas', 'Charles',
                        'Christopher', 'Daniel', 'Matthew', 'Anthony', 'Donald', 'Mark', 'Paul', 'Steven', 'Andrew', 'Kenneth',
                        'George', 'Joshua', 'Kevin', 'Brian', 'Edward', 'Ronald', 'Timothy', 'Jason', 'Jeffrey', 'Ryan',
                        'Jacob', 'Gary', 'Nicholas', 'Eric', 'Stephen', 'Jonathan', 'Larry', 'Justin', 'Scott', 'Brandon',
                        'Frank', 'Benjamin', 'Gregory', 'Samuel', 'Raymond', 'Patrick', 'Alexander', 'Jack', 'Dennis', 'Jerry',
                        'Tyler', 'Aaron', 'Jose', 'Henry', 'Douglas', 'Adam', 'Peter', 'Nathan', 'Zachary', 'Walter',
                        'Kyle', 'Harold', 'Carl', 'Jeremy', 'Keith', 'Roger', 'Gerald', 'Ethan', 'Arthur', 'Terry',
                        'Christian', 'Sean', 'Lawrence', 'Austin', 'Joe', 'Noah', 'Jesse', 'Albert', 'Bryan', 'Billy',
                        'Bruce', 'Willie', 'Jordan', 'Dylan', 'Alan', 'Ralph', 'Gabriel', 'Roy', 'Juan', 'Wayne',
                        'Eugene', 'Logan', 'Randy', 'Louis', 'Russell', 'Vincent', 'Philip', 'Bobby', 'Johnny', 'Bradley'
                      ],
                    'second': [
                        'Smith', 'Johnson', 'Williams', 'Jones', 'Brown', 'Davis', 'Miller', 'Wilson', 'Moore', 'Taylor',
                        'Anderson', 'Thomas', 'Jackson', 'White', 'Harris', 'Martin', 'Thompson', 'Garcia', 'Martinez', 'Robinson',
                        'Clark', 'Rodriguez', 'Lewis', 'Lee', 'Walker', 'Hall', 'Allen', 'Young', 'Hernandez', 'King',
                        'Wright', 'Lopez', 'Hill', 'Scott', 'Green', 'Adams', 'Baker', 'Nelson', 'Carter', 'Mitchell',
                        'Perez', 'Roberts', 'Turner', 'Phillips', 'Campbell', 'Parker', 'Evans', 'Edwards', 'Collins', 'Stewart',
                        'Sanchez', 'Morris', 'Rogers', 'Reed', 'Cook', 'Morgan', 'Bell', 'Murphy', 'Bailey', 'Rivera',
                        'Cooper', 'Richardson', 'Cox', 'Howard', 'Ward', 'Torres', 'Peterson', 'Gray', 'Ramirez', 'James',
                        'Watson', 'Brooks', 'Kelly', 'Sanders', 'Price', 'Bennett', 'Wood', 'Barnes', 'Ross', 'Henderson',
                        'Coleman', 'Jenkins', 'Perry', 'Powell', 'Long', 'Patterson', 'Hughes', 'Flores', 'Washington', 'Butler',
                        'Simmons', 'Foster', 'Gonzalez', 'Bryant', 'Alexander', 'Russell', 'Griffin', 'Diaz', 'Hayes', 'Myers'
                      ]
                },
                'female': {
                    'first': [
                        'Mary', 'Patricia', 'Jennifer', 'Linda', 'Elizabeth', 'Barbara', 'Susan', 'Jessica', 'Sarah', 'Karen',
                        'Nancy', 'Lisa', 'Betty', 'Margaret', 'Emily', 'Kimberly', 'Donna', 'Michelle', 'Dorothy', 'Carol',
                        'Amanda', 'Melissa', 'Deborah', 'Stephanie', 'Rebecca', 'Laura', 'Sharon', 'Cynthia', 'Kathleen', 'Helen',
                        'Amy', 'Shirley', 'Angela', 'Anna', 'Ruth', 'Brenda', 'Pamela', 'Nicole', 'Katherine', 'Virginia',
                        'Catherine', 'Christine', 'Irene', 'Janet', 'Debra', 'Connie', 'Tracy', 'Lori', 'Rhonda', 'Monica',
                        'Alice', 'Tina', 'Heather', 'Dawn', 'Lorraine', 'Caroline', 'Julie', 'Joyce', 'Charlotte', 'Sandra',
                        'Kathy', 'Joan', 'Evelyn', 'Victoria', 'Janice', 'Martha', 'Gloria', 'Ann', 'Cheryl', 'Ruth',
                        'Megan', 'Andrea', 'Lillian', 'Diane', 'Jacqueline', 'Hannah', 'Jean', 'Alice', 'Sherry', 'Lois',
                        'Julia', 'Bonnie', 'Mildred', 'Erin', 'Lauren', 'Tricia', 'Jill', 'Cathy', 'Laurie', 'Robin',
                        'Nicole', 'Christina', 'Sara', 'Rose', 'Teresa', 'April', 'Janet', 'Claire', 'Molly', 'Katie'
                      ],
                    'second': [
                        'Smith', 'Johnson', 'Williams', 'Jones', 'Brown', 'Davis', 'Miller', 'Wilson', 'Moore', 'Taylor',
                        'Anderson', 'Thomas', 'Jackson', 'White', 'Harris', 'Martin', 'Thompson', 'Garcia', 'Martinez', 'Robinson',
                        'Clark', 'Rodriguez', 'Lewis', 'Lee', 'Walker', 'Hall', 'Allen', 'Young', 'Hernandez', 'King',
                        'Wright', 'Lopez', 'Hill', 'Scott', 'Green', 'Adams', 'Baker', 'Nelson', 'Carter', 'Mitchell',
                        'Perez', 'Roberts', 'Turner', 'Phillips', 'Campbell', 'Parker', 'Evans', 'Edwards', 'Collins', 'Stewart',
                        'Sanchez', 'Morris', 'Rogers', 'Reed', 'Cook', 'Morgan', 'Bell', 'Murphy', 'Bailey', 'Rivera',
                        'Cooper', 'Richardson', 'Cox', 'Howard', 'Ward', 'Torres', 'Peterson', 'Gray', 'Ramirez', 'James',
                        'Watson', 'Brooks', 'Kelly', 'Sanders', 'Price', 'Bennett', 'Wood', 'Barnes', 'Ross', 'Henderson',
                        'Coleman', 'Jenkins', 'Perry', 'Powell', 'Long', 'Patterson', 'Hughes', 'Flores', 'Washington', 'Butler',
                        'Simmons', 'Foster', 'Gonzalez', 'Bryant', 'Alexander', 'Russell', 'Griffin', 'Diaz', 'Hayes', 'Myers'
                      ],
                }
            }
        }, 'native': {
            'sex': {
                'male': {
                    'first': [
                        'James', 'John', 'Robert', 'Michael', 'William', 'David', 'Richard', 'Joseph', 'Thomas', 'Charles',
                        'Christopher', 'Daniel', 'Matthew', 'Anthony', 'Donald', 'Mark', 'Paul', 'Steven', 'Andrew', 'Kenneth',
                        'George', 'Joshua', 'Kevin', 'Brian', 'Edward', 'Ronald', 'Timothy', 'Jason', 'Jeffrey', 'Ryan',
                        'Jacob', 'Gary', 'Nicholas', 'Eric', 'Stephen', 'Jonathan', 'Larry', 'Justin', 'Scott', 'Brandon',
                        'Frank', 'Benjamin', 'Gregory', 'Samuel', 'Raymond', 'Patrick', 'Alexander', 'Jack', 'Dennis', 'Jerry',
                        'Tyler', 'Aaron', 'Jose', 'Henry', 'Douglas', 'Adam', 'Peter', 'Nathan', 'Zachary', 'Walter',
                        'Kyle', 'Harold', 'Carl', 'Jeremy', 'Keith', 'Roger', 'Gerald', 'Ethan', 'Arthur', 'Terry',
                        'Christian', 'Sean', 'Lawrence', 'Austin', 'Joe', 'Noah', 'Jesse', 'Albert', 'Bryan', 'Billy',
                        'Bruce', 'Willie', 'Jordan', 'Dylan', 'Alan', 'Ralph', 'Gabriel', 'Roy', 'Juan', 'Wayne',
                        'Eugene', 'Logan', 'Randy', 'Louis', 'Russell', 'Vincent', 'Philip', 'Bobby', 'Johnny', 'Bradley'
                      ],
                    'second': [
                        'Smith', 'Johnson', 'Williams', 'Jones', 'Brown', 'Davis', 'Miller', 'Wilson', 'Moore', 'Taylor',
                        'Anderson', 'Thomas', 'Jackson', 'White', 'Harris', 'Martin', 'Thompson', 'Garcia', 'Martinez', 'Robinson',
                        'Clark', 'Rodriguez', 'Lewis', 'Lee', 'Walker', 'Hall', 'Allen', 'Young', 'Hernandez', 'King',
                        'Wright', 'Lopez', 'Hill', 'Scott', 'Green', 'Adams', 'Baker', 'Nelson', 'Carter', 'Mitchell',
                        'Perez', 'Roberts', 'Turner', 'Phillips', 'Campbell', 'Parker', 'Evans', 'Edwards', 'Collins', 'Stewart',
                        'Sanchez', 'Morris', 'Rogers', 'Reed', 'Cook', 'Morgan', 'Bell', 'Murphy', 'Bailey', 'Rivera',
                        'Cooper', 'Richardson', 'Cox', 'Howard', 'Ward', 'Torres', 'Peterson', 'Gray', 'Ramirez', 'James',
                        'Watson', 'Brooks', 'Kelly', 'Sanders', 'Price', 'Bennett', 'Wood', 'Barnes', 'Ross', 'Henderson',
                        'Coleman', 'Jenkins', 'Perry', 'Powell', 'Long', 'Patterson', 'Hughes', 'Flores', 'Washington', 'Butler',
                        'Simmons', 'Foster', 'Gonzalez', 'Bryant', 'Alexander', 'Russell', 'Griffin', 'Diaz', 'Hayes', 'Myers'
                      ]
                },
                'female': {
                    'first': [
                        'Mary', 'Patricia', 'Jennifer', 'Linda', 'Elizabeth', 'Barbara', 'Susan', 'Jessica', 'Sarah', 'Karen',
                        'Nancy', 'Lisa', 'Betty', 'Margaret', 'Emily', 'Kimberly', 'Donna', 'Michelle', 'Dorothy', 'Carol',
                        'Amanda', 'Melissa', 'Deborah', 'Stephanie', 'Rebecca', 'Laura', 'Sharon', 'Cynthia', 'Kathleen', 'Helen',
                        'Amy', 'Shirley', 'Angela', 'Anna', 'Ruth', 'Brenda', 'Pamela', 'Nicole', 'Katherine', 'Virginia',
                        'Catherine', 'Christine', 'Irene', 'Janet', 'Debra', 'Connie', 'Tracy', 'Lori', 'Rhonda', 'Monica',
                        'Alice', 'Tina', 'Heather', 'Dawn', 'Lorraine', 'Caroline', 'Julie', 'Joyce', 'Charlotte', 'Sandra',
                        'Kathy', 'Joan', 'Evelyn', 'Victoria', 'Janice', 'Martha', 'Gloria', 'Ann', 'Cheryl', 'Ruth',
                        'Megan', 'Andrea', 'Lillian', 'Diane', 'Jacqueline', 'Hannah', 'Jean', 'Alice', 'Sherry', 'Lois',
                        'Julia', 'Bonnie', 'Mildred', 'Erin', 'Lauren', 'Tricia', 'Jill', 'Cathy', 'Laurie', 'Robin',
                        'Nicole', 'Christina', 'Sara', 'Rose', 'Teresa', 'April', 'Janet', 'Claire', 'Molly', 'Katie'
                      ],
                    'second': [
                        'Smith', 'Johnson', 'Williams', 'Jones', 'Brown', 'Davis', 'Miller', 'Wilson', 'Moore', 'Taylor',
                        'Anderson', 'Thomas', 'Jackson', 'White', 'Harris', 'Martin', 'Thompson', 'Garcia', 'Martinez', 'Robinson',
                        'Clark', 'Rodriguez', 'Lewis', 'Lee', 'Walker', 'Hall', 'Allen', 'Young', 'Hernandez', 'King',
                        'Wright', 'Lopez', 'Hill', 'Scott', 'Green', 'Adams', 'Baker', 'Nelson', 'Carter', 'Mitchell',
                        'Perez', 'Roberts', 'Turner', 'Phillips', 'Campbell', 'Parker', 'Evans', 'Edwards', 'Collins', 'Stewart',
                        'Sanchez', 'Morris', 'Rogers', 'Reed', 'Cook', 'Morgan', 'Bell', 'Murphy', 'Bailey', 'Rivera',
                        'Cooper', 'Richardson', 'Cox', 'Howard', 'Ward', 'Torres', 'Peterson', 'Gray', 'Ramirez', 'James',
                        'Watson', 'Brooks', 'Kelly', 'Sanders', 'Price', 'Bennett', 'Wood', 'Barnes', 'Ross', 'Henderson',
                        'Coleman', 'Jenkins', 'Perry', 'Powell', 'Long', 'Patterson', 'Hughes', 'Flores', 'Washington', 'Butler',
                        'Simmons', 'Foster', 'Gonzalez', 'Bryant', 'Alexander', 'Russell', 'Griffin', 'Diaz', 'Hayes', 'Myers'
                      ],
                }
            }
        }}
}

const object = {
    'country': {
        'en': {
            'sex': {
                'male': {
                    'first': [],
                    'second': []
                },
                'female': {
                    'first': [],
                    'second': [],
                }
            }
        },
        'native': {
            'sex': {
                'male': {
                    'first': [],
                    'second': []
                },
                'female': {
                    'first': [],
                    'second': [],
                }
            }
        }
    }
}

export default countries;