console.log("=====");
console.log("=====");
console.log("=====");
console.log("ASSOCIATION START");
console.log("=====");
console.log("=====");
console.log("=====");

const Comment = require("./CommentModel")
const Event = require("./EventModel")
const Place = require("./PlaceModel")
const Sport = require("./SportModel")
const User = require("./UserModel")
const SportToUser= require("./RelSportToUser")
const SportToPlace= require("./RelSportToPlace")
const UserToEvent= require("./RelUserToEvent")

User.belongsToMany(Event, { through: UserToEvent });
User.belongsToMany(Sport, {through: SportToUser});
Event.belongsToMany(User, { through: UserToEvent });
Sport.belongsToMany(User, {through: SportToUser});
Sport.belongsToMany(Place, {through: SportToPlace});
Place.belongsToMany(Sport, {through: SportToPlace});

Comment.hasOne(User, { foreignKey: 'userid' });
User.belongsTo(Comment);
Comment.hasOne(Event, { foreignKey: 'eventid' });
Event.belongsTo(Comment);
Event.hasOne(User, { foreignKey: 'author' });
User.belongsTo(Event);
Event.hasOne(Sport, { foreignKey: 'sportid' });
Sport.belongsTo(Event);
Event.hasOne(Place, { foreignKey: 'placeid' });
Place.belongsTo(Event);

console.log("=====");
console.log("=====");
console.log("=====");
console.log("ASSOCIATION END");
console.log("=====");
console.log("=====");
console.log("=====");

// user.getPictures() // gets you all pictures
// user.getProfilePicture() // gets you only the profile picture

// User.findAll({
//   where: ...,
//   include: [
//     { model: Picture }, // load all pictures
//     { model: Picture, as: 'ProfilePicture' }, // load the profile picture.
//     // Notice that the spelling must be the exact same as the one in the association
//   ]
// })

// const amidala = await User.create({ username: 'p4dm3', points: 1000 });
// const queen = await Profile.create({ name: 'Queen' });
// await amidala.addProfile(queen, { through: { selfGranted: false } });
// const result = await User.findOne({
//   where: { username: 'p4dm3' },
//   include: Profile
// });
// console.log(result);

// const amidala = await User.create({
//     username: 'p4dm3',
//     points: 1000,
//     profiles: [{
//       name: 'Queen',
//       User_Profile: {
//         selfGranted: true
//       }
//     }]
//   }, {
//     include: Profile
//   });
//   const result = await User.findOne({
//     where: { username: 'p4dm3' },
//     include: Profile
//   });
//   console.log(result);

// User.findAll({
//     include: {
//       model: Grant,
//       include: Profile
//     }
//   });