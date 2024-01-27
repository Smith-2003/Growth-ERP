function togglesidelist(){
    document.getElementById("sidelist").classList.toggle("isHidden");
}

pgname =document.getElementById("page-name");
function showdashboard(){
    pgname.textContent = "DASHBOARD";
    togglesidelist();
}
function showcrm(){
    pgname.textContent = "CRM";
    togglesidelist();
}
function showcontacts(){
    pgname.textContent = "CONTACTS";
    togglesidelist();
}
function showinventory(){
    pgname.textContent = "INVENTORY";
    togglesidelist();
}
function showsales(){
    pgname.textContent = "SALES";
    togglesidelist();
}
function showpurchase(){
    pgname.textContent = "PURCHASE";
    togglesidelist();
}
function showproduction(){
    pgname.textContent = "PRODUCTION";
    togglesidelist();
}
function showlogistics(){
    pgname.textContent = "LOGISTICS";
    togglesidelist();
}
function showaccounts(){
    pgname.textContent = "ACCOUNTS";
    togglesidelist();
}
function showcampaign(){
    pgname.textContent = "CAMPAIGN";
    togglesidelist();
}
function showreports(){
    pgname.textContent = "REPORTS";
    togglesidelist();
}