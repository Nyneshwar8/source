let company = ["abc", "xyz", true, 20];
let companyList = [
  {
    name: 'Baap comapany',
    address: {
      place: "paregoan"
    }
  },
   
  {
    name: 'Infosis',
    address: {
      place: "pune"
    }
  },
  {
    name: 'Wipro',
    address: {
      place: "thane"
    }
  },
]
// console.log('checking the list of companies',companyList[0].name)
companyList.map((company)=>{
  // console.log(company.name,company.address.place)
  if(company.address.place == 'Pune'){
    // console.log('I am in baap comany campus')
  }else if(company.address.place == 'paregoan'){
    // console.log('your not in company campus ')
  }else{
// console.log('heyyyy')
  }
})