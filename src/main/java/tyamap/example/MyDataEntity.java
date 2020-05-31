package tyamap.example;

import java.util.Date;
import java.util.Calendar;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class MyDataEntity {
    @Id
    @GeneratedValue
    private Integer id;

    private String name;
    private String mail;
    private String tel;
    private Date created = Calendar.getInstance().getTime();

    public MyDataEntity(){
        super();
    }

    public MyDataEntity(String name, String mail, String tel){
        super();
        this.name = name;
        this.mail = mail;
        this.tel = tel;
    }

    public Integer getId() {
        return id;
    }

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    public String getMail() {
        return mail;
    }
    public void setMail(String mail) {
        this.mail = mail;
    }

    public String getTel() {
        return tel;
    }
    public void setTel(String tel) {
        this.tel = tel;
    }

    public Date getCreated() {
        return created;
    }

    @Override
    public String toString() {
        return "{\n\tid: " + id + ",\n\tname: " + name + ",\n\tmail: "
            + mail + ",\n\ttel:" + tel + ",\n\tdate: " + created + "\n}";
    }
}