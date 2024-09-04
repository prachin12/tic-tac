

    //creating a 2d array for the gameboard
    let board=[];

    //win scenarios
    let win=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];


    let trigger=0;
    let count;

    //game inizialization
    const init = ()=>{
        for(let i=0;i<9;i++)
        {
            board[i]=0;
        }
        trigger=0;
        count=0;
        resetBoard();
    }
     // reset the board's DOM elements and remove any existing event listeners
     const resetBoard = () => {
        let columns = document.querySelectorAll('.column');
        columns.forEach(column => {
            column.removeEventListener('click', player); // Remove event listener
            column.innerText = ""; // Clear text
        });
        dom(); // Re-add event listeners
    }


    //selecting from dom
    const dom=()=>{
        let column=document.querySelectorAll('.column');
        addlistener(column);
    }

    const addlistener=(column)=>{
      let id=0;
      column.forEach(column => {  
        //adding id
        column.id=id;
        id++;
        column.innerText="";

        //adding event listener to every column
        column.addEventListener('click',()=>{
            player(column);
        });

      });
    }

    //player logics
    const player=(column)=>{
        let index=column.id;
        if(board[index]==0)
        {   
        count++;
            if(trigger==0)
                {
                    board[index]=1;
                    trigger=1;
                    column.innerText='X';
                }
            else
            {
                board[index]=2;
                trigger=0;
                column.innerText='O'
            }
        }
        //check winner
        if(count>4){
            let re=wincheck();
            if(re==1){
                console.log('x won')
                playagain();
            }
            else if(re==2){
                console.log('O won');
                playagain();
            }
            else if(count===9){
                console.log('draw');
                playagain();
               
            }
        }
    }

    const wincheck=()=>{
        let xcount,ocount;
        for(let i=0;i<=7;i++){
            xcount=0;
            ocount=0;
            for(let j=0;j<=2;j++)
            {
                if(board[win[i][j]]==1){
                    xcount+=1;
                }
                else if(board[win[i][j]]==2){
                    ocount+=1;
                }
            }
            if(xcount==3){
                console.log("x won");
                return 1;
            }
            else if(ocount==3){
                console.log("o won");
                return 2;
            }
        }
        
    }
    
    const playagain=()=>{
        
    // Reset game state
    init();
    }
    init();

