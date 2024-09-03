function gameboard(){

    //creating a 2d array for the gameboard
    let board=[];

    //win scenarios
    let win=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

    //game inizialization
    const init = ()=>{
        for(let i=0;i<9;i++){
            board[i]=0;
        }
        dom();
    }

    //selecting from dom
    const dom=()=>{
        let column=document.querySelectorAll('.column');
        addlistener(column);
        console.log(column);
    }

    const addlistener=(column)=>{
      let id=0;
      
      column.forEach(column => {  
        //adding id
        column.id=id;
        id++;

        //adding event listener to every column
      column.addEventListener('click',()=>{
            player(column);
        });

      });
    }

    //player logics
    const player=(column)=>{
        let index=column.id;
        let trigger=0;

        if(board[index]==0)
        {
            console.log("done");
            if(trigger==0)
                {
                    board[index]=1;
                    trigger=1;
                }
            else{
                board[index]=2;
                trigger=0;
            }
        }
        //check winner
        wincheck();
    }
    const wincheck=()=>{


    }

    init();

}
gameboard();
