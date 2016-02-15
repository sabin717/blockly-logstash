var xmlText='<xml xmlns="http://www.w3.org/1999/xhtml">'+
  '<block type="input_base" x="62" y="28">'+
  '<statement name="input">'+
   '<block type="input_file">'+
      '<field name="type"></field>'+
      '<field name="path"></field>'+
     ' <field name="start_position">end</field>'+
    '  <field name="sincedb_path"></field>'+
   ' </block>'+
 ' </statement>'+
  '<next>'+
   ' <block type="filter_base">'+
     ' <statement name="filters">'+
       ' <block type="csv">'+
        '  <field name="columns"> </field>'+
        '<block type="lists_create_with">'+
       ' <mutation items="3"></mutation>'+
      '</block>'+
        '  <field name="seperator"> </field>'+
       ' </block>'+
     ' </statement>'+
     ' <next>'+
      '<block type="output">'+
      '<statement name="output">'+
       '  <block type="elasticsearch">'+
        '  <statement name="elastic_search_inputs">'+
                '<block type="action">'+
                  '<field name="action">index</field>'+
                  '<next>'+
                   ' <block type="index">'+
                      '<field name="index"></field>'+
                      '<next>'+
                        '<block type="hosts">'+
                          '<field name="hosts"></field>'+
                        '</block>'+
                      '</next>'+
                   ' </block>'+
                  '</next>'+
                '</block>'+
              '</statement>'+
            '</block>'+
          '</statement>'+
        '</block>'+
      '</next>'+
    '</block>'+
  '</next>'+
'</block>'+
'</xml>'