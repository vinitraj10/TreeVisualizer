import {SET_DATA,RESET} from '../actions/types';

const initialstate = {
	data:{
        name: "34",
        children: [
          {
            name: "92"
          },
          {
            name: "23",
            children: [
              {
                name: "04",
                children: [
                  {
                    name: "09"
                  },
                  { name: "16" }
                ]
              },
              {
                name: "12"
              }
            ]
          }
        ]
  	},
}

export default function(state=initialstate,action){
	switch(action.type){
		case SET_DATA:
			return {...state,data:action.payload}
			break;
    case RESET:
      return {...state,data:{
              name: "34",
              children: [
                {
                  name: "92"
                },
                {
                  name: "23",
                  children: [
                    {
                      name: "04",
                      children: [
                        {   
                          name: "09"
                        },
                        { name: "16" }
                      ]
                    },
                    {
                      name: "12"
                    }
                  ]
                }
              ]
          },
      };
	}
	return state;
}