package uvsoftgroup.geospatialrestapiapp.service;

import java.util.List;

import org.springframework.stereotype.Service;

import uvsoftgroup.geospatialrestapiapp.model.AddressInfo;


@Service
public interface AddressInfoService {
	public void saveAddressInfo(AddressInfo addressInfo) throws Exception;
	public List<AddressInfo> findAllAddressInfo();
	public AddressInfo findAddressInfo(Long urId);
	public AddressInfo deleteAddressInfo(Long urId);
	public void updateAddressInfo(Long urId, AddressInfo addressInfo);

}
