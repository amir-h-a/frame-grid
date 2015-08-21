(function () {

    angular.module('aha.ng.demo.controllers',[]);

    angular.module('aha.ng.demo.controllers')
        .controller('dateCtrl',['$scope',dateCtrl])
        .controller('personCtrl',['$scope',personCtrl])
        .controller('cityCtrl',['$scope',cityCtrl]);



    function dateCtrl($scope){

        $scope.time = {
            now: new Date()
        };
        var updateClock = function(){
            $scope.time.now = new Date();
        };
        setInterval(function(){
            $scope.$apply(updateClock);
        },1000);


    }

    function personCtrl($scope){

        var persons = [];
        persons.push({name:'Aaron, Hank',phone:'123712938',addr:'tehran'});
        persons.push({name:'Rumbold, Richard',phone:'123712938',addr:'tehran'});
        persons.push({name:'Benn, Tony',phone:'123712938',addr:'tehran'});
        persons.push({name:'Berio, Luciano',phone:'123712938',addr:'tehran'});
        persons.push({name:'Adams, John',phone:'123712938',addr:'tehran'});
        persons.push({name:'Blair, Tony',phone:'123712938',addr:'tehran'});
        persons.push({name:'Chicago, Judy',phone:'123712938',addr:'tehran'});
        persons.push({name:'Palin, Michael',phone:'123712938',addr:'tehran'});
        persons.push({name:'Collett, Camilla',phone:'123712938',addr:'tehran'});
        persons.push({name:'Young, Edward',phone:'123712938',addr:'tehran'});
        persons.push({name:'Zola, Emile',phone:'123712938',addr:'tehran'});
        persons.push({name:'Aaron, Hank',phone:'123712938',addr:'tehran'});
        persons.push({name:'Rumbold, Richard',phone:'123712938',addr:'tehran'});
        persons.push({name:'Benn, Tony',phone:'123712938',addr:'tehran'});
        persons.push({name:'Berio, Luciano',phone:'123712938',addr:'tehran'});
        persons.push({name:'Adams, John',phone:'123712938',addr:'tehran'});
        persons.push({name:'Blair, Tony',phone:'123712938',addr:'tehran'});
        persons.push({name:'Chicago, Judy',phone:'123712938',addr:'tehran'});
        persons.push({name:'Palin, Michael',phone:'123712938',addr:'tehran'});
        persons.push({name:'Collett, Camilla',phone:'123712938',addr:'tehran'});
        persons.push({name:'Young, Edward',phone:'123712938',addr:'tehran'});
        persons.push({name:'Zola, Emile',phone:'123712938',addr:'tehran'});
        persons.push({name:'Aaron, Hank',phone:'123712938',addr:'tehran'});
        persons.push({name:'Rumbold, Richard',phone:'123712938',addr:'tehran'});
        persons.push({name:'Benn, Tony',phone:'123712938',addr:'tehran'});
        persons.push({name:'Berio, Luciano',phone:'123712938',addr:'tehran'});
        persons.push({name:'Adams, John',phone:'123712938',addr:'tehran'});
        persons.push({name:'Blair, Tony',phone:'123712938',addr:'tehran'});
        persons.push({name:'Chicago, Judy',phone:'123712938',addr:'tehran'});
        persons.push({name:'Palin, Michael',phone:'123712938',addr:'tehran'});
        persons.push({name:'Collett, Camilla',phone:'123712938',addr:'tehran'});
        persons.push({name:'Young, Edward',phone:'123712938',addr:'tehran'});
        persons.push({name:'Zola, Emile',phone:'123712938',addr:'tehran'});
        persons.push({name:'Adams, John',phone:'123712938',addr:'tehran'});
        persons.push({name:'Blair, Tony',phone:'123712938',addr:'tehran'});
        persons.push({name:'Chicago, Judy',phone:'123712938',addr:'tehran'});
        persons.push({name:'Palin, Michael',phone:'123712938',addr:'tehran'});
        persons.push({name:'Aaron, Hank',phone:'123712938',addr:'tehran'});
        persons.push({name:'Rumbold, Richard',phone:'123712938',addr:'tehran'});
        persons.push({name:'Benn, Tony',phone:'123712938',addr:'tehran'});
        persons.push({name:'Berio, Luciano',phone:'123712938',addr:'tehran'});
        persons.push({name:'Adams, John',phone:'123712938',addr:'tehran'});
        persons.push({name:'Blair, Tony',phone:'123712938',addr:'tehran'});
        persons.push({name:'Chicago, Judy',phone:'123712938',addr:'tehran'});
        persons.push({name:'Palin, Michael',phone:'123712938',addr:'tehran'});
        persons.push({name:'Collett, Camilla',phone:'123712938',addr:'tehran'});
        persons.push({name:'Young, Edward',phone:'123712938',addr:'tehran'});
        persons.push({name:'Zola, Emile',phone:'123712938',addr:'tehran'});

        $scope.persons = persons;
    }

    function cityCtrl($scope){

        var cities = [];
//        cities.push({name:'New York',state:'New York',population :'8,491,079'});
//        cities.push({name:'Los Angeles',state:'California',population :'3,928,864'});
//        cities.push({name:'Chicago',state:'Illinois',population :'2,722,389'});
//        cities.push({name:'Houston',state:'Texas',population :'2,239,558'});
//        cities.push({name:'Philadelphia',state:'Pennsylvania',population :'1,560,297'});
//        cities.push({name:'Phoenix',state:'Arizona',population :'1,537,058'});
//        cities.push({name:'San Antonio',state:'Texas',population :'1,436,697'});
//        cities.push({name:'Dallas',state:'Texas',population :'1,281,047'});
//        cities.push({name:'Austin',state:'Texas',population :'912,791'});
//        cities.push({name:'El Paso',state:'Texas',population :'679,036'});
//        cities.push({name:'New York',state:'New York',population :'8,491,079'});
//        cities.push({name:'Los Angeles',state:'California',population :'3,928,864'});
//        cities.push({name:'Chicago',state:'Illinois',population :'2,722,389'});
//        cities.push({name:'Houston',state:'Texas',population :'2,239,558'});
//        cities.push({name:'Philadelphia',state:'Pennsylvania',population :'1,560,297'});
//        cities.push({name:'Phoenix',state:'Arizona',population :'1,537,058'});
//        cities.push({name:'San Antonio',state:'Texas',population :'1,436,697'});
//        cities.push({name:'Dallas',state:'Texas',population :'1,281,047'});
//        cities.push({name:'Austin',state:'Texas',population :'912,791'});
//        cities.push({name:'El Paso',state:'Texas',population :'679,036'});
//        cities.push({name:'Dallas',state:'Texas',population :'1,281,047'});
//        cities.push({name:'Austin',state:'Texas',population :'912,791'});
//        cities.push({name:'El Paso',state:'Texas',population :'679,036'});

        cities.push({name:'1',state:'New York',population :8491079});
        cities.push({name:'2',state:'California',population :3928864});
        cities.push({name:'3',state:'Illinois',population :2722389});
        cities.push({name:'4',state:'Texas',population :2239558});
        cities.push({name:'5',state:'Pennsylvania',population :1560297});
        cities.push({name:'6',state:'Arizona',population :1537058});
        cities.push({name:'7',state:'Texas',population :1436697});
        cities.push({name:'8',state:'Texas',population :1281047});
        cities.push({name:'9',state:'Texas',population :912791});
        cities.push({name:'10',state:'Texas',population :679036});
        cities.push({name:'11',state:'New York',population :8491079});
        cities.push({name:'12',state:'California',population :3928864});
        cities.push({name:'13',state:'Illinois',population :2722389});
        cities.push({name:'14',state:'Texas',population :2239558});
        cities.push({name:'15',state:'Pennsylvania',population :1560297});
        cities.push({name:'16',state:'Arizona',population :1537058});
        cities.push({name:'17',state:'Texas',population :1436697});
        cities.push({name:'18',state:'Texas',population :1281047});
        cities.push({name:'19',state:'Texas',population :912791});
        cities.push({name:'20',state:'Texas',population :679036});
        cities.push({name:'21',state:'Texas',population :1281047});
        cities.push({name:'22',state:'Texas',population :912791});
        cities.push({name:'23',state:'Texas',population :679036});

//        cities.push({name:'1',state:'New York',population :'8,491,079'});
//        cities.push({name:'2',state:'California',population :'3,928,864'});
//        cities.push({name:'3',state:'Illinois',population :'2,722,389'});
//        cities.push({name:'4',state:'Texas',population :'2,239,558'});
//        cities.push({name:'5',state:'Pennsylvania',population :'1,560,297'});
//        cities.push({name:'6',state:'Arizona',population :'1,537,058'});
//        cities.push({name:'7',state:'Texas',population :'1,436,697'});
//        cities.push({name:'8',state:'Texas',population :'1,281,047'});
//        cities.push({name:'9',state:'Texas',population :'912,791'});
//        cities.push({name:'10',state:'Texas',population :'679,036'});
//        cities.push({name:'11',state:'New York',population :'8,491,079'});
//        cities.push({name:'12',state:'California',population :'3,928,864'});
//        cities.push({name:'13',state:'Illinois',population :'2,722,389'});
//        cities.push({name:'14',state:'Texas',population :'2,239,558'});
//        cities.push({name:'15',state:'Pennsylvania',population :'1,560,297'});
//        cities.push({name:'16',state:'Arizona',population :'1,537,058'});
//        cities.push({name:'17',state:'Texas',population :'1,436,697'});
//        cities.push({name:'18',state:'Texas',population :'1,281,047'});
//        cities.push({name:'19',state:'Texas',population :'912,791'});
//        cities.push({name:'20',state:'Texas',population :'679,036'});
//        cities.push({name:'21',state:'Texas',population :'1,281,047'});
//        cities.push({name:'22',state:'Texas',population :'912,791'});
//        cities.push({name:'23',state:'Texas',population :'679,036'});

        $scope.cities = cities;
    }

}());
