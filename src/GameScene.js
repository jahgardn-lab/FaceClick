class GameScene extends Phaser.Scene{
    constructor(){
        super("GameScene");

        this.bodyX = 400;
        this.bodyY = 350;

        this.smileX = this.bodyX;
        this.smileY = this.bodyY + 10;

        this.counter = 0;
        this.faceType = 'smile';
        this.bodyType = 'purple';

        this.pointer = null;
        //this.scoreText =null;
    }

    preload(){
        this.load.setPath("./assets/");

        this.load.image("purpleBodyCircle", "purple_body_circle.png");
        this.load.image("greenBodyRhombus", "green_body_rhombus.png");
        this.load.image("superSmiley", "face_smile_open_eye.png");
        this.load.image("frownFace", "face_frown_open_eye.png");
    }

    create(){
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "purpleBodyCircle").setInteractive({ draggable: true });;
        my.sprite.bodyGreen = this.add.sprite(this.bodyX, this.bodyY, "greenBodyRhomus").setInteractive({ draggable: true });;
        //my.sprite.body.setInterative();

        my.sprite.smile = this.add.sprite(this.smileX, this.smileY, "superSmiley").setInteractive({ draggable: true });
        my.sprite.frown = this.add.sprite(this.smileX, this.smileY, "frownFace").setInteractive({ draggable: true });

        my.sprite.frown.visible = false;
        my.sprite.bodyGreen.visible = false;

        this.pointer = this.input.activePointer;

       // this.text = this.add.text(0, 0, "score: " + this.counter, { fontSize: '32px' });
    }

    update(){
        my.sprite.body.on('pointerdown', function (pointer) {
            this.counter ++;
            //this.text.setText("score: " + this.counter);
            if(this.faceType == "smile"){
                my.sprite.smile.visible = false;
                my.sprite.frown.visible = true;
                this.faceType = "frown";
            }
            else{
                my.sprite.smile.visible = true;
                my.sprite.frown.visible = false;  
                this.faceType = "smile"; 
            }
        });

        my.sprite.smile.on('pointerdown', function (pointer) {
            this.counter ++;
            //this.text.setText("score: " + this.counter);
            if(this.faceType == "smile"){
                my.sprite.smile.visible = false;
                my.sprite.frown.visible = true;
                this.faceType = "frown";
            }
            else{
                my.sprite.smile.visible = true;
                my.sprite.frown.visible = false; 
                this.faceType = "smile";  
            }
        });

        my.sprite.frown.on('pointerdown', function (pointer) {
            this.counter ++;
            //this.text.setText("score: " + this.counter);
            if(this.faceType == "smile"){
                my.sprite.smile.visible = false;
                my.sprite.frown.visible = true;
                this.faceType = "frown";
            }
            else{
                my.sprite.smile.visible = true;
                my.sprite.frown.visible = false;  
                this.faceType = "smile"; 
            }
        });

        /*if(this.pointer.isDown){
             if(this.bodyType == "purple"){
                my.sprite.body.visible = false;
                my.sprite.bodyGreen.visible = true;
                this.bodyType = "green";
            }
            else{
                my.sprite.body.visible = true;
                my.sprite.bodyGreen.visible = false;
                this.bodyType = "purple"; 
            }

        }*/
    }
}