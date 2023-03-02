import api from '../config/axios'

export const createBot = async (): Promise<any> => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS'
  }
  try {
    const response = await api.post('recipes',{
            'recipe': {
                'name': 'Create Jira tickets from Google Sheet - New',
                'config': '[{"keyword":"application","name":"google_sheets","provider":"google_sheets","skip_validation":false,"account_id":1751132},{"keyword":"application","name":"jira","provider":"jira","skip_validation":false,"account_id":1751663},{"keyword":"application","name":"clock","provider":"clock","skip_validation":false,"account_id":null}]',
                'code': '{"number":0,"provider":"clock","name":"scheduled_event","as":"timer","title":null,"description":"<span class=\\"provider\\">Trigger</span> on a <span class=\\"provider\\">specified schedule</span>","keyword":"trigger","dynamicPickListSelection":{},"toggleCfg":{},"input":{"time_unit":"minutes","trigger_every":"5"},"extended_input_schema":[{"control_type":"integer","default":"5","extends_schema":true,"hint":"Define repeating schedule. Enter whole numbers only.\\n            This field can be set to a minimum of 5 minutes.","label":"Trigger every","name":"trigger_every","optional":false,"type":"string"},{"control_type":"date_time","extends_schema":true,"hint":"Set date and time to start or leave blank to start immediately. <b>Once recipe has been run or tested, value cannot be changed.</b>","label":"Start after","name":"start_after","optional":true,"since_field":true,"type":"date_time","parse_output":"date_time_conversion","render_input":"date_time_conversion"}],"block":[{"number":1,"provider":"google_sheets","name":"get_row","as":"get_row","keyword":"trigger","dynamicPickListSelection":{},"toggleCfg":{},"input":{"sheet_name":"Sheet1","row_num":"1"},"extended_input_schema":[{"control_type":"integer","default":"1","extends_schema":true,"hint":"Enter the row number to retrieve data from. For example, 2 to retrieve data from row 2.","label":"Row Number","name":"row_num","optional":false,"type":"integer"},{"control_type":"text","default":"Sheet1","extends_schema":true,"hint":"Enter the name of the sheet to retrieve data from. For example, Sheet1.","label":"Sheet name","name":"sheet_name","optional":false,"type":"string"}],"uuid":"4b08d595-0021-4227-a0a0-a0aa6966fa35"},{"number":2,"provider":"jira","name":"create_ticket","as":"create_ticket","keyword":"action","dynamicPickListSelection":{},"toggleCfg":{},"input":{},"uuid":"cfb00d47-d7db-495c-a28f-027fc1237991"}],"uuid":"4ca02809-3319-40b8-84f2-6c038a5ffbc4"}',
                'folder_id': '2303308'
            }

        },
        {headers: headers}
    )
    if (response.data.success === false) throw response.data
    return response.data
  } catch (e: any) {
    throw e;
  }
}