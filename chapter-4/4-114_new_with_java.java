class Person { String name; String blog;
    public Person(String name, String blog) {
        this.name = name;
        this.blog = blog;
    }

    public String getName(String name) {
        this.name = name;
    }
    public String getBlog(String blog) {
        this.blog = blog;
    }

    public void main(String [] args) {
        Person unikys = new Person("unikys", "unikys.tistory.com");
        System.out.println(unikys.getName());
    }
}

