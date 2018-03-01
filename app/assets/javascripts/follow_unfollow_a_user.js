
$(window).load( function () {


// $('[id*="follow-"]').click(function(e){
//     e.preventDefault()
//     var following_id = (this.id).substring('follow-'.length)
//     $.ajax({
//         url: '/follow_a_user',
//         type: 'get',
//         datatype: 'json',
//         data: {	"following_id": following_id},
//         success: function(response){
//             if (response['status'] === true){
//                 var show_following_div = 'unfollowed-' + following_id
//                 $('#' + show_following_div).show()
//                 var show_follow_div = 'follow-' + following_id
//                 $('#' + show_follow_div).hide()
//                 $('#follower_count_if_u_follow').html(response['follower_count'])
//
//             }
//         }
//     }).error(function(){
//         alert("something went wrong")
//     })
// })
//
// $('[id*="unfollowed-"]').click(function(e){
//     e.preventDefault()
//     var unfollowed_id = (this.id).substring('unfollowed-'.length)
//     $.ajax({
//         url: '/unfollow_a_user',
//         type: 'get',
//         datatype: 'json',
//         data: {	"unfollowed_id": unfollowed_id},
//         success: function(response){
//             if (response['status'] === true){
//                 var show_following_div = 'unfollowed-' + unfollowed_id
//                 $('#' + show_following_div).hide()
//                 var show_follow_div = 'follow-' + unfollowed_id
//                 $('#' + show_follow_div).show()
//                 $('#follower_count_if_u_followed_in_feed').html(response['follower_count'])
//                 $('#follower_count_in_feed').html(response['follower_count'])
//                 var older_id = 'unfollowed-' + following_id
//                 var newer_id = 'follow-' + following_id
//                 debugger
//                 $('#' + older_id).attr('id', newer_id);
//
//             }
//         }
//     }).error(function(){
//         alert("something went wrong")
//     })
// })

    // $('[id*="follow_in_feed-"]').click(function(e){
    //     e.preventDefault()
    //     var following_id = (this.id).substring('follow_in_feed-'.length)
    //     debugger
    //     $.ajax({
    //         url: '/follow_a_user',
    //         type: 'get',
    //         datatype: 'json',
    //         data: {	"following_id": following_id},
    //         success: function(response){
    //             if (response['status'] === true){
    //                 // var show_following_div = 'unfollowed_in_feed-' + following_id
    //                 // $('#' + show_following_div).show()
    //                 // var show_follow_div = 'follow_in_feed-' + following_id
    //                 // $('#' + show_follow_div).hide()
    //                 // $('#follower_count').    html(response['follower_count'])
    //                var older_span_id = 'follow_in_feed-' + following_id
    //                var newer_span_id = 'i_am_unfollowing_u-' + following_id
    //                var newer_class = 'following_btn'
    //                $('#' + older_span_id).attr('id', newer_span_id);
    //                $('#' + newer_span_id).attr('class', newer_class);
    //                 var older_follow_text = 'follow_text'
    //                 var newer_following_text = 'following_text'
    //                 $('#' + older_follow_text).attr('id',newer_following_text )
    //                 $('#' + newer_following_text).html('Following')
    //                 var older_follower_count_id = 'follower_count_if_u_followed_in_feed'
    //                 var newer_follower_count_id = 'follower_count_if_u_unfollowed_in_feed'
    //                 $('#' + older_follower_count_id).attr('id',newer_follower_count_id )
    //                 $('#' + newer_follower_count_id).html(response['follower_count'])
    //                // $('#follower_count_if_u_unfollow').html(response['follower_count'])
    //                $('#follower_count_in_user_menu').html('Followers' + ' ' + response['follower_count'])
    //
    //             }
    //         }
    //     }).error(function(){
    //         alert("something went wrong")
    //     })
    // })
    //
    // $('[id*="i_am_unfollowing_u-"]').click(function(e){
    //     debugger
    //     e.preventDefault()
    //     var unfollowed_id = (this.id).substring('i_am_unfollowing_u-'.length)
    //     debugger
    //     $.ajax({
    //         url: '/unfollow_a_user',
    //         type: 'get',
    //         datatype: 'json',
    //         data: {	"unfollowed_id": unfollowed_id},
    //         success: function(response){
    //             if (response['status'] === true){
    //                //  var show_following_div = 'unfollowed_in_feed-' + unfollowed_id
    //                //  $('#' + show_following_div).hide()
    //                //  var show_follow_div = 'follow_in_feed-' + unfollowed_id
    //                //  $('#' + show_follow_div).show()
    //                //  // $('#follower_count_if_u_unfollowed_in_feed').html(response['follower_count'])
    //                //  $('#follower_count_in_user_menu').html('Followers' + ' ' +response['follower_count'])
    //                //  // $('#follower_count_in_feed').html(response['follower_count'])
    //                //
    //                // var older_id = 'unfollowed-' + following_id
    //                // var newer_id = 'follow-' + following_id
    //                // debugger
    //                // $('#' + older_id).attr('id', newer_id);
    //
    //                 var older_span_id = 'i_am_unfollowing_u-' + unfollowed_id
    //                 var newer_span_id = 'follow_in_feed-' + unfollowed_id
    //                 var newer_class = 'follow_btn'
    //                 $('#' + older_span_id).attr('id', newer_span_id);
    //                 $('#' + newer_span_id).attr('class', newer_class);
    //                 var older_follow_text = 'following_text'
    //                 var newer_following_text = 'follow_text'
    //                 $('#' + older_follow_text).attr('id',newer_following_text )
    //                 $('#' + newer_following_text).html('Follow')
    //                 var older_follower_count_id = 'follower_count_if_u_unfollowed_in_feed'
    //                 var newer_follower_count_id = 'follower_count_if_u_followed_in_feed'
    //                 $('#' + older_follower_count_id).attr('id',newer_follower_count_id )
    //                 $('#' + newer_follower_count_id).html(response['follower_count'])
    //                 // $('#follower_count_if_u_unfollow').html(response['follower_count'])
    //                 $('#follower_count_in_user_menu').html('Followers' + ' ' + response['follower_count'])
    //
    //             }
    //         }
    //     }).error(function(){
    //         alert("something went wrong")
    //     })
    // })


    $('[id*="unfollowed-"]').click(function(e){
        e.preventDefault()
        if(this.id.search('unfollowed-') >= 0){
            var unfollowed_id = (this.id).substring('unfollowed-'.length)
            $.ajax({
                url: '/unfollow_a_user',
                type: 'get',
                datatype: 'json',
                data: {	"unfollowed_id": unfollowed_id},
                success: function(response){
                    if (response['status'] === true){
                        var older_span_id = 'unfollowed-' + unfollowed_id
                        var newer_span_id = 'follow-' + unfollowed_id
                        var newer_class = 'follow_btn'
                        $('#' + older_span_id).attr('id', newer_span_id);
                        $('#' + newer_span_id).attr('class', newer_class);
                        var older_follow_text = 'following_text_in_follower_menu-' + unfollowed_id
                        var newer_following_text = 'follow_text_in_follower_menu-' + unfollowed_id
                        $('#' + older_follow_text).attr('id',newer_following_text )
                        $('#' + newer_following_text).html('Follow')
                        var older_follower_count_id = 'follower_count_if_u_unfollow_in_follower_menu-' + unfollowed_id
                        var newer_follower_count_id = 'follower_count_if_u_follow_in_follower_menu-' + unfollowed_id
                        $('#' + older_follower_count_id).attr('id',newer_follower_count_id )
                        $('#' + newer_follower_count_id).html(response['follower_count'])
                        // $('#follower_count_in_user_menu').html('Followers' + ' ' + response['follower_count'])
                    }
                }
            }).error(function(){
                alert("something went wrong")
            })
        }
        else {

            var following_id = (this.id).substring('follow-'.length)
            $.ajax({
                url: '/follow_a_user',
                type: 'get',
                datatype: 'json',
                data: {	"following_id": following_id},
                success: function(response){
                    if (response['status'] === true){
                        var older_span_id = 'follow-' + following_id
                        var newer_span_id = 'unfollowed-' + following_id
                        var newer_class = 'following_btn'
                        $('#' + older_span_id).attr('id', newer_span_id);
                        $('#' + newer_span_id).attr('class', newer_class);
                        var older_follow_text = 'follow_text_in_follower_menu-' + following_id
                        var newer_following_text = 'following_text_in_follower_menu-' + following_id
                        $('#' + older_follow_text).attr('id',newer_following_text )
                        $('#' + newer_following_text).html('Following')
                        var older_follower_count_id = 'follower_count_if_u_follow_in_follower_menu-' + following_id
                        var newer_follower_count_id = 'follower_count_if_u_unfollow_in_follower_menu-' + following_id
                        $('#' + older_follower_count_id).attr('id',newer_follower_count_id )
                        $('#' + newer_follower_count_id).html(response['follower_count'])
                    }
                }
            }).error(function(){
                alert("something went wrong")
            })

        }

    })

    $('[id*="follow-"]').click(function(e){
        e.preventDefault()
        if(this.id.search('follow-') >= 0){
            var following_id = (this.id).substring('follow-'.length)
            $.ajax({
                url: '/follow_a_user',
                type: 'get',
                datatype: 'json',
                data: {	"following_id": following_id},
                success: function(response){
                    if (response['status'] === true){
                        var older_span_id = 'follow-' + following_id
                        var newer_span_id = 'unfollowed-' + following_id
                        var newer_class = 'following_btn'
                        $('#' + older_span_id).attr('id', newer_span_id);
                        $('#' + newer_span_id).attr('class', newer_class);
                        var older_follow_text = 'follow_text_in_follower_menu-' + following_id
                        var newer_following_text = 'following_text_in_follower_menu-' + following_id
                        $('#' + older_follow_text).attr('id',newer_following_text )
                        $('#' + newer_following_text).html('Following')
                        var older_follower_count_id = 'follower_count_if_u_follow_in_follower_menu-' + following_id
                        var newer_follower_count_id = 'follower_count_if_u_unfollow_in_follower_menu-' + following_id
                        $('#' + older_follower_count_id).attr('id',newer_follower_count_id )
                        $('#' + newer_follower_count_id).html(response['follower_count'])
                    }
                }
            }).error(function(){
                alert("something went wrong")
            })
        }
        else {

            var unfollowed_id = (this.id).substring('unfollowed-'.length)
            $.ajax({
                url: '/unfollow_a_user',
                type: 'get',
                datatype: 'json',
                data: {	"unfollowed_id": unfollowed_id},
                success: function(response){
                    if (response['status'] === true){
                        var older_span_id = 'unfollowed-' + unfollowed_id
                        var newer_span_id = 'follow-' + unfollowed_id
                        var newer_class = 'follow_btn'
                        $('#' + older_span_id).attr('id', newer_span_id);
                        $('#' + newer_span_id).attr('class', newer_class);
                        var older_follow_text = 'following_text_in_follower_menu-' + unfollowed_id
                        var newer_following_text = 'follow_text_in_follower_menu-' + unfollowed_id
                        $('#' + older_follow_text).attr('id',newer_following_text )
                        $('#' + newer_following_text).html('Follow')
                        var older_follower_count_id = 'follower_count_if_u_unfollow_in_follower_menu-' + unfollowed_id
                        var newer_follower_count_id = 'follower_count_if_u_follow_in_follower_menu-' + unfollowed_id
                        $('#' + older_follower_count_id).attr('id',newer_follower_count_id )
                        $('#' + newer_follower_count_id).html(response['follower_count'])
                    }
                }
            }).error(function(){
                alert("something went wrong")
            })

        }

    })




    // $('[id*="i_am_unfollowing_u-"]').click(function(e){
    //     debugger
    //     e.preventDefault()
    //     if(this.id.search('follow_in_feed-') >= 0){
    //         var following_id = (this.id).substring('follow_in_feed-'.length)
    //         $.ajax({
    //             url: '/follow_a_user',
    //             type: 'get',
    //             datatype: 'json',
    //             data: {	"following_id": following_id},
    //             success: function(response){
    //                 if (response['status'] === true){
    //                     // var show_following_div = 'unfollowed_in_feed-' + following_id
    //                     // $('#' + show_following_div).show()
    //                     // var show_follow_div = 'follow_in_feed-' + following_id
    //                     // $('#' + show_follow_div).hide()
    //                     // $('#follower_count').    html(response['follower_count'])
    //                     var older_span_id = 'follow_in_feed-' + following_id
    //                     var newer_span_id = 'i_am_unfollowing_u-' + following_id
    //                     var newer_class = 'following_btn'
    //                     $('#' + older_span_id).attr('id', newer_span_id);
    //                     $('#' + newer_span_id).attr('class', newer_class);
    //                     var older_follow_text = 'follow_text'
    //                     var newer_following_text = 'following_text'
    //                     $('#' + older_follow_text).attr('id',newer_following_text )
    //                     $('#' + newer_following_text).html('Following')
    //                     var older_follower_count_id = 'follower_count_if_u_followed_in_feed'
    //                     var newer_follower_count_id = 'follower_count_if_u_unfollowed_in_feed'
    //                     $('#' + older_follower_count_id).attr('id',newer_follower_count_id )
    //                     $('#' + newer_follower_count_id).html(response['follower_count'])
    //                     // $('#follower_count_if_u_unfollow').html(response['follower_count'])
    //                     $('#follower_count_in_user_menu').html('Followers' + ' ' + response['follower_count'])
    //
    //                 }
    //             }
    //         }).error(function(){
    //             alert("something went wrong")
    //         })
    //     }
    //     else {
    //
    //         var unfollowed_id = (this.id).substring('i_am_unfollowing_u-'.length)
    //         debugger
    //         $.ajax({
    //             url: '/unfollow_a_user',
    //             type: 'get',
    //             datatype: 'json',
    //             data: {	"unfollowed_id": unfollowed_id},
    //             success: function(response){
    //                 if (response['status'] === true){
    //                     //  var show_following_div = 'unfollowed_in_feed-' + unfollowed_id
    //                     //  $('#' + show_following_div).hide()
    //                     //  var show_follow_div = 'follow_in_feed-' + unfollowed_id
    //                     //  $('#' + show_follow_div).show()
    //                     //  // $('#follower_count_if_u_unfollowed_in_feed').html(response['follower_count'])
    //                     //  $('#follower_count_in_user_menu').html('Followers' + ' ' +response['follower_count'])
    //                     //  // $('#follower_count_in_feed').html(response['follower_count'])
    //                     //
    //                     // var older_id = 'unfollowed-' + following_id
    //                     // var newer_id = 'follow-' + following_id
    //                     // debugger
    //                     // $('#' + older_id).attr('id', newer_id);
    //
    //                     var older_span_id = 'i_am_unfollowing_u-' + unfollowed_id
    //                     var newer_span_id = 'follow_in_feed-' + unfollowed_id
    //                     var newer_class = 'follow_btn'
    //                     $('#' + older_span_id).attr('id', newer_span_id);
    //                     $('#' + newer_span_id).attr('class', newer_class);
    //                     var older_follow_text = 'following_text'
    //                     var newer_following_text = 'follow_text'
    //                     $('#' + older_follow_text).attr('id',newer_following_text )
    //                     $('#' + newer_following_text).html('Follow')
    //                     var older_follower_count_id = 'follower_count_if_u_unfollowed_in_feed'
    //                     var newer_follower_count_id = 'follower_count_if_u_followed_in_feed'
    //                     $('#' + older_follower_count_id).attr('id',newer_follower_count_id )
    //                     $('#' + newer_follower_count_id).html(response['follower_count'])
    //                     // $('#follower_count_if_u_unfollow').html(response['follower_count'])
    //                     $('#follower_count_in_user_menu').html('Followers' + ' ' + response['follower_count'])
    //
    //                 }
    //             }
    //         }).error(function(){
    //             alert("something went wrong")
    //         })
    //
    //     }
    //
    // })
    //
    // $('[id*="follow_in_feed-"]').click(function(e){
    //     debugger
    //     e.preventDefault()
    //     if(this.id.search('follow_in_feed-') >= 0){
    //         var following_id = (this.id).substring('follow_in_feed-'.length)
    //         $.ajax({
    //             url: '/follow_a_user',
    //             type: 'get',
    //             datatype: 'json',
    //             data: {	"following_id": following_id},
    //             success: function(response){
    //                 if (response['status'] === true){
    //                     // var show_following_div = 'unfollowed_in_feed-' + following_id
    //                     // $('#' + show_following_div).show()
    //                     // var show_follow_div = 'follow_in_feed-' + following_id
    //                     // $('#' + show_follow_div).hide()
    //                     // $('#follower_count').    html(response['follower_count'])
    //                     var older_span_id = 'follow_in_feed-' + following_id
    //                     var newer_span_id = 'i_am_unfollowing_u-' + following_id
    //                     var newer_class = 'following_btn'
    //                     $('#' + older_span_id).attr('id', newer_span_id);
    //                     $('#' + newer_span_id).attr('class', newer_class);
    //                     var older_follow_text = 'follow_text'
    //                     var newer_following_text = 'following_text'
    //                     $('#' + older_follow_text).attr('id',newer_following_text )
    //                     $('#' + newer_following_text).html('Following')
    //                     var older_follower_count_id = 'follower_count_if_u_followed_in_feed'
    //                     var newer_follower_count_id = 'follower_count_if_u_unfollowed_in_feed'
    //                     $('#' + older_follower_count_id).attr('id',newer_follower_count_id )
    //                     $('#' + newer_follower_count_id).html(response['follower_count'])
    //                     // $('#follower_count_if_u_unfollow').html(response['follower_count'])
    //                     $('#follower_count_in_user_menu').html('Followers' + ' ' + response['follower_count'])
    //
    //                 }
    //             }
    //         }).error(function(){
    //             alert("something went wrong")
    //         })
    //     }
    //     else {
    //
    //         var unfollowed_id = (this.id).substring('i_am_unfollowing_u-'.length)
    //         debugger
    //         $.ajax({
    //             url: '/unfollow_a_user',
    //             type: 'get',
    //             datatype: 'json',
    //             data: {	"unfollowed_id": unfollowed_id},
    //             success: function(response){
    //                 if (response['status'] === true){
    //                     //  var show_following_div = 'unfollowed_in_feed-' + unfollowed_id
    //                     //  $('#' + show_following_div).hide()
    //                     //  var show_follow_div = 'follow_in_feed-' + unfollowed_id
    //                     //  $('#' + show_follow_div).show()
    //                     //  // $('#follower_count_if_u_unfollowed_in_feed').html(response['follower_count'])
    //                     //  $('#follower_count_in_user_menu').html('Followers' + ' ' +response['follower_count'])
    //                     //  // $('#follower_count_in_feed').html(response['follower_count'])
    //                     //
    //                     // var older_id = 'unfollowed-' + following_id
    //                     // var newer_id = 'follow-' + following_id
    //                     // debugger
    //                     // $('#' + older_id).attr('id', newer_id);
    //
    //                     var older_span_id = 'i_am_unfollowing_u-' + unfollowed_id
    //                     var newer_span_id = 'follow_in_feed-' + unfollowed_id
    //                     var newer_class = 'follow_btn'
    //                     $('#' + older_span_id).attr('id', newer_span_id);
    //                     $('#' + newer_span_id).attr('class', newer_class);
    //                     var older_follow_text = 'following_text'
    //                     var newer_following_text = 'follow_text'
    //                     $('#' + older_follow_text).attr('id',newer_following_text )
    //                     $('#' + newer_following_text).html('Follow')
    //                     var older_follower_count_id = 'follower_count_if_u_unfollowed_in_feed'
    //                     var newer_follower_count_id = 'follower_count_if_u_followed_in_feed'
    //                     $('#' + older_follower_count_id).attr('id',newer_follower_count_id )
    //                     $('#' + newer_follower_count_id).html(response['follower_count'])
    //                     // $('#follower_count_if_u_unfollow').html(response['follower_count'])
    //                     $('#follower_count_in_user_menu').html('Followers' + ' ' + response['follower_count'])
    //
    //                 }
    //             }
    //         }).error(function(){
    //             alert("something went wrong")
    //         })
    //
    //     }
    //
    // })


})