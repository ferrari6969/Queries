# Queries


First create a Database with name "Shoutout"

# first Query:

db.users.insertMany([
    {
        _id: ObjectId("67506b995b8d2c697ce4085e"),
        userId: "u12345",
        name: "John Doe",
        dateOfBirth: ISODate("2024-12-08T00:00:00.000Z"),
        dateOfJoining: ISODate("2020-06-15T00:00:00.000Z"),
        __v: 0,
        avatarId: "avatar2"
    },
    {
        _id: ObjectId("67554347986cb64a48982540"),
        userId: "U001",
        name: "Alice Johnson",
        dateOfBirth: ISODate("1990-12-08T00:00:00.000Z"),
        dateOfJoining: ISODate("2020-01-10T00:00:00.000Z"),
        avatarId: "avatar1"
    },
    {
        _id: ObjectId("67554347986cb64a48982541"),
        userId: "U002",
        name: "Bob Smith",
        dateOfBirth: ISODate("1985-12-08T00:00:00.000Z"),
        dateOfJoining: ISODate("2019-06-15T00:00:00.000Z"),
        avatarId: "avatar2"
    },
    {
        _id: ObjectId("67554347986cb64a48982542"),
        userId: "U003",
        name: "Charlie Brown",
        dateOfBirth: ISODate("1992-12-09T00:00:00.000Z"),
        dateOfJoining: ISODate("2021-03-20T00:00:00.000Z"),
        avatarId: "avatar3"
    },
    {
        _id: ObjectId("67554347986cb64a48982543"),
        userId: "U004",
        name: "Diana Prince",
        dateOfBirth: ISODate("1988-12-09T00:00:00.000Z"),
        dateOfJoining: ISODate("2018-09-25T00:00:00.000Z"),
        avatarId: "avatar4"
    },
    {
        _id: ObjectId("67554347986cb64a48982544"),
        userId: "U005",
        name: "Edward Cullen",
        dateOfBirth: ISODate("1993-12-09T00:00:00.000Z"),
        dateOfJoining: ISODate("2022-07-30T00:00:00.000Z"),
        avatarId: "avatar5"
    },
    {
        _id: ObjectId("67554347986cb64a48982545"),
        userId: "U006",
        name: "Fiona Apple",
        dateOfBirth: ISODate("1991-12-09T00:00:00.000Z"),
        dateOfJoining: ISODate("2021-05-01T00:00:00.000Z"),
        avatarId: "avatar6"
    },
    {
        _id: ObjectId("67554347986cb64a48982546"),
        userId: "U007",
        name: "George Baker",
        dateOfBirth: ISODate("1989-01-14T00:00:00.000Z"),
        dateOfJoining: ISODate("2017-12-12T00:00:00.000Z"),
        avatarId: "avatar7"
    },
    {
        _id: ObjectId("67554347986cb64a48982547"),
        userId: "U008",
        name: "Hannah Montana",
        dateOfBirth: ISODate("1994-04-09T00:00:00.000Z"),
        dateOfJoining: ISODate("2023-03-14T00:00:00.000Z"),
        avatarId: "avatar8"
    },
    {
        _id: ObjectId("67554347986cb64a48982548"),
        userId: "U009",
        name: "Ian Wright",
        dateOfBirth: ISODate("1990-09-30T00:00:00.000Z"),
        dateOfJoining: ISODate("2020-08-19T00:00:00.000Z"),
        avatarId: "avatar8"
    },
    {
        _id: ObjectId("67554347986cb64a48982549"),
        userId: "U010",
        name: "Jenny Lee",
        dateOfBirth: ISODate("1987-06-11T00:00:00.000Z"),
        dateOfJoining: ISODate("2016-11-20T00:00:00.000Z"),
        avatarId: "avatar6"
    }
]);


# second Query

db.birthdays.insertMany([
    {
        _id: ObjectId("675539921d49ffc1ad622df8"),
        bdId: "bd_u12345_2024",
        name: "John Doe",
        dateOfBirth: ISODate("2024-12-08T06:15:46.860Z"),
        comments: [
            {
                content: "Happy Birthday, John!",
                author: "Admin",
                userId: "u12345",
                _id: ObjectId("675539ab1d49ffc1ad622dfb"),
                commentId: "cmt_1733638571770_L1qqhW",
                date: ISODate("2024-12-08T06:16:11.776Z")
            },
            {
                content: "hello",
                author: "John Doe",
                userId: "u12345",
                _id: ObjectId("67553a571d49ffc1ad622e03"),
                commentId: "cmt_1733638743623_UgZLxi",
                date: ISODate("2024-12-08T06:19:03.623Z")
            }
        ],
        __v: 2
    },
    {
        _id: ObjectId("675543761d49ffc1ad622e0f"),
        bdId: "bd_U001_2024",
        name: "Alice Johnson",
        dateOfBirth: ISODate("2024-12-08T06:57:58.429Z"),
        comments: [],
        __v: 0
    },
    {
        _id: ObjectId("675543761d49ffc1ad622e0e"),
        bdId: "bd_u12345_2024",
        name: "John Doe",
        dateOfBirth: ISODate("2024-12-08T06:57:58.428Z"),
        comments: [],
        __v: 0
    },
    {
        _id: ObjectId("675543761d49ffc1ad622e10"),
        bdId: "bd_U002_2024",
        name: "Bob Smith",
        dateOfBirth: ISODate("2024-12-08T06:57:58.429Z"),
        comments: [],
        __v: 0
    }
]);
