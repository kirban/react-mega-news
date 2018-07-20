export default function updateNews (){
    var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=330aba15643547cfa7212c01fb7f664f';
        var req = new Request(url);
        fetch(req)
            .then(function(response) {
                console.log(response.headers.get('Content-Type')); // application/json; charset=utf-8
                console.log(response.status); // 200
                return response.json();
            })
            .then(function(res){
                return res.articles;     //вот тут надо как-то передать в редьюсер массив новостей  
            })
}