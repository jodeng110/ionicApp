/**
 * Created by kimsuho on 15. 7. 25..
 */
(function(app){
    "use strict";
    app.controller('StoryCtrl', ['$scope', '$ionicPopup', '$timeout', '$window', 'Keyboard', 'Toast', function($scope, $ionicPopup, $timeout, $window, Keyboard, Toast){
        $scope.story = [
            {
                profile : {
                    name : '아이유',
                    userImage : 'http://cfile27.uf.tistory.com/original/254ABF4C53A2E1E51E668F'
                },
                content : {
                    date : new Date(2015, 8, 29, 21, 30, 30),
                    description : '안녕하세요. 아이유입니다. 암인마드림~~~~~',
                    image : 'http://i1.ruliweb.daumcdn.net/uf/original/U01/ruliweb/54D0EA6F401D6C002F',
                    like : 1,
                    comments : 5,
                    isLike : false
                }
            },
            {
                profile : {
                    name : '한지민',
                    userImage : 'http://static-a-timetree.zumst.com/cache/images/530x/?http%3A%2F%2Ftimetree.zumst.com%2F2014%2F06%2F09%2F10%2Fab3be0ecb00c44398d3f0814bd46f757.jpeg'
                },
                content : {
                    date : new Date(2015, 8, 26, 10, 30),
                    description : '저의 일상 입니다.',
                    image : 'http://cfile2.uf.tistory.com/original/181E82534DF702942C713A',
                    like : 2,
                    comments : 3,
                    isLike : false
                }
            },
            {
                profile : {
                    name : '김지숙',
                    userImage : 'http://www.etorrent.co.kr/data/mw.cheditor/130608/094d8470a941d97f21fa4af6f7674110_pPPeUfL4FQ9xbbAAgZtTn2lthGDl3.jpg'
                },
                content : {
                    date : new Date(2015, 8, 23, 15, 20),
                    description : '레인보우 멤버들과 함께',
                    image : 'http://fimg2.pann.com/new/download.jsp?FileID=30388395',
                    like : 5,
                    comments : 4,
                    isLike : false
                }
            }
        ];



        $scope.like = function(s){
            s.content.like += s.content.isLike ? -1 : 1;
            s.content.isLike = !s.content.isLike;
        };
        $scope.isLike = function(index){
            return $scope.story[index].comments.isLike;
        };
        $scope.showReplyBox = function(s){
            $scope.data = {};
            var popup = $ionicPopup.show({
                template: '<input type="text" ng-model="data.reply">',
                title: '댓글을 입력하세요',
                subTitle: '욕은 하지말고',
                scope: $scope,
                buttons: [
                    { text: '취소' },
                    {
                        text: '<b>저장</b>',
                        type: 'button-positive',
                        onTap: function(e) {
                            if(!$scope.data.reply){
                                e.preventDefault();
                            }else{
                                return s;
                            }
                        }
                    }
                ]
            });
            popup.then(function(s){
                console.log(s);
                if(s){
                    s.content.comments += 1;
                }

            });
        };
        $scope.refresh = function(){
            $timeout(function(){
                $scope.story.unshift({
                    profile : {
                        name : '원빈',
                        userImage : 'http://cfile206.uf.daum.net/image/176BF3244C68E0585A83A9'
                    },
                    content : {
                        date : new Date(2015, 8, 20, 11, 50),
                        description : 'CG는 쓰지 않음요',
                        image : 'http://i.huffpost.com/gen/3014396/thumbs/o-DEFAULT-570.jpg?5',
                        like : 8,
                        comments : 15,
                        isLike : false
                    }
                });
            }, 1000);

            $scope.$broadcast('scroll.refreshComplete');
        };

        $window.a = $window.a || {};
        $window.a.$scope = $scope;
    }]);
}(app));


