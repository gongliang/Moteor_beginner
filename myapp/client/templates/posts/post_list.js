// var postsData = [
//     {
//         title: 'Introducing Telescope',
//         url: 'http://sachagreif.com/introducing-telescope/'
//     },
//     {
//         title: 'Meteor',
//         url: 'http://meteor.com'
//     },
//     {
//         title: 'The Meteor Book',
//         url: 'http://themeteorbook.com'
//     },
//     {
//         title: '百度',
//         url: 'http:/baidu.com/'
//     },
//     {
//         title: '芒果tv',
//         url: 'http://mgtv.com'
//     },
//     {
//         title: '凤凰网',
//         url: 'http://ifeng.com'
//     }
// ];
Template.postsList.helpers({
    // posts: postsData
    posts: function () {
        return Posts.find({}, {sort: {submitted: -1}});
    }
});