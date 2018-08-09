let express = require('express');
let mongojs = require('mongojs');
let db = mongojs('mongodb://papapin777:papapin777@ds027425.mlab.com:27425/mytasklist', ['tasks']);


let router = express.Router();

//get all tasks
router.get('/tasks', function (req, res, next) {
    db.tasks.find(function(err, tasks){
        if(err){
            res.send(err);
        } else {
            res.json(tasks)
        }
    });
})

//get task
router.get('/task/:id', function (req, res, next) {
    db.tasks.findOne({_id: mongojs.ObjectId(req.params.id)},function (err, task) {
        if (err) {
            res.send(err);
        } else {
            res.json(task)
        }
    });
})


//save task
router.post('/task',(req, res, next)=>{
    let task = req.body;
    if(!task.title || (task.isDone + '')){
        res.status(400);
        res.json({
            "error": "bad data"
        })
    } else {
        db.tasks.save(task, (err, task)=>{
            if(err){
                res.send(err);
            }else{
                res.json(task)
            }
        });
    }
});


//delete tesk

router.delete('/task/:id', function (req, res, next) {
    db.tasks.remove({ _id: mongojs.ObjectId(req.params.id) }, function (err, task) {
        if (err) {
            res.send(err);
        } else {
            res.json(task)
        }
    });
})

//update task

router.put('/task/:id', function (req, res, next) {

    let task = req.body;
    let updTask = { };

    if(task.isDone){
        updTask.isDone = task.isDone;
    }

    if (task.title) {
        updTask.title = task.title;
    }

    if (!updTask) {
       res.status(400);
       res.json({
           "error":"Bad data"
       })
    } else {

        db.tasks.update({ _id: mongojs.ObjectId(req.params.id) },updTask , { }, function (err, task) {
            if (err) {
                res.send(err);
            } else {
                res.json(task)
            }
        });
    }



    
})




module.exports =  router;