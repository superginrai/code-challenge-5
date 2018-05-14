app.controller('MessageController', ['$http', function ($http) {
    console.log('Message Controller is doing it');

    let self = this;

    self.messages = { data: '' };

    self.listMessages = function () {
        console.log('here come the messages!!!')
        $http({
            method: 'GET',
            url: '/message'
        })
            .then(function (response) {
                console.log(response);
                self.messages.data = response.data;
            })
            .catch(function (error) {
                console.log('error on /message GET', error);
            });
    }

    self.addMessage = function (newMessage) {
        console.log('Add this message:', self.newMessage);
        $http({
            method: 'POST',
            url: '/message',
            data: newMessage
        })
            .then(function (response) {
                console.log('hoorah you got a message!', response);
                self.listMessages();
            })
            .catch(function (error) {
                console.log('error on /message POST', error);
            });
    }


    self.listMessages();

}]);