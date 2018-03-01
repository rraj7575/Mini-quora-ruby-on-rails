$('[id*="follow-"]').click(function(e){
    e.preventDefault()
    var following_id = (this.id).substring('follow-'.length)
    $.ajax({
        url: '/follow_a_user',
        type: 'get',
        datatype: 'json',
        data: {	"following_id": following_id},
        success: function(response){
            if (response['status'] === true){
                var show_following_div = 'unfollowed-' + following_id
                $('#' + show_following_div).show()
                var show_follow_div = 'follow-' + following_id
                $('#' + show_follow_div).hide()
                $('#follower_count').html(response['follower_count'])
                alert('hello')
//                    $('#follower_count_in_feed').html('Followers' + ' ' + response['follower_count'])
//                    var older_id = 'follow-' + following_id
//                    var newer_id = 'unfollowed-' + following_id
//                    debugger
//                    $('#' + older_id).attr('id', newer_id);
            }
        }
    }).error(function(){
        alert("something went wrong")
    })
})

$('[id*="unfollowed-"]').click(function(e){
    e.preventDefault()

    var unfollowed_id = (this.id).substring('unfollowed-'.length)
    $.ajax({
        url: '/unfollow_a_user',
        type: 'get',
        datatype: 'json',
        data: {	"unfollowed_id": unfollowed_id},
        success: function(response){
            if (response['status'] === true){
                var show_following_div = 'unfollowed-' + unfollowed_id
                $('#' + show_following_div).hide()
                var show_follow_div = 'follow-' + unfollowed_id
                $('#' + show_follow_div).show()
                $('#follower_count_if_u_followed').html(response['follower_count'])
//                    $('#follower_count_in_feed').html('Followers' + ' ' + response['follower_count'])

//                    var older_id = 'unfollowed-' + following_id
//                    var newer_id = 'follow-' + following_id
//                    debugger
//                    $('#' + older_id).attr('id', newer_id);

            }
        }
    }).error(function(){
        alert("something went wrong")
    })
})
;
