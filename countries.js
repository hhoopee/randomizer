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
    'Andorra': { 'en': {
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
    'Armenia': { 'en': {
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