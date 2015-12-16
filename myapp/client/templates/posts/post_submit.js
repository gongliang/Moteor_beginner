Template.postSubmit.events({
	'submit form': function (e) {
		e.preventDefault();

		var post = {
			url: $(e.target).find('[name=url]').val(),
			title: $(e.target).find('[name=title]').val()
		};
		// 	post._id = Posts.insert(post);
		// 	Router.go('postPage', post);
		// }
		Meteor.call('postInsert', post, function (error, result) {
			// 显示错误信息并退出
			if (error)
				return alert(error.reason);
				
			if(result.postExists){
				alert('this link has already been posted(链接已经存在于数据库)')
			}
			Router.go('postPage', { _id: result._id });
		});
	}
});