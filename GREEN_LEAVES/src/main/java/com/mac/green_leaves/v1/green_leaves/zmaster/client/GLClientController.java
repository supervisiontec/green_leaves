/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mac.green_leaves.v1.green_leaves.zmaster.client;

import com.mac.green_leaves.v1.green_leaves.zmaster.client.model.MClient;
import com.mac.green_leaves.v1.zutil.SecurityUtil;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Mohan
 */
@CrossOrigin
@RestController
@RequestMapping("/api/v1/green-leaves/master/clients")
public class GLClientController {

    @Autowired
    private GLClientService clientService;

    @RequestMapping(method = RequestMethod.GET)
    public List<MClient> listClients() {
        return clientService.findByBranch(SecurityUtil.getCurrentUser().getBranch());
    }

    @RequestMapping(value = "/{branch}", method = RequestMethod.GET)
    public List<MClient> listClients(@PathVariable Integer branch) {
        return clientService.findByBranch(branch);
    }

}
