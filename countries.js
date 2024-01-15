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
                        "Արման", "Արթուր", "Դավիթ", "Աշոտ", "Հայկ", "Տիգրան", "Գևորգ", "Կարեն", "Վարդան", "Ռուբեն",
                        "Սուրեն", "Հակոբ", "Գագիկ", "Լեվոն", "Արամ", "Սամվել", "Ռոբերտ", "Սարգիս", "Մհեր", "Նարեկ",
                        "Էդգար", "Ռաֆայել", "Գոռ", "Անդրանիկ", "Տիգրան", "Հովհաննես", "Արսեն", "Գարեգին", "Վահան", "Արեգ",
                        "Գուրգեն", "Հրանդ", "Արեգ", "Արամայիս", "Զավեն", "Ժիրայր", "Համլետ", "Վրեժ", "Ռուբեն", "Սալբախյան",
                        "Տոռենտ", "Բորդա", "Ալբո", "Ռեյզաջ", "Քանուտ", "Հովհաննես", "Ավեդիս", "Սաֆարյան", "Աբբաս", "Նասիր",
                        "Կարեն", "Լեոն", "Մարիո", "Գեղամ", "Հրանտ", "Արեն", "Գարեգ", "Համո", "Րուբեն", "Սեվակ", "Անդրանիկ",
                        "Տիգրան", "Հովսեփ", "Խաչիկ", "Հովիկ", "Արշակ", "Գեղամ", "Նաիրի", "Արեն", "Ալեքսանդր", "Յոզեֆ",
                        "Ռաֆֆի", "Վազգեն", "Խորեն", "Հայկազ", "Նահիկ", "Արշակ", "Զոհրաբ", "Գրիգոր", "Արտաշես", "Գեվորգ",
                        "Խաչատուր", "Հմայակ", "Դարիո", "Դավիթ", "Հայգամ", "Կորյուն", "Թարոն", "Զոհրաբ", "Զորավաթ", "Զորիկ",
                        "Զորան", "Զորապատ", "Զորավազդատ", "Զորավատ", "Զորապատ", "Զորան", "Զորական", "Զորապատ", "Զորիկ", "Զորավաթ", "Զորապատ"
                      ],
                    'second': [
                        "Ալեքսանյան", "Միրզոյան", "Կարապետյան", "Սարգսյան", "Թաթուլյան", "Հայրապետյան", "Գասպարյան", "Ալեսյան", "Նազարյան", "Խաչատրյան",
                        "Դավիդյան", "Խաչիկյան", "Հալաբյան", "Վարդանյան", "Գրիգորյան", "Աբելյան", "Մովսիսյան", "Ադամյան", "Բագրատյան", "Մարտիրոսյան",
                        "Մանուկյան", "Արամյան", "Բաղդասարյան", "Գալուստյան", "Նիկոլայան", "Արզումանյան", "Աբդալյան", "Համբարձումյան", "Բաբայան", "Հարության", "Գրիգորյան",
                        "Խամչյան", "Արամյան", "Մելիքյան", "Բանդյան", "Արմենյան", "Սեյրանյան", "Մանասիրյան", "Հարությունյան", "Գրիգորյան", "Հարության", "Կարապետյան",
                        "Կոստանյան", "Մինասյան", "Արշակյան", "Դումանյան", "Մուրադյան", "Նալբանդյան", "Հայուշյան", "Դարբինյան", "Գրիգորյան", "Գազարյան", "Կարապետյան",
                        "Կանալյան", "Մուրադյան", "Մալաքյան", "Խաչատրյան", "Կարապետյան", "Կամալյան", "Արամանյան", "Խաչատրյան", "Մինասյան", "Արշակյան",
                        "Գրիգորյան", "Ազգամեկյան", "Կանակյան", "Մարգարյան", "Բաղդասարյան", "Սեվակյան", "Հովսեփյան", "Սողոմոնյան", "Ալեքսանյան", "Գուլպարանյան", "Կարապետյան"
                      ]
                },
                'female': {
                    'first': [
                        "Անահիտ", "Մարիամ", "Տաթեվ", "Լուսինե", "Նարինե", "Արևիկ", "Աննա", "Արփինե", "Հասմիկ", "Լիանա",
                        "Սիրանուշ", "Գայանե", "Ռուզաննա", "Սաթենիկ", "Լուսինե", "Արմինե", "Մարինե", "Նոնա", "Անի", "Սիլվա",
                        "Վարդուհի", "Հրանուշ", "Լիլիթ", "Այդա", "Լարա", "Լուսաբեր", "Իրինա", "Լարա", "Շուշան", "Շողիկ",
                        "Հրիփսիմե", "Հասմիկ", "Լիանա", "Անահիտ", "Սիրանուշ", "Էլենա", "Անուշ", "Իվետ", "Աստղիկ", "Անուշիկ",
                        "Արփի", "Նաիրա", "Դիանա", "Գոհար", "Զարա", "Հերմինե", "Իրինա", "Կարինա", "Նաթալի", "Նունե",
                        "Վարդուհի", "Ռիմա", "Լուսինե", "Լիանա", "Լուսինե", "Սիրանուշ", "Մարինե", "Լիլիթ", "Արփի", "Նունե",
                        "Ռուզաննա", "Սաթիկ", "Շուշան", "Սվետլանա", "Տիգրանուհի", "Տաթևիկ", "Ծովինար", "Վարդիթեր", "Վերոնիկա", "Վիոլետա",
                        "Յուլիա", "Զարա", "Արմինե", "Անի", "Մարինե", "Աիդա", "Զարա", "Հրիփսիմե", "Սիլվա", "Անուշիկ",
                        "Դիանա", "Շողիկ", "Անի", "Նարինե", "Սաթիկ", "Ռուզաննա", "Անահիտ", "Արփի", "Լուսինե", "Սիրանուշ",
                        "Վարդուհի", "Արմինե", "Հերմինե", "Ռիմա", "Նոնա", "Լարա", "Նունե", "Իվետ", "Հասմիկ", "Լիլիթ"
                      ],
                    'second': [
                        "Ալեքսանյան", "Միրզոյան", "Կարապետյան", "Սարգսյան", "Թաթուլյան", "Հայրապետյան", "Գասպարյան", "Ալեսյան", "Նազարյան", "Խաչատրյան",
                        "Դավիդյան", "Խաչիկյան", "Հալաբյան", "Վարդանյան", "Գրիգորյան", "Աբելյան", "Մովսիսյան", "Ադամյան", "Բագրատյան", "Մարտիրոսյան",
                        "Մանուկյան", "Արամյան", "Բաղդասարյան", "Գալուստյան", "Նիկոլայան", "Արզումանյան", "Աբդալյան", "Համբարձումյան", "Բաբայան", "Հարության", "Գրիգորյան",
                        "Խամչյան", "Արամյան", "Մելիքյան", "Բանդյան", "Արմենյան", "Սեյրանյան", "Մանասիրյան", "Հարությունյան", "Գրիգորյան", "Հարության", "Կարապետյան",
                        "Կոստանյան", "Մինասյան", "Արշակյան", "Դումանյան", "Մուրադյան", "Նալբանդյան", "Հայուշյան", "Դարբինյան", "Գրիգորյան", "Գազարյան", "Կարապետյան",
                        "Կանալյան", "Մուրադյան", "Մալաքյան", "Խաչատրյան", "Կարապետյան", "Կամալյան", "Արամանյան", "Խաչատրյան", "Մինասյան", "Արշակյան",
                        "Գրիգորյան", "Ազգամեկյան", "Կանակյան", "Մարգարյան", "Բաղդասարյան", "Սեվակյան", "Հովսեփյան", "Սողոմոնյան", "Ալեքսանյան", "Գուլպարանյան", "Կարապետյան"
                      ],
                }
            }
        }},
    'Belgium': { 'en': {
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
    'Benin': { 'en': {
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
    'Bulgaria': { 'en': {
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
    'Bosnia and Herzegovina': { 'en': {
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
    'Great Britain': { 'en': {
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
    'Hungary': { 'en': {
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
    'Germany': { 'en': {
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
    'Georgia': { 'en': {
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
    'Denmark': { 'en': {
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
    'Israel': { 'en': {
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
    'Iceland': { 'en': {
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
    'Kazakhstan': { 'en': {
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