# Queries
# follow the steps.

Drop the database:

    mongosh

    usedb Shoutout

    db.dropdatabase()

Note: You can ask chatgpt it will help spectifically for the windows the above steps worked for me in mac.

create a database.

    use Shoutout

# User Query:

    db.users.insertMany([
      {
        userId: "I352439",
        name: "Angirekula Vishal",
        avatarId: "avatar1",
        isAdmin: false
      },
      {
        userId: "I352473",
        name: "Sunil Badugu",
        dateOfBirth: "1999-12-10",
        dateOfJoining: "2012-10-10",
        avatarId: "avatar2",
        isAdmin: false
      },
      {
        userId: "I552291",
        name: "Chandra Sekhar Bejugam",
        dateOfBirth: "1999-03-26",
        dateOfJoining: "2021-06-09",
        avatarId: "avatar3",
        isAdmin: false
      },
      {
        userId: "I574206",
        name: "Ramya Bommana",
        dateOfBirth: "1999-07-08",
        dateOfJoining: "2022-09-26",
        avatarId: "avatar4",
        isAdmin: false
      },
      {
        userId: "I588402",
        name: "Prashamsa Sagam",
        dateOfBirth: "2003-08-02",
        dateOfJoining: "2024-07-29",
        avatarId: "avatar5",
        isAdmin: true
      },
      {
        userId: "I356124",
        name: "Preethi Jahnavi Balijepally Chellai",
        dateOfBirth: "1999-07-09",
        avatarId: "avatar6",
        isAdmin: false
      },
      {
        userId: "I352348",
        name: "Paramesh Adama",
        dateOfBirth: "1999-08-31",
        dateOfJoining: "2016-02-29",
        avatarId: "avatar1",
        isAdmin: false
      },
      {
        userId: "I513847",
        name: "Ramesh Korlakunta",
        avatarId: "avatar2",
        isAdmin: false
      },
      {
        userId: "I352414",
        name: "Santosh Sulege",
        dateOfJoining: "2016-11-14",
        avatarId: "avatar3",
        isAdmin: false
      },
      {
        userId: "I575579",
        name: "Kommoju Satya Pavan Kumar Rajit",
        dateOfBirth: "1999-02-05",
        dateOfJoining: "2022-09-22",
        avatarId: "avatar4",
        isAdmin: false
      },
      {
        userId: "I557583",
        name: "Naresh Kumar Gara",
        dateOfBirth: "1999-07-29",
        dateOfJoining: "2021-11-01",
        avatarId: "avatar5",
        isAdmin: false
      },
      {
        userId: "I352529",
        name: "Naresh Sapavat",
        dateOfBirth: "1999-05-05",
        dateOfJoining: "2017-08-14",
        avatarId: "avatar6",
        isAdmin: false
      },
      {
        userId: "I324275",
        name: "Raghu S Panicker",
        dateOfBirth: "1980-09-26",
        dateOfJoining: "2012-10-12",
        avatarId: "avatar1",
        isAdmin: false
      },
      {
        userId: "I351326",
        name: "Sandeep Harinarthini",
        dateOfBirth: "1987-11-07",
        dateOfJoining: "2018-05-15",
        avatarId: "avatar2",
        isAdmin: false
      },
      {
        userId: "I354516",
        name: "Shiva Bharghava Rachamalla",
        dateOfBirth: "1999-12-14",
        dateOfJoining: "2018-05-28",
        avatarId: "avatar3",
        isAdmin: false
      },
      {
        userId: "I352389",
        name: "Bhanu Komerally",
        dateOfBirth: "1999-01-23",
        avatarId: "avatar4",
        isAdmin: false
      },
      {
        userId: "I352521",
        name: "Peddiraju Dadi",
        dateOfBirth: "1999-12-06",
        dateOfJoining: "2021-06-28",
        avatarId: "avatar5",
        isAdmin: false
      },
      {
        userId: "I587882",
        name: "Nikhilesh Matta",
        dateOfJoining: "2024-07-29",
        avatarId: "avatar6",
        isAdmin: false
      },
      {
        userId: "I869005",
        name: "Kavitha Borra",
        dateOfBirth: "1999-08-28",
        avatarId: "avatar1",
        isAdmin: false
      }
    ]);

# Festivals Query

    db.festivallists.insertMany([
      {
        listingId: "festival1",
        name: "New Year Celebration",
        month: 1,
        day: 1,
        videoId: "video123",
      },
      {
        listingId: "festival2",
        name: "Post-New Year Party",
        month: 1,
        day: 2,
        videoId: "video456",
      }
    ]);
    
# festivals Query 2
    db.festivalshowcases.insertMany([
      {
        "_id": ObjectId("6775829b9402fcc16cff5301"),
        "festivalId": "new-year-celebration-2025",
        "name": "New Year Celebration",
        "year": 2025,
        "date": ISODate("2025-01-01T00:00:00.000Z"),
        "videoId": "video123",
        "isPast": true,
        "__v": 0,
        "createdAt": ISODate("2025-01-01T17:59:55.000Z")
      },
      {
        "_id": ObjectId("677589a83762316bed06bed0"),
        "festivalId": "post-new-year-party-2025",
        "name": "Post-New Year Party",
        "year": 2025,
        "date": ISODate("2025-01-02T00:00:00.000Z"),
        "videoId": "video456",
        "isPast": false,
        "__v": 0,
        "createdAt": ISODate("2025-01-01T18:30:00.000Z")
      }
    ]);

