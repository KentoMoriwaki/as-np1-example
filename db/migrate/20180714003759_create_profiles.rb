class CreateProfiles < ActiveRecord::Migration[5.2]
  def change
    create_table :profiles do |t|
      t.belongs_to :user
      t.text :introduction
      t.belongs_to :cover_post
      t.timestamps
    end
  end
end
