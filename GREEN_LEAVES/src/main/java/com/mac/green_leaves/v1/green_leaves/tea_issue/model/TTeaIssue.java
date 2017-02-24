/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mac.green_leaves.v1.green_leaves.tea_issue.model;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

/**
 *
 * @author Don
 */
@Entity
@Table(name = "t_tea_issue")
public class TTeaIssue implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "index_no")
    private Integer indexNo;

    @Basic(optional = false)
    @NotNull
    @Column(name = "branch")
    private int branch;

    @Basic(optional = false)
    @NotNull
    @Column(name = "date")
    @Temporal(TemporalType.DATE)
    private Date date;

    @Basic(optional = false)
    @NotNull
    @Column(name = "number")
    private int number;

    @Basic(optional = false)
    @NotNull
    @Column(name = "transaction")
    private int transaction;

    @Basic(optional = false)
    @NotNull
    @Column(name = "price")
    private BigDecimal price;

    @Basic(optional = false)
    @NotNull
    @Column(name = "qty")
    private int qty;

    @Size(max = 25)
    @Column(name = "type")
    private String type;

    @Size(max = 25)
    @Column(name = "status")
    private String status;

    @Column(name = "client")
    private Integer client;

    @Column(name = "tea_grade")
    private Integer teaGrade;

    @Column(name = "route_officer")
    private Integer routeOfficer;

    public TTeaIssue() {
    }

    public TTeaIssue(Integer indexNo, int branch, Date date, int number, int transaction, BigDecimal price, int qty, String type, String status, Integer client, Integer teaGrade, Integer routeOfficer) {
        this.indexNo = indexNo;
        this.branch = branch;
        this.date = date;
        this.number = number;
        this.transaction = transaction;
        this.price = price;
        this.qty = qty;
        this.type = type;
        this.status = status;
        this.client = client;
        this.teaGrade = teaGrade;
        this.routeOfficer = routeOfficer;
    }

    public Integer getIndexNo() {
        return indexNo;
    }

    public void setIndexNo(Integer indexNo) {
        this.indexNo = indexNo;
    }

    public int getBranch() {
        return branch;
    }

    public void setBranch(int branch) {
        this.branch = branch;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public int getNumber() {
        return number;
    }

    public void setNumber(int number) {
        this.number = number;
    }

    public int getTransaction() {
        return transaction;
    }

    public void setTransaction(int transaction) {
        this.transaction = transaction;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public int getQty() {
        return qty;
    }

    public void setQty(int qty) {
        this.qty = qty;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Integer getTeaGrade() {
        return teaGrade;
    }

    public void setTeaGrade(Integer teaGrade) {
        this.teaGrade = teaGrade;
    }

    public Integer getRouteOfficer() {
        return routeOfficer;
    }

    public void setRouteOfficer(Integer routeOfficer) {
        this.routeOfficer = routeOfficer;
    }

    public Integer getClient() {
        return client;
    }

    public void setClient(Integer client) {
        this.client = client;
    }

    @Override
    public String toString() {
        return "TTeaIssue{" + "indexNo=" + indexNo + ", branch=" + branch + ", date=" + date + ", number=" + number + ", transaction=" + transaction + ", price=" + price + ", qty=" + qty + ", type=" + type + ", status=" + status + ", client=" + client + ", teaGrade=" + teaGrade + ", routeOfficer=" + routeOfficer + '}';
    }
}
