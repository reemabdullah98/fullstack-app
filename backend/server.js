const express = require('express');
const cors = require('cors');
const app =express();
const PORT=5000;
app.use(cors());
app.get('/api',(req,res)=>{
    res.json({
        message:'Hellp from Express',
        status:'Connected'
    });
});
app.listen(PORT,()=>{
    console.log(`Backend Running on http://localhost:${PORT}`)
})