# for testing purpose

    db.users.bulkWrite([
    { 
        updateOne: { 
            filter: { userId: "Vishal" }, 
            update: { $set: { email: "test@sample.org" } } 
        } 
    },
    { 
        updateOne: { 
            filter: { userId: "Sunil" }, 
            update: { $set: { email: "test@sample.org" } } 
        } 
    },
    { 
        updateOne: { 
            filter: { userId: "chandra" }, 
            update: { $set: { email: "test@sample.org" } } 
        } 
    },
    { 
        updateOne: { 
            filter: { userId: "Ramya" }, 
            update: { $set: { email: "ramya.bommana@sap.com" } } 
        } 
    },
    { 
        updateOne: { 
            filter: { userId: "Prashamsa" }, 
            update: { $set: { email: "prashamsa.sagam@sap.com" } } 
        } 
    },
    { 
        updateOne: { 
            filter: { userId: "Preeti" }, 
            update: { $set: { email: "test@sample.org" } } 
        } 
    },
    { 
        updateOne: { 
            filter: { userId: "Paramesh" }, 
            update: { $set: { email: "test@sample.org" } } 
        } 
    },
    { 
        updateOne: { 
            filter: { userId: "Ramesh" }, 
            update: { $set: { email: "test@sample.org" } } 
        } 
    },
    { 
        updateOne: { 
            filter: { userId: "Santosh" }, 
            update: { $set: { email: "test@sample.org" } } 
        } 
    },
    { 
        updateOne: { 
            filter: { userId: "Satya" }, 
            update: { $set: { email: "test@sample.org" } } 
        } 
    },
    { 
        updateOne: { 
            filter: { userId: "Naresh Gara" }, 
            update: { $set: { email: "test@sample.org" } } 
        } 
    },
    { 
        updateOne: { 
            filter: { userId: "Naresh Sapavat" }, 
            update: { $set: { email: "test@sample.org" } } 
        } 
    },
    { 
        updateOne: { 
            filter: { userId: "Raghu Paniker" }, 
            update: { $set: { email: "test@sample.org" } } 
        } 
    },
    { 
        updateOne: { 
            filter: { userId: "Sandeep" }, 
            update: { $set: { email: "test@sample.org" } } 
        } 
    },
    { 
        updateOne: { 
            filter: { userId: "Shiva Bharghava" }, 
            update: { $set: { email: "test@sample.org" } } 
        } 
    },
    { 
        updateOne: { 
            filter: { userId: "Bhanu" }, 
            update: { $set: { email: "test@sample.org" } } 
        } 
    },
    { 
        updateOne: { 
            filter: { userId: "Peddiraju" }, 
            update: { $set: { email: "test@sample.org" } } 
        } 
    },
    { 
        updateOne: { 
            filter: { userId: "Nikhilesh" }, 
            update: { $set: { email: "nikhilesh.matta@sap.com" } } 
        } 
    },
    { 
        updateOne: { 
            filter: { userId: "Kavitha Borra" }, 
            update: { $set: { email: "test@sample.org" } } 
        } 
    }
    ]);

# User Update Query
    db.users.bulkWrite([
    { updateOne: { filter: { userId: "Vishal" }, update: { $set: { email: "vishal.angirekula@sap.com" } } } },
    { updateOne: { filter: { userId: "Sunil" }, update: { $set: { email: "sunil.badugu@sap.com" } } } },
    { updateOne: { filter: { userId: "chandra" }, update: { $set: { email: "chandra.sekhar.bejugam@sap.com" } } } },
    { updateOne: { filter: { userId: "Ramya" }, update: { $set: { email: "ramya.bommana@sap.com" } } } },
    { updateOne: { filter: { userId: "Prashamsa" }, update: { $set: { email: "prashamsa.sagam@sap.com" } } } },
    { updateOne: { filter: { userId: "Preeti" }, update: { $set: { email: "preethi.balijepally.chellai@sap.com" } } } },
    { updateOne: { filter: { userId: "Paramesh" }, update: { $set: { email: "paramesh.adama@sap.com" } } } },
    { updateOne: { filter: { userId: "Ramesh" }, update: { $set: { email: "ramesh.korlakunta@sap.com" } } } },
    { updateOne: { filter: { userId: "Santosh" }, update: { $set: { email: "santosh.sulege@sap.com" } } } },
    { updateOne: { filter: { userId: "Satya" }, update: { $set: { email: "satya.pavan.kumar.rajit.kommoju@sap.com" } } } },
    { updateOne: { filter: { userId: "Naresh Gara" }, update: { $set: { email: "naresh.kumar.gara@sap.com" } } } },
    { updateOne: { filter: { userId: "Naresh Sapavat" }, update: { $set: { email: "n.sapavat@sap.com" } } } },
    { updateOne: { filter: { userId: "Raghu Paniker" }, update: { $set: { email: "raghu.s.panicker@sap.com" } } } },
    { updateOne: { filter: { userId: "Sandeep" }, update: { $set: { email: "sandeep.harinarthini@sap.com" } } } },
    { updateOne: { filter: { userId: "Shiva Bharghava" }, update: { $set: { email: "shiva.bharghava.rachamalla@sap.com" } } } },
    { updateOne: { filter: { userId: "Bhanu" }, update: { $set: { email: "bhanu.komerally@sap.com" } } } },
    { updateOne: { filter: { userId: "Peddiraju" }, update: { $set: { email: "peddiraju.dadi@sap.com" } } } },
    { updateOne: { filter: { userId: "Nikhilesh" }, update: { $set: { email: "nikhilesh.matta@sap.com" } } } },
    { updateOne: { filter: { userId: "Kavitha Borra" }, update: { $set: { email: "kavitha.borra@sap.com" } } } }
    ]);


    
