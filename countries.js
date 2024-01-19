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
                        "Schmidt", "Müller", "Wagner", "Schneider", "Fischer", "Weber", "Meyer", "Huber", "Hofer", "Gruber",
                        "Leitner", "Steiner", "Schmid", "Maier", "Eder", "Bauer", "Winkler", "Auer", "Pichler", "Berger",
                        "Fuchs", "Wallner", "Mayr", "Lang", "Schwarz", "Fischer", "Wimmer", "Hofmann", "Lechner", "Moser",
                        "Eder", "Neumann", "Haas", "Hofmann", "Winkler", "Koller", "Wolf", "Leitner", "Wagner", "Grün",
                        "Herrmann", "Binder", "Aigner", "Schuster", "Richter", "Herzog", "Schwarz", "Fiala", "Scholz",
                        "Fröhlich", "Hermann", "Haas", "Hess", "Lederer", "Lang", "Zimmermann", "Schubert", "Brunner",
                        "Resch", "Reiter", "Fritz", "Gruber", "Brunner", "Schmidt", "Brandtner", "Moser", "Leitner",
                        "Gross", "Egger", "Wieser", "Reiter", "Bach", "Kramer", "Pfeiffer", "Stadler", "Weiss", "Sailer",
                        "Bauer", "Schreiber", "Lechner", "Scholz", "Fröhlich", "Wimmer", "Eder", "Reiter", "Koch", "Roth",
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
                        "Schmidt", "Müller", "Wagner", "Schneider", "Fischer", "Weber", "Meyer", "Huber", "Hofer", "Gruber",
                        "Leitner", "Steiner", "Schmid", "Maier", "Eder", "Bauer", "Winkler", "Auer", "Pichler", "Berger",
                        "Fuchs", "Wallner", "Mayr", "Lang", "Schwarz", "Fischer", "Wimmer", "Hofmann", "Lechner", "Moser",
                        "Eder", "Neumann", "Haas", "Hofmann", "Winkler", "Koller", "Wolf", "Leitner", "Wagner", "Grün",
                        "Herrmann", "Binder", "Aigner", "Schuster", "Richter", "Herzog", "Schwarz", "Fiala", "Scholz",
                        "Fröhlich", "Hermann", "Haas", "Hess", "Lederer", "Lang", "Zimmermann", "Schubert", "Brunner",
                        "Resch", "Reiter", "Fritz", "Gruber", "Brunner", "Schmidt", "Brandtner", "Moser", "Leitner",
                        "Gross", "Egger", "Wieser", "Reiter", "Bach", "Kramer", "Pfeiffer", "Stadler", "Weiss", "Sailer",
                        "Bauer", "Schreiber", "Lechner", "Scholz", "Fröhlich", "Wimmer", "Eder", "Reiter", "Koch", "Roth",
                        "Leitner", "Sauer"
                      ]
                }
            }
        }},
    'Azerbaijan': { 'en': {
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
    'Albania': { 'en': {
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
                        "Adrian", "Besnik", "Dritan", "Elton", "Fatmir", "Genc", "Hasan", "Ilir", "Jon", "Kreshnik",
                        "Liridon", "Maks", "Nertil", "Oltion", "Petrit", "Qemal", "Renato", "Skënder", "Taulant", "Urim",
                        "Vasil", "Xhavit", "Ylli", "Zef", "Agron", "Blerim", "Dashamir", "Erjon", "Flamur", "Gentian",
                        "Hektor", "Ismet", "Jurgen", "Kliton", "Luan", "Mikel", "Naim", "Olsi", "Përparim", "Qamil",
                        "Ramazan", "Saimir", "Taulant", "Urim", "Viktor", "Xhevahir", "Ylber", "Zaim", "Arben", "Bujar",
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
        }},
    'Andorra': { 'en': {
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
        }},
    'Armenia': { 'en': {
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
        }},
    'Belgium': { 'en': {
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
        }},
    'Benin': { 'en': {
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
        }},
    'Bulgaria': { 'en': {
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
        }},
    'Bosnia and Herzegovina': { 'en': {
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
                        "Hodžić", "Hadžić", "Osmanagić", "Suljić", "Kovačević", "Ibrahimović", "Karić", "Mehić", "Osmić", "Delić",
                        "Kurtić", "Smajić", "Brkić", "Mandić", "Salkić", "Mujagić", "Ahmetović", "Alagić", "Makić", "Aljić",
                        "Huskić", "Muharemović", "Dautović", "Mujić", "Dervišević", "Bešić", "Mešić", "Hrnjić", "Sarajlić", "Šećerović",
                        "Ćosić", "Kadrić", "Agić", "Mujkić", "Husić", "Krehić", "Ramić", "Jusić", "Lukić", "Halilović",
                        "Ibrulj", "Zukić", "Dizdarević", "Pandža", "Ihtijarević", "Omeragić", "Sijerčić", "Ljevaković", "Mahmić", "Kamberović",
                        "Lemes", "Geko", "Kolić", "Selimović", "Ćorović", "Merdanović", "Hasečić", "Izetbegović", "Zahiragić", "Jugo",
                        "Herceg", "Zaimović", "Dugonjić", "Grbić", "Peco", "Dolić", "Karamehmedović", "Lisica", "Ferić", "Jusufbegović",
                        "Osmanović", "Šabić", "Husić", "Musić", "Dautbegović", "Palić", "Ahmić", "Selmanović", "Serdarević", "Dudić",
                        "Šemić", "Suljagić", "Matoruga", "Polić", "Mustafić", "Šišić", "Zelenika", "Isaković", "Bajramović", "Tiro"
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
                        "Hodžić", "Hadžić", "Osmanagić", "Suljić", "Kovačević", "Ibrahimović", "Karić", "Mehić", "Osmić", "Delić",
                        "Kurtić", "Smajić", "Brkić", "Mandić", "Salkić", "Mujagić", "Ahmetović", "Alagić", "Makić", "Aljić",
                        "Huskić", "Muharemović", "Dautović", "Mujić", "Dervišević", "Bešić", "Mešić", "Hrnjić", "Sarajlić", "Šećerović",
                        "Ćosić", "Kadrić", "Agić", "Mujkić", "Husić", "Krehić", "Ramić", "Jusić", "Lukić", "Halilović",
                        "Ibrulj", "Zukić", "Dizdarević", "Pandža", "Ihtijarević", "Omeragić", "Sijerčić", "Ljevaković", "Mahmić", "Kamberović",
                        "Lemes", "Geko", "Kolić", "Selimović", "Ćorović", "Merdanović", "Hasečić", "Izetbegović", "Zahiragić", "Jugo",
                        "Herceg", "Zaimović", "Dugonjić", "Grbić", "Peco", "Dolić", "Karamehmedović", "Lisica", "Ferić", "Jusufbegović",
                        "Osmanović", "Šabić", "Husić", "Musić", "Dautbegović", "Palić", "Ahmić", "Selmanović", "Serdarević", "Dudić",
                        "Šemić", "Suljagić", "Matoruga", "Polić", "Mustafić", "Šišić", "Zelenika", "Isaković", "Bajramović", "Tiro"
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
    'Hungary': { 'en': {
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
                        "Gábor", "István", "János", "László", "Péter", "Zoltán", "Attila", "Tamás", "Ferenc", "István",
                        "András", "József", "Imre", "Sándor", "Zsolt", "Béla", "György", "Mihály", "Norbert", "Károly",
                        "Róbert", "Gyula", "Csaba", "Krisztián", "Ferenc", "Máté", "László", "Szabolcs", "Viktor", "Balázs",
                        "Dávid", "József", "Károly", "András", "Miklós", "Levente", "János", "Zoltán", "Gábor", "Péter",
                        "László", "Ferenc", "István", "Tamás", "Imre", "Sándor", "Norbert", "Zsolt", "György", "Mihály",
                        "Róbert", "Gyula", "Csaba", "Krisztián", "Máté", "László", "Szabolcs", "Viktor", "Balázs", "Dávid",
                        "József", "Károly", "András", "Miklós", "Levente", "János", "Zoltán", "Gábor", "Péter", "László",
                        "Ferenc", "István", "Tamás", "Imre", "Sándor", "Norbert", "Zsolt", "György", "Mihály", "Róbert",
                        "Gyula", "Csaba", "Krisztián", "Ferenc", "Máté", "László", "Szabolcs", "Viktor", "Balázs", "Dávid"
                      ],
                    'second': [
                        "Nagy", "Kovács", "Tóth", "Szabó", "Horváth", "Varga", "Kiss", "Molnár", "Németh", "Farkas",
                        "Papp", "Balázs", "Takács", "Juhász", "Simon", "Kálmán", "Bíró", "Fehér", "Lakatos", "Pásztor",
                        "Pataki", "Török", "Kis", "Magyar", "Sándor", "Fehér", "Lukács", "Szőke", "Rácz", "Katona",
                        "Fekete", "Bakos", "Virág", "János", "Bakos", "Balogh", "Barta", "Bíró", "Fehér", "Gáspár",
                        "Bálint", "Barna", "Beke", "Benedek", "Bérces", "Bodnár", "Bogdán", "Boros", "Budai", "Csaba",
                        "Csonka", "Csorba", "Dankó", "Dávid", "Demeter", "Dobos", "Dömötör", "Durkó", "Édes", "Érsek",
                        "Farkas", "Fábián", "Fehér", "Fekete", "Ferenc", "Fodor", "Földi", "Füzesi", "Gábor", "Gál",
                        "Gergely", "Görbe", "Gulyás", "Gyarmati", "Gyöngyösi", "Györe", "Györi", "Győző", "Hajdú", "Hegedüs",
                        "Horváth", "Illés", "István", "Juhász", "Jónás", "Kántor", "Katona", "Kerekes", "Kiss", "Kocsis"
                      ]
                },
                'female': {
                    'first': [
                        "Szilvia", "Katalin", "Zsófia", "Mária", "Eva", "Ildikó", "Anita", "Edit", "Andrea", "Ibolya",
                        "Zsuzsanna", "Erzsébet", "Judit", "Ilona", "Krisztina", "Viktória", "Lilla", "Hajnalka", "Nóra", "Dóra",
                        "Enikő", "Hanna", "Boglárka", "Réka", "Petra", "Bianka", "Emese", "Virág", "Orsolya", "Dalma",
                        "Szofia", "Anett", "Fanni", "Renáta", "Noémi", "Eszter", "Nikolett", "Jázmin", "Kinga", "Lili",
                        "Luca", "Evelin", "Borbála", "Diana", "Flóra", "Laura", "Léna", "Rózsa", "Sára", "Tímea",
                        "Vanessa", "Zita", "Zsanett", "Livia", "Mariann", "Vivien", "Alexandra", "Barbara", "Cintia", "Ema",
                        "Fruzsina", "Gréta", "Helga", "Irén", "Júlia", "Kitti", "Leila", "Melinda", "Nelli", "Olivér",
                        "Panna", "Rita", "Szabina", "Tünde", "Veronika", "Viktória", "Xénia", "Yvette", "Zselyke", "Zsanett",
                        "Zsuzsa", "Zoé", "Nóra", "Liliána", "Maja", "Anna", "Bianka", "Dóra", "Emma", "Fanni"
                      ],
                    'second': [
                        "Nagy", "Kovács", "Tóth", "Szabó", "Horváth", "Varga", "Kiss", "Molnár", "Németh", "Farkas",
                        "Papp", "Balázs", "Takács", "Juhász", "Simon", "Kálmán", "Bíró", "Fehér", "Lakatos", "Pásztor",
                        "Pataki", "Török", "Kis", "Magyar", "Sándor", "Fehér", "Lukács", "Szőke", "Rácz", "Katona",
                        "Fekete", "Bakos", "Virág", "János", "Bakos", "Balogh", "Barta", "Bíró", "Fehér", "Gáspár",
                        "Bálint", "Barna", "Beke", "Benedek", "Bérces", "Bodnár", "Bogdán", "Boros", "Budai", "Csaba",
                        "Csonka", "Csorba", "Dankó", "Dávid", "Demeter", "Dobos", "Dömötör", "Durkó", "Édes", "Érsek",
                        "Farkas", "Fábián", "Fehér", "Fekete", "Ferenc", "Fodor", "Földi", "Füzesi", "Gábor", "Gál",
                        "Gergely", "Görbe", "Gulyás", "Gyarmati", "Gyöngyösi", "Györe", "Györi", "Győző", "Hajdú", "Hegedüs",
                        "Horváth", "Illés", "István", "Juhász", "Jónás", "Kántor", "Katona", "Kerekes", "Kiss", "Kocsis"
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
    'Hong Kong': { 'en': {
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
        }, 'native': {
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
        }},
    'Greece': { 'en': {
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
    'Georgia': { 'en': {
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
    'Denmark': { 'en': {
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
    'Israel': { 'en': {
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
    'Iceland': { 'en': {
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
    'Kazakhstan': { 'en': {
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
                    'first': [],
                    'second': []
                },
                'female': {
                    'first': [],
                    'second': [],
                }
            }
        }, 'native': {
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
        }},
    'Latvia': { 'en': {
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
        }, 'native': {
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
        }},
    'Lithuania': { 'en': {
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
        }, 'native': {
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
        }},
    'Morocco': { 'en': {
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
        }, 'native': {
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
        }},
    'Moldova': { 'en': {
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
        }, 'native': {
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
        }},
    'Netherlands': { 'en': {
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
        }, 'native': {
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
        }},
    'Norway': { 'en': {
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
        }, 'native': {
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
        }},
    'UAE': { 'en': {
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
        }, 'native': {
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
        }},
    'Poland': { 'en': {
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
        }, 'native': {
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
        }},
    'Portugal': { 'en': {
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
        }, 'native': {
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
        }},
    'Romania': { 'en': {
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
        }, 'native': {
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
        }},
    'Saudi Arabia': { 'en': {
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
        }, 'native': {
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
        }},
    'Serbia': { 'en': {
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
        }, 'native': {
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
        }},
    'Slovakia': { 'en': {
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
        }, 'native': {
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
        }},
    'Slovenia': { 'en': {
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
        }, 'native': {
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
        }},
    'Tunisia': { 'en': {
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
        }, 'native': {
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
        }},
    'Türkiye': { 'en': {
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
        }, 'native': {
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
        }},
    'Finland': { 'en': {
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
        }, 'native': {
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
        }},
    'Croatia': { 'en': {
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
        }, 'native': {
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
        }},
    'Czech': { 'en': {
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
        }, 'native': {
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
        }},
    'Switzerland': { 'en': {
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
        }, 'native': {
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
        }},
    'Sweden': { 'en': {
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
        }, 'native': {
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
        }}, 
    'Estonia': { 'en': {
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
        }, 'native': {
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
        }},
    'Ukraine': { 'en': {
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
        }, 'native': {
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
        }},
    'Belarus': { 'en': {
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
        }, 'native': {
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
        }},
    'USA': { 'en': {
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
        }, 'native': {
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